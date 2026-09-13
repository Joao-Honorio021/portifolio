import { pathToFileURL } from 'node:url';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ? pathToFileURL(process.env.PLAYWRIGHT_MODULE).href : 'playwright');
import fs from 'node:fs';
(async()=>{
 const browser=await chromium.launch({headless:true,channel:"msedge"});
 const page=await browser.newPage({reducedMotion:'reduce'});
 const errors=[]; page.on('pageerror',e=>errors.push(e.message));
 fs.mkdirSync('artifacts/validation',{recursive:true});
 const results=[];
 for(const width of [360,768,1024,1440]) for(const route of ['/','/projetos','/projetos/zapmenu','/projetos/aurora-quest','/projetos/seguidor-de-linha-pid']) {
  await page.setViewportSize({width,height:900});
  const response=await page.goto((process.env.BASE_URL || 'http://localhost:3001')+route,{waitUntil:'networkidle'});
  for(const img of await page.locator('img').all()) { await img.scrollIntoViewIfNeeded(); await img.evaluate(async el=>{ try { await el.decode(); } catch { throw new Error(`Image failed: ${el.currentSrc}`); } }); }
  await page.evaluate(()=>window.scrollTo(0,0));
  await page.keyboard.press('Tab');
  const data=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth,images:[...document.images].map(i=>({alt:i.alt,loaded:i.complete&&i.naturalWidth>0})),focus:getComputedStyle(document.activeElement).outlineStyle,reducedMotion:getComputedStyle(document.documentElement).scrollBehavior}));
  if(data.overflow || data.images.some(i=>!i.loaded||!i.alt.trim())) throw new Error('Layout or image validation failed');
  if(width===360) {
   const menu=page.locator('.menu-toggle');
   await menu.focus(); await page.keyboard.press('Enter');
   if(await menu.getAttribute('aria-expanded')!=='true') throw new Error('Menu did not open');
   await page.keyboard.press('Tab'); await page.keyboard.press('Escape');
   if(await menu.getAttribute('aria-expanded')!=='false' || !await menu.evaluate(el=>el===document.activeElement)) throw new Error('Menu keyboard close failed');
  }
  await page.locator('h1').click();
  const name=(route==='/'?'home':route.split('/').pop())+'-'+width;
  await page.screenshot({path:'artifacts/validation/'+name+'.png',fullPage:true});
  if(route==='/') await page.locator('.skills-grid').screenshot({path:'artifacts/validation/skills-'+width+'.png'});
  results.push({route,width,status:response.status(),...data});
 }
 const externalLinks=[];
 for(const [slug,urls] of Object.entries({zapmenu:['https://zap-menu.netlify.app/'],'aurora-quest':['https://auroracast22.netlify.app/','https://github.com/Joao-Honorio021/hackthon-nasa'],'seguidor-de-linha-pid':['https://github.com/Joao-Honorio021/Pid-line-follower']})) {
  await page.goto((process.env.BASE_URL || 'http://localhost:3001')+'/projetos/'+slug);
  for(const url of urls) {
   const valid=await page.evaluate(url=>[...document.querySelectorAll('a')].some(a=>a.href===url&&a.target==='_blank'&&a.rel.includes('noopener')),url);
   if(!valid) throw new Error('External link missing: '+url);
   externalLinks.push({url,rendered:true});
  }
 }
 fs.writeFileSync('artifacts/validation/results.json',JSON.stringify({results,errors,externalLinks},null,2));
 console.log(JSON.stringify({results,errors,externalLinks})); await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});




