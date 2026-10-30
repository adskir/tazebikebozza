/* Tazebike demo: shared data, header/footer, cart. Demo only: no real payments. */
const WA = '393287392980';
const GOOGLE_URL = 'https://share.google/8w8pPSBSuYXGYuW59';
const IG_URL = 'https://www.instagram.com/tazebikeofficial/';
const FB_URL = 'https://www.facebook.com/tazebike/';
const CDN = 'https://irp.cdn-website.com/a1130d6c/dms3rep/multi/opt/';

/* ---------- catalogue (example prices) ---------- */
const PRODUCTS = [
  {id:'basso-strada', cat:'bici', sub:'Corsa', brand:'Basso', name:'Bici da corsa Basso', price:1890, cond:'nuovo', stock:'in', img:'img/basso-strada.jpg', sizes:['S','M','L'], specs:{Telaio:'Alluminio',Freni:'A disco',Uso:'Strada'}, desc:'Bici da corsa del marchio veneto Basso, di cui siamo rivenditori a Bari. Leggera e reattiva, per uscite veloci e granfondo.'},
  {id:'gravel-viola', cat:'bici', sub:'Gravel', brand:'Bergamont', name:'Gravel viola', price:1290, cond:'nuovo', stock:'in', img:'img/gravel-viola.jpg', sizes:['S','M','L','XL'], specs:{Telaio:'Alluminio',Freni:'A disco',Uso:'Strada e sterrato'}, desc:'Gravel versatile per la città, le strade bianche e i viaggi con borse.'},
  {id:'grandurance', cat:'bici', sub:'Gravel', brand:'Bergamont', name:'Grandurance 4', price:1099, cond:'nuovo', stock:'in', img:'img/gravel-verde.jpg', sizes:['S','M','L'], specs:{Freni:'A disco meccanici',Cambio:'Shimano Sora 2×9v',Uso:'Gravel'}, desc:'Gravel con freni a disco meccanici e cambio Shimano Sora 2×9v. È anche nella nostra flotta di noleggio: provala prima di comprarla.'},
  {id:'gravel-argento', cat:'bici', sub:'Gravel', brand:'Bergamont', name:'Gravel touring con portapacchi', price:1190, cond:'nuovo', stock:'order', img:'img/gravel-argento.jpg', sizes:['M','L'], specs:{Freni:'A disco',Accessori:'Portapacchi',Uso:'Viaggio'}, desc:'Pronta per il cicloturismo, con portapacchi già montato.'},
  {id:'corsa-azzurra', cat:'bici', sub:'Corsa', brand:'Tazebike', name:'Bici da strada azzurra', price:890, cond:'nuovo', stock:'in', img:'img/corsa-azzurra.jpg', sizes:['S','M','L'], specs:{Freni:'A disco',Uso:'Strada, entry level'}, desc:'Entry level per iniziare a pedalare su strada, con freni a disco.'},
  {id:'mtb-nera', cat:'bici', sub:'Mountain bike', brand:'Tazebike', name:'Mountain bike nera', price:790, cond:'nuovo', stock:'in', img:'img/mtb-nera.jpg', sizes:['M','L'], specs:{Ruote:'29"',Freni:'A disco idraulici',Uso:'MTB'}, desc:'Hardtail per sentieri e uscite nel weekend.'},
  {id:'bici-bimbo', cat:'bici', sub:'Bambini', brand:'Tazebike', name:'Bici bimbo con rotelle', price:189, cond:'nuovo', stock:'in', img:'img/bici-bimbo.jpg', sizes:['16"'], specs:{Ruote:'16"',Età:'4–6 anni'}, desc:'La prima bici, con rotelle e paracatena.'},
  {id:'graziella', cat:'bici', sub:'City bike', brand:'Restauro Tazebike', name:'City bike vintage restaurata', price:290, cond:'usato', stock:'in', img:'img/restauro-dopo.jpg', sizes:['Unica'], specs:{Stato:'Restaurata in officina',Uso:'Città'}, desc:'Bici d\'epoca restaurata nella nostra officina, con pezzi originali. Pezzo unico.'},
  {id:'xp-id92', cat:'ebike', sub:'E-trekking', brand:'XP', name:'XP I-D9.2 27,5"', price:2190, cond:'nuovo', stock:'in', img:'img/xp-id92-rossa.jpg', contain:true, sizes:['27,5"'], specs:{Ruote:'27,5"',Altezza:'1,75–1,95 m',Uso:'Città e trekking'}, desc:'E-bike a pedalata assistita per chi è alto da 1,75 a 1,95 m. La trovi anche a noleggio.'},
  {id:'xp-id82', cat:'ebike', sub:'E-city', brand:'XP', name:'XP I-D8.2 26"', price:1990, cond:'nuovo', stock:'in', img:'img/xp-id82.jpg', contain:true, sizes:['26"'], specs:{Ruote:'26"',Altezza:'1,65–1,85 m',Uso:'Città'}, desc:'E-bike con telaio basso, comoda per salire e scendere. Per altezze da 1,65 a 1,85 m.'},
  {id:'xp-xload', cat:'ebike', sub:'Cargo', brand:'XP', name:'XP XLOAD cargo', price:2690, cond:'nuovo', stock:'order', img:'img/xp-xload.jpg', contain:true, sizes:['Unica'], specs:{Carico:'Fino a 2 persone e 120 kg',Batteria:'18 Ah',Uso:'Cargo, famiglia'}, desc:'Praticissima, con vano di carico per 2 persone e 120 kg. Agilissima nonostante le dimensioni.'},
  {id:'bergamont-ecity', cat:'ebike', sub:'E-city', brand:'Bergamont', name:'Bergamont e-city', price:2490, cond:'nuovo', stock:'in', img:'img/bergamont-ecity-blu.jpg', sizes:['S','M','L'], specs:{Motore:'Centrale',Uso:'Città e trekking'}, desc:'E-bike tedesca per spostarsi in città ogni giorno, con portapacchi e parafanghi.'},
  {id:'emtb-gialla', cat:'ebike', sub:'E-MTB', brand:'Bergamont', name:'E-MTB full gialla', price:3290, cond:'nuovo', stock:'order', img:'img/emtb-gialla.jpg', sizes:['M','L'], specs:{Sospensioni:'Full',Uso:'Sentieri'}, desc:'E-mountain bike biammortizzata per i sentieri della Murgia.'},
  {id:'ebike-pieghevole', cat:'ebike', sub:'Pieghevole', brand:'Tazebike', name:'E-bike pieghevole', price:1190, cond:'nuovo', stock:'in', img:'img/ebike-pieghevole.jpg', sizes:['20"'], specs:{Ruote:'20"',Uso:'Treno, auto, camper'}, desc:'Si piega in pochi secondi: perfetta con il treno o in camper.'},
  {id:'monopattino', cat:'mono', sub:'Monopattini', brand:'Tazebike', name:'Monopattino elettrico', price:449, cond:'nuovo', stock:'in', img:'img/monopattino.jpg', sizes:['Unica'], specs:{Uso:'Città'}, desc:'Monopattino elettrico a norma, con luci e campanello. Assistenza nella nostra officina.'},
  {id:'borse-telaio', cat:'acc', sub:'Borse', brand:'Tazebike', name:'Borsa telaio in tessuto africano', price:29, cond:'nuovo', stock:'in', img:'img/borse-telaio.jpg', sizes:['Unica'], specs:{Fantasia:'Assortita'}, desc:'Borsa triangolo per il telaio, in tessuto wax. Ogni pezzo è diverso.'},
  {id:'occhiali-outof', cat:'acc', sub:'Occhiali', brand:'Out Of', name:'Occhiali Out Of', price:159, cond:'nuovo', stock:'in', img:'img/occhiali-outof.jpg', sizes:['Unica'], specs:{Lenti:'Fotocromatiche'}, desc:'Occhiali da ciclismo ultraleggeri.'},
  {id:'zaino-eastpak', cat:'acc', sub:'Zaini', brand:'Eastpak', name:'Zaino Eastpak giallo', price:65, cond:'nuovo', stock:'in', img:'img/zaino-eastpak.jpg', sizes:['Unica'], specs:{Colore:'Giallo'}, desc:'Lo zaino di tutti i giorni.'},
  {id:'borse-brn', cat:'acc', sub:'Borse', brand:'BRN', name:'Borsa manubrio BRN', price:39, cond:'nuovo', stock:'order', img:'img/borse-brn.jpg', sizes:['Unica'], specs:{Colori:'Giallo, oliva, nero'}, desc:'Borsa impermeabile con bande riflettenti.'},
  {id:'casco-brn', cat:'acc', sub:'Caschi', brand:'BRN', name:'Casco urbano BRN', price:59, cond:'nuovo', stock:'in', img:'img/casco-brn.jpg', sizes:['M','L'], specs:{Uso:'Città'}, desc:'Casco da città leggero.'},
  {id:'cappellini', cat:'acc', sub:'Abbigliamento', brand:'Tazebike', name:'Cappellino da ciclismo', price:25, cond:'nuovo', stock:'in', img:'img/cappellini.jpg', sizes:['Unica'], specs:{Fantasia:'Assortita'}, desc:'Cappellini in cotone, tante fantasie in negozio.'},
  {id:'seggiolino', cat:'acc', sub:'Bambini', brand:'Polisport', name:'Seggiolino bimbo', price:79, cond:'nuovo', stock:'in', img:'img/acc-seggiolino.jpg', contain:true, sizes:['Unica'], specs:{Montaggio:'Telaio'}, desc:'Seggiolino posteriore per bambini. Montaggio gratuito in officina.'}
];
const CATS = {bici:'Bici', ebike:'E-bike', mono:'Monopattini', acc:'Accessori e abbigliamento'};

