const S=window.SITE;
const T={
 ar:{nav_about:"من أنا",nav_books:"أعمالي التفاعلية",nav_vault:"ملف إنجاز",nav_skills:"المهارات",nav_contact:"تواصل",
  hero_tag:"// ملف إنجاز",cta_vault:"شوفي ملف إنجاز",cta_books:"الكتب التفاعلية",
  st_books:"كتب تفاعلية",st_units:"وحدات (أولى ثانوي)",st_lessons:"درسًا (أولى ثانوي)",
  about_p:"مهندسة بالتدريب، ومعلمة حاسب آلي بالشغف. أدرّس التقنية الرقمية والروبوتات، وبطبّق عقلية الهندسة في الفصل: أفكّك الفكرة المعقدة لخطوات بسيطة، وأبني لها نموذجًا تفاعليًا تجرّبه الطالبة بنفسها، وأقيس أثر التعلّم.",
  vault_t:{all:"الكل",cert:"شهادات",course:"دورات",initiative:"مبادرات",project:"مشاريع",honor:"تكريمات"},
  open:"فتح",view:"عرض الملف",soon:"قريبًا",mail:"راسليني",pdf:"حفظ PDF",
  skills:["الروبوتات","التقنية الرقمية","تصميم محتوى تفاعلي","التفكير الهندسي","حل المشكلات","الذكاء الاصطناعي في التعليم","الفيديو التعليمي","أوراق عمل تفاعلية","التعلّم النشط"]},
 en:{nav_about:"About",nav_books:"Interactive Work",nav_vault:"Portfolio",nav_skills:"Skills",nav_contact:"Contact",
  hero_tag:"// teacher achievement portfolio",cta_vault:"View the portfolio",cta_books:"Interactive books",
  st_books:"interactive books",st_units:"units (Grade 10)",st_lessons:"lessons (Grade 10)",
  about_p:"An engineer by training and a computer teacher by passion. I teach Digital Technology and robotics and bring an engineer's mindset to class: break a complex idea into simple steps, build an interactive model students can try themselves, and measure the learning.",
  vault_t:{all:"All",cert:"Certificates",course:"Courses",initiative:"Initiatives",project:"Projects",honor:"Honors"},
  open:"Open",view:"View file",soon:"Coming soon",mail:"Email me",pdf:"Save as PDF",
  skills:["Teaching robotics","Teaching Digital Technology","Interactive content design","Engineering thinking","Problem solving","AI in education","Educational video","Interactive worksheets","Active learning"]}
};
let lang=new URLSearchParams(location.search).get('lang')||localStorage.getItem('lang')||'ar',filter='all';
const $=s=>document.querySelector(s);
const STD_NAME=k=>({plan:'إعداد وتنفيذ خطة التعلم',results:'تحليل نتائج المتعلمين',assess:'تنوع أساليب التقويم'}[k]||(S.standards.find(s=>String(s.n)===String(k))||{}).ar||'');
const DLINK=k=>S.folders&&S.folders[k]?`<a class="dl" href="https://drive.google.com/drive/folders/${S.folders[k]}" target="_blank" rel="noopener">فتح المجلد ↗</a>`:'';
function vaultFilters(){const ks=['all',...S.standards.map(s=>String(s.n)),'plan','results','assess'];return ks.map(k=>`<button type="button" data-f="${k}" class="${k===filter?'on':''}">${k==='all'?'الكل':(/^\d$/.test(k)?k+'. ':'')+STD_NAME(k)}</button>`).join('')}
function vaultCards(){let its=S.items.filter(i=>!i.term2&&(filter==='all'||String(i.std)===filter));let h=its.map(i=>card(i,'ar')).join('');if(filter!=='all'&&!its.length)h=`<article class="card reveal in ph"><div class="meta"><span>${STD_NAME(filter)}</span><span class="badge">قريبًا</span></div><h3>شواهد ${STD_NAME(filter)}</h3><p>هنا هتظهر شواهدك. ابعتي الصورة أو الـ PDF وأنا أضيفها.</p>${DLINK(filter)}</article>`;return h}
function buildRing(){const r=document.getElementById('ring');const n=S.standards.length;r.innerHTML=S.standards.map((s,i)=>{const cnt=S.items.filter(x=>String(x.std)===String(s.n)).length;return `<div class="rp" data-std="${s.n}" style="--i:${i}"><b>${s.n}</b><span>${s.ar}</span><small>${cnt?cnt+' شاهد':'قريبًا'}</small>${DLINK(s.n)}</div>`}).join('');
 document.getElementById('triple').innerHTML=[['plan','إعداد وتنفيذ خطة التعلم','بعض الشواهد'],['results','تحليل نتائج المتعلمين','للمزيد'],['assess','تنوع أساليب التقويم','صفية ولاصفية: الاختبارات (ورقي وإلكتروني) · التطبيق العملي · المهام الأدائية · المشاريع']].map(([k,t,s])=>`<div class="t3" data-std="${k}"><h4>${t}</h4><p>${s}</p>${DLINK(k)}</div>`).join('')}
