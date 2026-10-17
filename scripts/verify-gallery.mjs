import assert from 'node:assert/strict';
import {readFile, writeFile, mkdir, rm} from 'node:fs/promises';
import ts from 'typescript';
import {JSDOM} from 'jsdom';
// Exercise arbitrary collection sizes and logical scrolling without changing seed data.
const directory='.gallery-test';
await mkdir(directory,{recursive:true});
try {
 const source=await readFile('src/components/home/collection-gallery.tsx','utf8');
 await writeFile(`${directory}/gallery.mjs`,ts.transpileModule(source,{compilerOptions:{jsx:ts.JsxEmit.ReactJSX,module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText);
 const dom=new JSDOM('<div id="root"></div>',{pretendToBeVisual:true});
 Object.assign(globalThis,{window:dom.window,document:dom.window.document,HTMLElement:dom.window.HTMLElement,Element:dom.window.Element,IS_REACT_ACT_ENVIRONMENT:true});
 window.matchMedia=query=>({matches:query.includes('prefers-reduced-motion'),addListener(){},removeListener(){},addEventListener(){},removeEventListener(){}});
 const React=await import('react');const {createRoot}=await import('react-dom/client');const {renderToString}=await import('react-dom/server');
 const {CollectionGallery}=await import('../.gallery-test/gallery.mjs');
 const root=createRoot(document.getElementById('root'));
 for(const locale of ['en','ar'])for(const count of [0,1,2,4,7]) {
  const children=Array.from({length:count},(_,index)=>React.createElement('article',{key:index},React.createElement('a',{href:`#scent-${index}`},locale==='ar'?`عطر بتسمية عربية طويلة ${index}`:`SCENT ${index}`)));
  const props={count,locale,labels:{previous:'Previous',next:'Next',browse:'Discover'},children};
  const html=renderToString(React.createElement(CollectionGallery,props));assert.ok(!/opacity:0/.test(html));
  await React.act(async()=>root.render(React.createElement(CollectionGallery,props)));
  const rail=document.querySelector('.editorial-gallery');assert.equal(rail.children.length,count);
  assert.equal(document.querySelectorAll('.gallery-controls button').length,count>1?2:0);
  if(count<2)continue;
  const direction=locale==='ar'?-1:1;
  [...rail.children].forEach((item,index)=>Object.defineProperty(item,'offsetLeft',{value:index*320*direction,configurable:true}));
  let scroll;rail.scrollLeft=0;rail.scrollTo=options=>{scroll=options;rail.scrollLeft=options.left;};
  const [previous,next]=document.querySelectorAll('.gallery-controls button');
  const click=async element=>React.act(async()=>element.dispatchEvent(new window.MouseEvent('click',{bubbles:true,detail:0})));
  for(let index=0;index<count+2;index++)await click(next);
  assert.equal(scroll.left,(count-1)*320*direction);assert.equal(scroll.behavior,'auto');
  for(let index=0;index<count+2;index++)await click(previous);
  assert.equal(scroll.left,0);assert.ok(rail.id);assert.equal(next.getAttribute('aria-controls'),rail.id);
 }
 await React.act(async()=>root.unmount());dom.window.close();
 console.log('Gallery: 0/1/2/4/7 items, English/Arabic, visible SSR, keyboard scroll and collection boundaries passed.');
} finally {await rm(directory,{recursive:true,force:true});}