/* ---------- rental fleet ---------- */
const FLEET = [
  {id:'xp-id92', name:'XP I-D9.2', kind:'e', label:'E-trekking', rate:40, rate2:35, units:2, img:'img/xp-id92-rossa.jpg', desc:'27,5", per altezze da 1,75 a 1,95 m'},
  {id:'xp-id82', name:'XP I-D8.2', kind:'e', label:'E-trekking', rate:40, rate2:35, units:2, img:'img/xp-id82.jpg', desc:'26", per altezze da 1,65 a 1,85 m'},
  {id:'xp-xload', name:'XP XLOAD', kind:'e', label:'E-cargo', rate:40, rate2:35, units:1, img:'img/xp-xload.jpg', desc:'Fino a 2 persone e 120 kg, batteria 18 Ah', todo:true},
  {id:'horizon', name:'Bergamont Horizon 4', kind:'m', label:'Trekking', rate:25, rate2:20, units:3, img:CDN+'_d1740_bergamont_horizon_4_lady_-_bici_da_trekking_-_donna_11410781_963266-293h.jpg', desc:'Freni a disco idraulici, Shimano 3×8v, portapacchi 27 kg'},
  {id:'grandurance', name:'Bergamont Grandurance 4', kind:'m', label:'Gravel', rate:40, rate2:35, units:2, img:'img/gravel-verde.jpg', cover:true, desc:'Gravel, Shimano Sora 2×9v, varie taglie'},
  {id:'tandem', name:'Tandem 26"', kind:'m', label:'Tandem', rate:25, rate2:20, units:1, img:'img/tandem.jpg', desc:'Per esplorare Bari in due'}
];
const EXTRAS = [
  {id:'casco', name:'Casco', price:0, img:'img/acc-casco.jpg', note:'incluso'},
  {id:'seggiolino', name:'Seggiolino bimbo', price:5, img:'img/acc-seggiolino.jpg'},
  {id:'borse', name:'Borse laterali', price:4, img:'img/acc-borse.jpg'},
  {id:'sottosella', name:'Borsa sottosella Zéfal', price:3, img:'img/acc-sottosella.jpg'},
  {id:'gps', name:'Supporto GPS', price:2, img:'img/acc-gps.jpg'},
  {id:'trailer', name:'Bici traino bimbo', price:8, img:'img/acc-trailer.jpg'}
];
/* demo bookings: [fleetId, startDay, endDay] relative to today (0 = today) */
const BOOKINGS = [['xp-id92',0,2],['xp-id92',4,4],['xp-id82',0,0],['xp-id82',3,5],['xp-xload',0,3],['horizon',2,4],['horizon',2,2],['grandurance',5,6],['tandem',1,2]];

