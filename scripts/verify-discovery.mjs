import assert from 'node:assert/strict';
import {readFile,writeFile,mkdir,rm} from 'node:fs/promises';
import {spawnSync} from 'node:child_process';
import ts from 'typescript';
// Interaction regression in a simulated DOM; no physical-device performance claim.
if(!process.env.ORYNOVA_DISCOVERY_MODE) {
 await mkdir('.discovery-test',{recursive:true});
 try {
  for(const name of ['fragrance-preview','discovery-notes']) {
   const source=(await readFile(`src/components/fragrance/${name}.tsx`,'utf8')).replace("next/image","next/image.js").replaceAll("@/components/animations/selection-transition","./selection-transition.mjs").replaceAll("@/components/animations/motion-spec","./motion-spec.mjs").replace("@/components/ui/editorial-link","./cta.mjs").replace("'./discovery-notes'","'./discovery-notes.mjs'");
   await writeFile(`.discovery-test/${name}.mjs`,ts.transpileModule(source,{compilerOptions:{jsx:ts.JsxEmit.ReactJSX,module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText);
  }
  for(const name of ['motion-spec','selection-transition']) {
   const extension=name==='motion-spec'?'ts':'tsx';
   const source=(await readFile(`src/components/animations/${name}.${extension}`,'utf8')).replace("'./motion-spec'","'./motion-spec.mjs'");
   await writeFile(`.discovery-test/${name}.mjs`,ts.transpileModule(source,{compilerOptions:{jsx:ts.JsxEmit.ReactJSX,module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText);
  }
  // Only replace the framework navigation boundary; selector and Motion logic stay real.
  await writeFile('.discovery-test/cta.mjs',"import React from 'react';export function PremiumCta({href,children}){return React.createElement('a',{href},children)}");
  for(const mode of ['standard','reduced']) {
   const result=spawnSync(process.execPath,['scripts/verify-discovery.mjs'],{encoding:'utf8',env:{...process.env,ORYNOVA_DISCOVERY_MODE:mode}});
   process.stdout.write(result.stdout);process.stderr.write(result.stderr);assert.equal(result.status,0);
  }
 }finally{await rm('.discovery-test',{recursive:true,force:true});}
}else{
 const {JSDOM}=await import('jsdom');const dom=new JSDOM('<div id="root"></div>',{pretendToBeVisual:true,url:'http://localhost'});
 Object.assign(globalThis,{window:dom.window,document:dom.window.document,HTMLElement:dom.window.HTMLElement,Element:dom.window.Element,SVGElement:dom.window.SVGElement,NodeList:dom.window.NodeList,EventTarget:dom.window.EventTarget,getComputedStyle:dom.window.getComputedStyle.bind(dom.window),requestAnimationFrame:dom.window.requestAnimationFrame.bind(dom.window),cancelAnimationFrame:dom.window.cancelAnimationFrame.bind(dom.window),IS_REACT_ACT_ENVIRONMENT:true});
 const reduced=process.env.ORYNOVA_DISCOVERY_MODE==='reduced';
 window.matchMedia=query=>({matches:query.includes('prefers-reduced-motion')&&reduced,media:query,addListener(){},removeListener(){},addEventListener(){},removeEventListener(){}});
 let scrollOptions;Element.prototype.scrollIntoView=function(options){scrollOptions=options;};
 const React=await import('react');const {createRoot}=await import('react-dom/client');const {renderToString}=await import('react-dom/server');
 const {FragrancePreview}=await import('../.discovery-test/fragrance-preview.mjs');
 const text=en=>({en,ar:en});const asset={src:null,width:600,height:900,alt:text('Bottle')};
 // Seven fixtures exercise arbitrary collection length, independently of brand seed count.
 const fragrances=Array.from({length:7},(_,index)=>({id:`scent-${index}`,slug:`scent-${index}`,name:`SCENT ${index}`,theme:'nox',tagline:text(`Signature ${index}`),images:{primary:asset},notes:{top:[{id:'lavender',name:text('Lavender')}],heart:[{id:'coffee',name:text('Coffee')}],base:[{id:'oud',name:text('Oud')}]}}));
 const props={fragrances,initialId:'scent-0',previewCount:2,locale:'en',labels:{title:'Notes',top:'TOP NOTES',heart:'HEART NOTES',base:'BASE NOTES'},selectLabel:'Fragrances',exploreLabels:Object.fromEntries(fragrances.map(p=>[p.id,`Explore ${p.name}`])),descriptions:{top:'The First Impression',heart:'The Soul',base:'The Lasting Impression'},environment:asset};
 const html=renderToString(React.createElement(FragrancePreview,props));assert.ok(html.includes('Lavender'));const serverDoc=new JSDOM(html).window.document;for(const element of serverDoc.querySelectorAll('[style]'))if(!element.closest('[aria-hidden="true"]'))assert.notEqual(element.style.opacity,'0','SSR hides readable discovery content');
 const root=createRoot(document.getElementById('root'));await React.act(async()=>root.render(React.createElement(FragrancePreview,props)));
 const fragranceTabs=()=>[...document.querySelectorAll('.discovery-fragrance-tabs button')];assert.equal(fragranceTabs().length,7);assert.equal(fragranceTabs().filter(b=>b.tabIndex===0).length,1);
 const key=async(button,key)=>{await React.act(async()=>button.dispatchEvent(new window.KeyboardEvent('keydown',{key,bubbles:true})));};
 await key(fragranceTabs()[0],'End');assert.equal(fragranceTabs()[6].getAttribute('aria-selected'),'true');assert.equal(document.activeElement,fragranceTabs()[6]);assert.equal(scrollOptions.inline,'nearest');assert.equal(scrollOptions.behavior,'auto');
 await key(fragranceTabs()[6],'ArrowRight');assert.equal(fragranceTabs()[0].getAttribute('aria-selected'),'true');
 await React.act(async()=>root.render(React.createElement(FragrancePreview,{...props,locale:'ar'})));
 await key(fragranceTabs()[0],'ArrowRight');assert.equal(fragranceTabs()[6].getAttribute('aria-selected'),'true');
 await key(fragranceTabs()[6],'Home');assert.equal(fragranceTabs()[0].getAttribute('aria-selected'),'true');
 const noteTabs=[...document.querySelectorAll('.discovery-note-tabs button')];await key(noteTabs[0],'End');assert.equal(noteTabs[2].getAttribute('aria-selected'),'true');
 await key(noteTabs[2],'ArrowRight');assert.equal(noteTabs[1].getAttribute('aria-selected'),'true');
 await React.act(async()=>{await new Promise(resolve=>setTimeout(resolve,450));});assert.ok(document.querySelector('.discovery-note-panel').textContent.includes('Coffee'));
 if(reduced){assert.ok(!document.querySelector('.discovery-product-art>div').style.transform||document.querySelector('.discovery-product-art>div').style.transform==='none');}
 for(const e of document.querySelectorAll('[aria-labelledby]'))for(const id of e.getAttribute('aria-labelledby').split(' '))assert.ok(document.getElementById(id),`Missing accessible label ${id}`);
 await React.act(async()=>root.unmount());dom.window.close();console.log(`${process.env.ORYNOVA_DISCOVERY_MODE}: seven-product selector, wraparound, RTL, note navigation, ARIA and visible SSR passed.`);
}