function card(it,L){
  L=L||lang;const t=T[L],ph=it.placeholder;
  const meta=`<div class="meta"><span>${it.book?t.vault_t.project:STD_NAME(it.std)}</span>${ph?`<span class="badge">${t.soon}</span>`:`<span class="mono">${it.date||''}</span>`}</div>`;
  let act='';
  if(it.link) act=`<a class="open" href="${it.link}" target="_blank" rel="noopener">${t.open} ↗</a>`;
  else if(it.file) act=`<button class="open" type="button" data-file="${it.file}">${t.view}</button>`;
  return `<article class="card reveal${ph?' ph':''}"><span class="no">${String(it.id).padStart(2,'0')}</span>${meta}<h3>${it.title[L]}</h3><p>${it.desc[L]}</p>${act}</article>`;
}
function render(){
  const t=T[lang];
  document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';
  document.getElementById('pdf').textContent=t.pdf;$('#lang').textContent=lang==='ar'?'EN':'عربي';
  document.querySelectorAll('[data-i]').forEach(e=>e.textContent=t[e.dataset.i]);
  $('#name').textContent=S.name[lang];$('#fname').textContent=S.name.en;
  $('#role').textContent=S.role[lang];$('#tagline').textContent=S.tagline[lang];
  $('#bookGrid').innerHTML=S.items.filter(i=>i.book).map(i=>card(i)).join('');
  $('#filters').innerHTML=vaultFilters();
  $('#vaultGrid').innerHTML=vaultCards();buildRing();
  $('#chips').innerHTML=t.skills.map(s=>`<span>${s}</span>`).join('');
  const m=$('#mail');m.href='mailto:'+S.contact.email;m.innerHTML=`<span class="ml">${t.mail}</span><span class="me" dir="ltr">${S.contact.email}</span>`;
  observe();
}
function observe(){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:0,rootMargin:'0px 0px -5% 0px'});document.querySelectorAll('.reveal').forEach(e=>io.observe(e))}
document.addEventListener('click',e=>{
  const f=e.target.closest('[data-f]');if(f){filter=f.dataset.f;render();}
  const b=e.target.closest('[data-file]');if(b){const p='files/'+b.dataset.file;$('#lbbody').innerHTML=/\.pdf$/i.test(p)?`<iframe src="${p}"></iframe>`:`<img src="${p}" alt="">`;$('#lightbox').hidden=false;}
  if(e.target.id==='lbx'||e.target.id==='lightbox')$('#lightbox').hidden=true;
});
$('#lang').onclick=()=>{lang=lang==='ar'?'en':'ar';localStorage.setItem('lang',lang);render();typeLine();};
document.querySelectorAll('main section.sec h2').forEach(h=>h.classList.add('reveal'));
// typed code line
let tt;function typeLine(){clearTimeout(tt);const s='robot.build(); student.code(); future.inspire();';const el=$('#typed');el.textContent='';let i=0;(function n(){el.textContent=s.slice(0,++i);if(i<s.length)tt=setTimeout(n,45)})()}
// counters
function counters(){document.querySelectorAll('[data-count]').forEach(el=>{const to=+el.dataset.count;let c=0;const step=()=>{c+=Math.max(1,Math.ceil(to/30));if(c>=to)c=to;el.textContent=c;if(c<to)setTimeout(step,40)};step()})}