/* ---------- opening hours (Google: pausa 13–16, da verificare) ---------- */
const HOURS = {1:[[9,13],[16,20]],2:[[9,13],[16,20]],3:[[9,13],[16,20]],4:[[9,13],[16,20]],5:[[9,13],[16,20]],6:[[9,13]],0:[]};
function openState(d=new Date()){
  const h=d.getHours()+d.getMinutes()/60, sl=HOURS[d.getDay()];
  const now=sl.find(s=>h>=s[0]&&h<s[1]);
  if(now) return {open:true,txt:'Aperto ora · chiude alle '+now[1]+':00'};
  const later=sl.find(s=>h<s[0]);
  if(later) return {open:false,txt:'Chiuso · riapre alle '+later[0]+':00'};
  return {open:false,txt:'Chiuso · riapre domani'};
}

/* ---------- helpers ---------- */
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const eur=v=>'€ '+(Number.isInteger(v)?v.toLocaleString('it-IT'):v.toLocaleString('it-IT',{minimumFractionDigits:2,maximumFractionDigits:2}));
const rate3=v=>eur(Math.round(v/3*100)/100);
const waLink=t=>'https://wa.me/'+WA+'?text='+encodeURIComponent(t);
const product=id=>PRODUCTS.find(p=>p.id===id);
const ICON={
  cart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 4h2l2.4 11h11l2-8H6.2"/><circle cx="9" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/></svg>',
  wa:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-3.3-.8-2.8-1.1-4.5-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.6 2.1 1.1 1 2 1.3 2.3 1.4.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.2.5.3.1.2.1.8-.1 1.4Z"/></svg>',
  g:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M22 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.6a4.8 4.8 0 0 1-2.1 3.1v2.6h3.4c2-1.8 3.1-4.5 3.1-7.5Z"/><path fill="#34A853" d="M12 22c2.8 0 5.2-.9 6.9-2.5l-3.4-2.6c-.9.6-2.1 1-3.5 1-2.7 0-5-1.8-5.8-4.3H2.7v2.7A10 10 0 0 0 12 22Z"/><path fill="#FBBC05" d="M6.2 13.6a6 6 0 0 1 0-3.9V7H2.7a10 10 0 0 0 0 9l3.5-2.4Z"/><path fill="#EA4335" d="M12 5.9c1.5 0 2.9.5 4 1.5l3-3A10 10 0 0 0 2.7 7l3.5 2.7C7 7.6 9.3 5.9 12 5.9Z"/></svg>'
};

