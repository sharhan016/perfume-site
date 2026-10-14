import assert from 'node:assert/strict';
import {readFile, writeFile, mkdir, rm} from 'node:fs/promises';
import {spawnSync} from 'node:child_process';
import ts from 'typescript';

// Exercise the real Motion components in a simulated DOM. This is not a
// substitute for device/OS media-preference testing in a real browser.
if (!process.env.ORYNOVA_MOTION_CASE) {
 await mkdir('.motion-test', {recursive: true});
 const source = await readFile('src/components/animations/fade-reveal.tsx', 'utf8');
 const output = ts.transpileModule(source, {compilerOptions: {jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022}}).outputText;
 await writeFile('.motion-test/components.mjs', output);
 const cinemaSource = await readFile('src/components/animations/cinematic-hero.tsx', 'utf8');
 await writeFile('.motion-test/cinema.mjs', ts.transpileModule(cinemaSource, {compilerOptions: {jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022}}).outputText);
 try {
  for (const mode of ['reduced', 'standard']) {
   const result = spawnSync(process.execPath, ['scripts/verify-motion.mjs'], {env: {...process.env, ORYNOVA_MOTION_CASE: mode}, encoding: 'utf8'});
   process.stdout.write(result.stdout); process.stderr.write(result.stderr);
   assert.equal(result.status, 0, `${mode} motion test failed`);
  }
 } finally {await rm('.motion-test', {recursive: true, force: true});}
} else {
 const {JSDOM} = await import('jsdom');
 const dom = new JSDOM('<!doctype html><div id="root"></div>', {pretendToBeVisual: true, url: 'http://localhost'});
 globalThis.window = dom.window; globalThis.document = dom.window.document;
 globalThis.EventTarget = dom.window.EventTarget; globalThis.NodeList = dom.window.NodeList; globalThis.SVGElement = dom.window.SVGElement; globalThis.getComputedStyle = dom.window.getComputedStyle.bind(dom.window);
 globalThis.HTMLElement = dom.window.HTMLElement; globalThis.Element = dom.window.Element;
 globalThis.requestAnimationFrame = dom.window.requestAnimationFrame.bind(dom.window);
 globalThis.cancelAnimationFrame = dom.window.cancelAnimationFrame.bind(dom.window);
 globalThis.IS_REACT_ACT_ENVIRONMENT = true;
 const reduced = process.env.ORYNOVA_MOTION_CASE === 'reduced';
 window.matchMedia = query => ({matches: query === '(prefers-reduced-motion)' && reduced, media: query, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {}});
 globalThis.IntersectionObserver = class {constructor(callback) {this.callback=callback;} observe(target) {this.callback([{target,isIntersecting:true,intersectionRatio:1}]);} unobserve() {} disconnect() {}};
 window.IntersectionObserver = globalThis.IntersectionObserver;
 const React = await import('react');
 const {createRoot} = await import('react-dom/client');
 const {renderToString} = await import('react-dom/server');
 const {HeroEntrance, FadeReveal} = await import('../.motion-test/components.mjs');
 const {CinematicEntrance,CinematicHero} = await import('../.motion-test/cinema.mjs');
 const sceneMarkup=renderToString(React.createElement(CinematicHero,{theme:'nox',environment:'Scene',product:'Bottle',copy:'Headline',details:'Explore',bottom:'Scroll'}));
 assert.ok(sceneMarkup.includes('Bottle') && sceneMarkup.includes('Headline'));
 assert.ok(!/opacity:0(?:;|")/.test(sceneMarkup), 'Cinematic SSR hides important content');
 const markup = renderToString(React.createElement(HeroEntrance, null, 'A visible headline'));
 assert.ok(markup.includes('A visible headline'));
 assert.ok(!markup.includes('opacity:0'), 'SSR hides important content');
 const root = createRoot(document.getElementById('root'));
 await React.act(async () => {root.render(React.createElement('div', null, React.createElement(HeroEntrance, {className:'hero'}, 'Hero'), React.createElement(FadeReveal, {className:'section'}, 'Section'),React.createElement(CinematicEntrance,{className:'cinema-test',kind:'product'},'Bottle')));});
 await React.act(async () => {await new Promise(resolve => setTimeout(resolve, 100));});
 const hero = document.querySelector('.hero');
 if (reduced) {
  assert.ok(!hero.style.transform || hero.style.transform === 'none', 'Reduced motion animates the hero transform');
  assert.ok(!hero.style.opacity || hero.style.opacity === '1', 'Reduced motion fades the hero');
  const cinema = document.querySelector('.cinema-test');
  assert.ok(!cinema.style.transform || cinema.style.transform === 'none', 'Reduced cinematic entrance moves the bottle');
  assert.ok(!cinema.style.opacity || cinema.style.opacity === '1', 'Reduced cinematic entrance fades the bottle');
  const section = document.querySelector('.section');
  assert.ok(!section.style.transform || section.style.transform === 'none', 'Reduced motion animates section transforms');
 } else {
  assert.ok(document.querySelector('.cinema-test').style.transform.includes('scale'), 'Cinematic product entrance did not start');
  assert.ok(hero.style.transform.includes('translateY'), 'Standard hero animation did not start');
  assert.ok(document.querySelector('.section').style.transform.includes('translateY'), 'Scroll reveal did not start on intersection');
 }
 await React.act(async () => root.unmount());
 dom.window.close();
 console.log(`${reduced ? 'Reduced' : 'Standard'} motion: passed; server content remains visible.`);
}