// network hero canvas
(function(){const cv=document.getElementById('net'),x=cv.getContext('2d');let w,h,N=[],m={x:-999,y:-999};
 function rs(){const r=cv.parentNode.getBoundingClientRect();w=cv.width=r.width;h=cv.height=r.height;N=Array.from({length:Math.floor(w*h/14000)},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.6,vy:(Math.random()-.5)*.6}))}
 rs();addEventListener('resize',rs);
 const mv=e=>{const r=cv.getBoundingClientRect(),p=e.touches?e.touches[0]:e;m.x=p.clientX-r.left;m.y=p.clientY-r.top};
 addEventListener('mousemove',mv);addEventListener('touchmove',mv,{passive:true});
 function f(){x.clearRect(0,0,w,h);
  N.forEach((p,i)=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;
   const dm=Math.hypot(p.x-m.x,p.y-m.y);if(dm<160){p.x+=(p.x-m.x)*.01;p.y+=(p.y-m.y)*.01}
   x.fillStyle='rgba(255,255,255,.9)';x.beginPath();x.arc(p.x,p.y,2,0,7);x.fill();
   for(let j=i+1;j<N.length;j++){const q=N[j],d=Math.hypot(p.x-q.x,p.y-q.y);if(d<120){x.strokeStyle='rgba(180,220,255,'+(1-d/120)*.55+')';x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke()}}
   if(dm<200){x.strokeStyle='rgba(255,255,255,'+(1-dm/200)*.9+')';x.beginPath();x.moveTo(p.x,p.y);x.lineTo(m.x,m.y);x.stroke()}});
  requestAnimationFrame(f)}
 f()})();