/* ---------- cart (localStorage with fallback) ---------- */
let mem=[];
const Cart={
  get(){try{return JSON.parse(localStorage.getItem('tz-cart')||'[]')}catch(e){return mem}},
  set(c){try{localStorage.setItem('tz-cart',JSON.stringify(c))}catch(e){mem=c} renderCart();},
  add(id,size,qty=1){const c=this.get();const f=c.find(x=>x.id===id&&x.size===size);f?f.qty+=qty:c.push({id,size,qty});this.set(c);},
  remove(i){const c=this.get();c.splice(i,1);this.set(c);},
  count(){return this.get().reduce((a,x)=>a+x.qty,0)},
  total(){return this.get().reduce((a,x)=>a+(product(x.id)?.price||0)*x.qty,0)},
  hasBike(){return this.get().some(x=>['bici','ebike','mono'].includes(product(x.id)?.cat))}
};

/* ---------- layout ---------- */
function layout(active){
  const st=openState();
  document.body.insertAdjacentHTML('afterbegin',`
<div class="draft">Demo del nuovo sito Tazebike realizzata da ClickBari. Prezzi, disponibilità e pagamenti di esempio.</div>
<header class="top"><div class="wrap">
  <a class="logo" href="index.html" aria-label="Tazebike ciclofficina, home"><img src="img/logo-mark.jpg" alt=""><span><b>TAZEBIKE</b><small>ciclofficina</small></span></a>
  <nav class="menu" id="menu" aria-label="Menu principale">
    <a href="negozio.html" ${active==='negozio'?'aria-current="page"':''}>Negozio</a>
    <a href="noleggio.html" ${active==='noleggio'?'aria-current="page"':''}>Noleggio</a>
    <a href="officina.html" ${active==='officina'?'aria-current="page"':''}>Officina e restauro</a>
    <a href="contatti.html" ${active==='contatti'?'aria-current="page"':''}>Contatti</a>
  </nav>
  <span class="open-now ${st.open?'on':''}"><i></i>${st.txt}</span>
  <button class="cart-btn" id="openCart" aria-label="Apri il carrello">${ICON.cart}<span class="lbl">Carrello</span><span class="badge" id="count">0</span></button>
  <button class="burger" id="burger" aria-label="Apri il menu" aria-expanded="false"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
</div></header>`);
  document.body.insertAdjacentHTML('beforeend',`
<footer class="foot">
  <div class="fin">Finanziamenti in negozio con Compass e Santander Consumer Bank · online paghi anche in 3 rate con Klarna</div>
  <div class="wrap cols">
    <div><h4>Tazebike Ciclofficina</h4><p>Negozio, noleggio e officina per bici, e-bike e monopattini a Bari.</p><p style="margin-top:8px">P.IVA 08505640725</p></div>
    <div><h4>Dove siamo</h4><p>Via Galvani Luigi 6/N<br>70125 Bari (BA)</p><p style="margin-top:8px"><a href="contatti.html">Orari e mappa</a></p></div>
    <div><h4>Contatti</h4><p><a href="tel:+393287392980">+39 328 739 2980</a><br><a href="mailto:tazebikeciclofficina@gmail.com">tazebikeciclofficina@gmail.com</a></p></div>
    <div><h4>Social e recensioni</h4><p><a href="${IG_URL}" target="_blank" rel="noopener">Instagram</a> · <a href="${FB_URL}" target="_blank" rel="noopener">Facebook</a><br><a href="${GOOGLE_URL}" target="_blank" rel="noopener">4,8 ★ su Google (200 recensioni)</a></p></div>
  </div>
  <div class="legal"><span>© 2026 Tazebike Ciclofficina · <a href="#">Privacy</a> · <a href="#">Cookie</a> · <a href="#">Condizioni di vendita</a></span><span>Sito realizzato da <a href="https://clickbari.it" rel="nofollow">ClickBari</a></span></div>
</footer>
<div class="scrim" id="scrim"></div>
<aside class="drawer" id="drawer" aria-label="Carrello">
  <header><h3>Carrello</h3><button class="x" id="closeCart" aria-label="Chiudi il carrello">×</button></header>
  <div class="items" id="items"></div>
  <div class="sum">
    <div class="row2"><span>Subtotale</span><span id="dsub">€ 0</span></div>
    <p class="klarna" id="dk" style="margin:4px 0 12px"></p>
    <a class="btn" style="width:100%" href="checkout.html" id="toCheckout">Vai alla cassa</a>
    <div class="methods"><span>VISA</span><span>Mastercard</span><span>PayPal</span><span>Klarna</span><span>Apple Pay</span></div>
  </div>
</aside>
<div class="toast" id="toast" role="status"></div>
<a class="wa-float" href="${waLink('Ciao Tazebike, ')}" target="_blank" rel="noopener" aria-label="Scrivici su WhatsApp">${ICON.wa}</a>`);
  const drawer=$('#drawer'),scrim=$('#scrim');
  const open=()=>{drawer.classList.add('open');scrim.classList.add('open')};
  const close=()=>{drawer.classList.remove('open');scrim.classList.remove('open')};
  $('#openCart').onclick=open;$('#closeCart').onclick=close;scrim.onclick=close;
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
  $('#items').addEventListener('click',e=>{const b=e.target.closest('.rm');if(b)Cart.remove(+b.dataset.i)});
  $('#burger').onclick=()=>{const m=$('#menu');m.classList.toggle('show');$('#burger').setAttribute('aria-expanded',m.classList.contains('show'))};
  window.openCart=open;
  renderCart();
}
function renderCart(){
  const c=Cart.get(),n=Cart.count();
  const cnt=$('#count');if(cnt)cnt.textContent=n;
  const it=$('#items');if(!it)return;
  it.innerHTML=c.length?'':'<p class="empty">Il carrello è vuoto.<br><a href="negozio.html">Vai al negozio</a></p>';
  c.forEach((x,i)=>{const p=product(x.id);if(!p)return;it.insertAdjacentHTML('beforeend',`<div class="it"><img src="${p.img}" alt=""><div class="t"><b>${p.name}</b>${x.size!=='Unica'?'Taglia '+x.size+' · ':''}${x.qty} × ${eur(p.price)}</div><button class="rm" data-i="${i}">Rimuovi</button></div>`)});
  const t=Cart.total();
  $('#dsub').textContent=eur(t);
  $('#dk').innerHTML=t?`Oppure 3 rate da <b>${rate3(t)}</b> con Klarna, senza interessi.`:'';
  const tc=$('#toCheckout');tc.style.pointerEvents=c.length?'':'none';tc.style.opacity=c.length?'':'.5';
}
function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('show');clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('show'),2600)}

