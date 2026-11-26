(function(){
if(location.hash==='#print')return;
const cube=(s,d,k,t)=>`<div class="fl3" data-sp="${t.sp}" data-rot="${t.rot||0}" style="${t.pos};--s:${s}px;"><div class="cube3 ${k?'k':''}" style="--d:${d}s"><i>0</i><i>1</i><i>⚙</i><i>AI</i><i>1</i><i>0</i></div></div>`;
const ring=(s,d,k,t)=>`<div class="fl3" data-sp="${t.sp}" style="${t.pos}"><div class="ring3 ${k?'k':''}" style="--s:${s}px;--d:${d}s"></div></div>`;
const gear=(s,d,t)=>`<div class="fl3" data-sp="${t.sp}" style="${t.pos}"><div class="gear3" style="--s:${s}px;--d:${d}s"></div></div>`;
const add=(id,h)=>{const e=document.getElementById(id)||document.querySelector(id);if(e)e.insertAdjacentHTML('afterbegin',h)};
add('#about',cube(110,16,1,{sp:-.25,pos:'right:6%;top:12%'})+ring(260,10,1,{sp:.15,pos:'left:-4%;top:40%'})+gear(120,9,{sp:-.35,pos:'right:12%;bottom:6%'}));
add('#books',cube(140,12,0,{sp:.3,pos:'left:4%;top:8%'})+ring(300,8,0,{sp:-.2,pos:'right:-5%;top:30%'})+cube(70,9,0,{sp:-.4,pos:'right:15%;bottom:8%'}));
add('#vault',cube(120,13,0,{sp:-.3,pos:'left:3%;top:6%'})+ring(340,11,0,{sp:.2,pos:'right:-8%;top:3%'})+gear(130,10,{sp:.3,pos:'left:1%;top:60%'})+cube(80,8,0,{sp:.4,pos:'right:3%;top:1%'}));
add('#skills',cube(100,15,1,{sp:.3,pos:'left:7%;top:10%'})+ring(220,9,1,{sp:-.25,pos:'right:4%;bottom:6%'}));
add('#contact',cube(120,12,0,{sp:-.3,pos:'right:7%;top:12%'})+gear(140,8,{sp:.25,pos:'left:5%;bottom:10%'}));
document.body.insertAdjacentHTML('beforeend','<div id="progress3d"><div class="cube3"><i></i><i></i><i></i><i></i><i></i><i></i></div></div>');
const pc=document.querySelector('#progress3d .cube3');
const secs=[...document.querySelectorAll('main section.sec')];
const fls=[...document.querySelectorAll('.fl3')];
let ticking=false;
function upd(){ticking=false;const vh=innerHeight,sy=scrollY;
 secs.forEach(s=>{const r=s.getBoundingClientRect();const c=(r.top+r.height/2-vh/2)/vh; // -1..1
  const rx=Math.max(-1,Math.min(1,c))*4; // section tilts in/out as it scrolls
  s.style.transform=`rotateX(${rx}deg)`});
 fls.forEach(f=>{const s=f.parentElement;const r=s.getBoundingClientRect();const c=(r.top+r.height/2-vh/2);
  f.style.transform=`translate3d(0,${c*parseFloat(f.dataset.sp)}px,0px) rotateY(${sy*.2}deg)`});
 document.querySelectorAll('.hero .scene').forEach(e=>{});
 const h=document.querySelector('.hero');if(h){const p=Math.min(sy,vh*1.2);const c=document.querySelector('.hero>*');h.style.setProperty('--hy',p)}
 const m=document.documentElement.scrollHeight-vh;pc.style.transform=`rotateX(${sy*.3}deg) rotateY(${sy*.45}deg)`;
 // cards: depth wave by viewport position
 document.querySelectorAll('.card.in').forEach(c=>{const r=c.getBoundingClientRect();const d=(r.top+r.height/2-vh/2)/vh;c.style.setProperty('--sx',(d*14).toFixed(1)+'deg');c.style.setProperty('--sz',(-Math.abs(d)*50).toFixed(0)+'px')});
}
addEventListener('scroll',()=>{if(!ticking){ticking=true;requestAnimationFrame(upd)}},{passive:true});addEventListener('resize',upd);upd();
// alternate reveal directions
document.querySelectorAll('.reveal').forEach((e,i)=>e.style.setProperty('--ry',(i%2?-22:22)+'deg'));
// hero parallax layers
const hero=document.querySelector('.hero');
if(hero)addEventListener('scroll',()=>{const y=Math.min(scrollY,900);hero.querySelectorAll('.hero-txt,.scene').forEach((e,i)=>{if(e.tagName==='CANVAS')return;e.style.translate=`0 ${y*(.12+i*.07)}px`})},{passive:true});
})();
(function(){const sc=document.querySelector('.scene');if(!sc)return;let last=0;addEventListener('mousemove',()=>last=performance.now());
 function f(t){if(t-last>2500){sc.style.transform=`rotateY(${Math.sin(t/1400)*26}deg) rotateX(${Math.cos(t/1900)*10}deg)`}requestAnimationFrame(f)}requestAnimationFrame(f)})();