// glow follows cursor
addEventListener('mousemove',e=>{const g=document.getElementById('glow');g.style.left=e.clientX+'px';g.style.top=e.clientY+'px'});
// 3D tilt on cards
document.addEventListener('mousemove',e=>{document.querySelectorAll('.card:hover').forEach(c=>{const r=c.getBoundingClientRect(),px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(700px) rotateY(${px*10}deg) rotateX(${-py*10}deg) translateY(-6px)`})});
document.addEventListener('mouseout',e=>{if(e.target.classList&&e.target.classList.contains('card'))e.target.style.transform=''});
// flip
const fl=document.getElementById('flip');fl.onclick=()=>fl.classList.toggle('on');fl.onkeydown=e=>{if(e.key==='Enter'||e.key===' ')fl.classList.toggle('on')};
// terminal
const TERM={ar:{help:"الأوامر: about, books, portfolio, contact",about:"لمياء توفيق: مهندسة ومعلمة حاسب آلي وروبوتات، تدرّس التقنية الرقمية للمرحلة الثانوية.",books:"كتابان تفاعليان: التقنية الرقمية ١-١ و ٣ (روابط في قسم أعمالي).",portfolio:"ملف إنجاز بيكبر مع الوقت: شهادات، دورات، مبادرات، تكريمات.",contact:"البريد: "},
 en:{help:"commands: about, books, portfolio, contact",about:"Lamiaa Tawfeek: engineer and computer teacher, teaching Digital Technology to secondary students.",books:"Two interactive books: Digital Technology 1-1 and 3 (links in the Work section).",portfolio:"The portfolio keeps growing: certificates, courses, initiatives, honors.",contact:"Email: "}};
function term(cmd){const o=document.getElementById('tout');const r=TERM[lang][cmd]+(cmd==='contact'?S.contact.email:'');const rr=lang==='ar'?r.replace(/([A-Za-z][A-Za-z0-9@._, \-]*[A-Za-z0-9])/g,'<bdi dir="ltr">$1</bdi>'):r;o.innerHTML+=`<b dir="ltr">$ ${cmd}</b>\n<span dir="${lang==='ar'?'rtl':'ltr'}" style="display:block">${rr}</span>\n\n`;o.scrollTop=o.scrollHeight}
function termInit(){document.getElementById('tout').innerHTML='';term('help');document.getElementById('tcmds').innerHTML=['about','books','portfolio','contact'].map(c=>`<button type="button" data-cmd="${c}">${c}</button>`).join('')}
document.addEventListener('click',e=>{const b=e.target.closest('[data-cmd]');if(b)term(b.dataset.cmd)});
// marquee + flip text
const MQ={ar:["مهندسة","معلمة","روبوتات","تقنية رقمية","ENGINEER","TEACHER","ROBOTICS"],en:["ENGINEER","TEACHER","ROBOTICS","DIGITAL TECH","مهندسة","معلمة","روبوتات"]};
const FL={ar:{e:["أحلّل المشكلة","أبني نموذجًا","أختبر وأحسّن"],t:["أبسّط الفكرة","أجعل الطالبة تجرّب","أقيس الفهم وأُلهم"],h:"اضغطي للإكمال ⟲",l:["مهندسة","معلمة"]},en:{e:["Analyse the problem","Build a model","Test and improve"],t:["Simplify the idea","Let her try it","Measure and inspire"],h:"tap to continue ⟲",l:["ENGINEER","TEACHER"]}};
function extra(){const m=MQ[lang].map(s=>`<span>${s}</span><span>✦</span>`).join('');document.getElementById('mq').innerHTML=m+m;
 document.getElementById('engSteps').innerHTML=FL[lang].e.map(s=>`<li>${s}</li>`).join('');document.getElementById('tchSteps').innerHTML=FL[lang].t.map(s=>`<li>${s}</li>`).join('');document.querySelectorAll('.hintS').forEach(x=>x.textContent=FL[lang].h);document.getElementById('lblE').textContent=FL[lang].l[0];document.getElementById('lblT').textContent=FL[lang].l[1];termInit()}
const _r=render;render=function(){_r();extra()};
render();typeLine();counters();
if(location.hash==='#shot'||location.hash==='#print'){document.querySelectorAll('.reveal').forEach(e=>e.classList.add('in'));if(location.hash==='#shot'){document.head.insertAdjacentHTML('beforeend','<style>.reveal{transition:none!important}</style>')}if(location.hash==='#shot')document.querySelector('.hero').style.minHeight='760px'}
document.getElementById('pdf').onclick=()=>{document.querySelectorAll('.reveal').forEach(e=>e.classList.add('in'));window.print()};

// ring carousel
(function(){let ang=0,drag=false,sx=0,sa=0,paused=false;const r=()=>document.getElementById('ring');
 function ap(){const el=r();if(el)el.style.transform=`rotateX(-8deg) rotateY(${ang}deg)`;
  const n=document.querySelectorAll('.rp').length||8;document.querySelectorAll('.rp').forEach((p,i)=>{const R=innerWidth<700?150:290;p.style.transform=`rotateY(${i*360/n}deg) translateZ(${R}px)`})}
 function tick(){if(!drag&&!paused)ang-=.25;ap();requestAnimationFrame(tick)}tick();
 const w=document.getElementById('ringwrap');
 w.addEventListener('pointerdown',e=>{drag=true;sx=e.clientX;sa=ang});addEventListener('pointerup',()=>drag=false);
 addEventListener('pointermove',e=>{if(drag)ang=sa+(e.clientX-sx)*.4});
 w.addEventListener('mouseenter',()=>paused=true);w.addEventListener('mouseleave',()=>paused=false);
})();
document.addEventListener('click',e=>{if(e.target.closest('a.dl'))return;const p=e.target.closest('[data-std]');if(p){filter=p.dataset.std;render();document.getElementById('filters').scrollIntoView({behavior:'smooth',block:'center'})}});
// hero 3D follow
(function(){const sc=document.querySelector('.scene');addEventListener('mousemove',e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;sc.style.transform=`rotateY(${x*30}deg) rotateX(${-y*22}deg)`})})();