/* ---------- product card ---------- */
function cardHTML(p){
  return `<article class="card">
  <a class="pic ${p.contain?'contain':''}" href="prodotto.html?id=${p.id}"><img src="${p.img}" alt="${p.name}" loading="lazy">
    <span class="tags">${p.cond==='usato'?'<span class="tag used">Usato</span>':''}<span class="tag ${p.stock}">${p.stock==='in'?'Disponibile in negozio':'Su ordinazione'}</span></span></a>
  <div class="body"><span class="brand">${p.brand} · ${p.sub}</span><h3><a href="prodotto.html?id=${p.id}">${p.name}</a></h3>
  <div class="price">${eur(p.price)}</div>
  <div class="klarna">o 3 rate da <b>${rate3(p.price)}</b> con Klarna</div>
  <button class="add" data-add="${p.id}">Aggiungi al carrello</button></div></article>`;
}
document.addEventListener('click',e=>{
  const b=e.target.closest('[data-add]');if(!b)return;
  const p=product(b.dataset.add);Cart.add(p.id,p.sizes[0]);
  b.textContent='Aggiunto ✓';b.classList.add('done');setTimeout(()=>{b.textContent='Aggiungi al carrello';b.classList.remove('done')},1400);
  toast(p.name+' aggiunto al carrello');
});

/* ---------- rental availability ---------- */
function freeOn(fid,day){const f=FLEET.find(x=>x.id===fid);return f.units-BOOKINGS.filter(b=>b[0]===fid&&day>=b[1]&&day<=b[2]).length}
function nextFree(fid){for(let d=0;d<30;d++){const dt=new Date();dt.setDate(dt.getDate()+d);if(HOURS[dt.getDay()].length&&freeOn(fid,d)>0)return d}return -1}
const dayName=(d,long)=>{const dt=new Date();dt.setDate(dt.getDate()+d);return dt.toLocaleDateString('it-IT',long?{weekday:'long',day:'numeric',month:'numeric'}:{weekday:'short',day:'numeric'})};
function nextFreeText(fid){const d=nextFree(fid);if(d===0)return {ok:true,t:'Libera oggi'};if(d===1)return {ok:false,t:'Libera da domani, 9:00'};return {ok:false,t:'Libera da '+dayName(d,true)+', 9:00'}}
function boardHTML(days=7,ids){
  const list=ids?FLEET.filter(f=>ids.includes(f.id)):FLEET;
  let h='<div class="avail-wrap"><table class="avail"><thead><tr><th></th>';
  for(let d=0;d<days;d++)h+=`<th class="${d===0?'today':''}">${d===0?'Oggi':dayName(d)}</th>`;
  h+='</tr></thead><tbody>';
  list.forEach(f=>{const n=nextFreeText(f.id);
    h+=`<tr><td class="b"><div class="bk"><img src="${f.img}" alt=""><div><b>${f.name}</b><small style="color:${n.ok?'#6EE7A1':'#F2C46B'}">${n.t}</small></div></div></td>`;
    for(let d=0;d<days;d++){const dt=new Date();dt.setDate(dt.getDate()+d);
      if(!HOURS[dt.getDay()].length){h+='<td><span class="dot closed">–</span></td>';continue}
      const fr=freeOn(f.id,d),cls=fr<=0?'full':(fr<f.units?'few':'free');
      h+=`<td><span class="dot ${cls}" title="${fr} libere su ${f.units}">${fr<=0?'✕':fr}</span></td>`}
    h+='</tr>'});
  return h+'</tbody></table></div><div class="avail-legend"><span><i style="background:#1E9E5A"></i>Bici libere</span><span><i style="background:#E59A2E"></i>Ultime</span><span><i style="background:#3A3F46"></i>Occupata</span></div>';
}

/* ---------- reviews (real, from Google) ---------- */
const REVIEWS=[
  {n:'Thomas Schuller',t:'Great service for my roadbike! Fixed my problem in no time. Very friendly and professional owner.'},
  {n:'Yves Leduc',t:'I was touring through Italy with my bike and somehow my back wheel spokes got loose… This bike shop deserves the Nobel bike prize! Thanks for your help guys!!'},
  {n:'Caroline N',t:'Was amazing in helping Drew repair his pilgrimage bike, thank you for doing that!'}
];
function reviewsHTML(){
  return `<div class="scores">
  <a class="score" href="${GOOGLE_URL}" target="_blank" rel="noopener">${ICON.g.replace('<svg','<svg style="width:28px;height:28px"')}<b>4,8</b><span><span class="stars">★★★★★</span><br>200 recensioni su Google</span></a>
  <a class="score" href="${FB_URL}" target="_blank" rel="noopener"><b>98%</b><span>valutazioni positive<br>su Facebook (47)</span></a>
  <a class="score" href="${IG_URL}" target="_blank" rel="noopener"><b>1.084</b><span>follower<br>su Instagram</span></a></div>
  <div class="reviews">${REVIEWS.map(r=>`<div class="rv"><span class="stars" aria-label="5 stelle">★★★★★</span><p>“${r.t}”</p><div class="who"><b>${r.n}</b><span class="g">${ICON.g} Google</span></div></div>`).join('')}</div>
  <p style="margin-top:18px"><a class="btn ghost small" href="${GOOGLE_URL}" target="_blank" rel="noopener">Leggi tutte le recensioni</a> <a class="btn small" href="${GOOGLE_URL}" target="_blank" rel="noopener">Lascia una recensione</a></p>`;
}

/* ---------- before/after ---------- */
function initBA(){$$('.ba').forEach(b=>{const i=b.querySelector('input');i.addEventListener('input',()=>b.style.setProperty('--x',i.value+'%'))})}
