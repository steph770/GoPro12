/* H12 Begleiter - App-Logik. Inhalte stehen in data.js (window.D). */
(() => {
'use strict';
const D = window.D;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const view = $('#view');
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const store = {
  get(k, d) { try { const v = localStorage.getItem('h12.' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('h12.' + k, JSON.stringify(v)); } catch (e) {} }
};

/* ---------- Thema ---------- */
const applyTheme = (t) => { if (t) document.documentElement.dataset.theme = t; else delete document.documentElement.dataset.theme; };
applyTheme(store.get('theme', null));
$('#themeBtn').addEventListener('click', () => {
  const dark = document.documentElement.dataset.theme
    ? document.documentElement.dataset.theme === 'dark'
    : matchMedia('(prefers-color-scheme: dark)').matches;
  const t = dark ? 'light' : 'dark';
  applyTheme(t); store.set('theme', t);
});

/* ---------- Textmarkup: [[schluessel|Anzeige]] wird zum antippbaren Begriff ---------- */
const rich = (s) => String(s || '').replace(/\[\[([a-z0-9_-]+)(?:\|([^\]]+))?\]\]/gi, (m, k, label) => {
  const t = D.terms[k];
  return `<span class="term" role="button" tabindex="0" data-t="${k}">${label || (t ? t.t : k)}</span>`;
});

/* ---------- Bottom-Sheet ---------- */
const sheet = $('#sheet'), sheetBack = $('#sheetBack'), sheetBody = $('#sheetBody');
let lastFocus = null;
function openSheet(html) {
  lastFocus = document.activeElement;
  sheetBody.innerHTML = html;
  sheet.hidden = false; sheetBack.hidden = false;
  sheet.scrollTop = 0;
  $('#sheetClose').focus();
}
function closeSheet() {
  sheet.hidden = true; sheetBack.hidden = true;
  $$('.hud.hl').forEach((h) => h.classList.remove('hl'));
  if (lastFocus && document.contains(lastFocus)) lastFocus.focus();
}
$('#sheetClose').addEventListener('click', closeSheet);
sheetBack.addEventListener('click', closeSheet);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !sheet.hidden) closeSheet(); });
let sy = null;
sheet.addEventListener('touchstart', (e) => { sy = sheet.scrollTop <= 0 ? e.touches[0].clientY : null; }, { passive: true });
sheet.addEventListener('touchend', (e) => { if (sy != null && e.changedTouches[0].clientY - sy > 90) closeSheet(); sy = null; });

function termSheet(k) {
  const t = D.terms[k]; if (!t) return;
  openSheet(`<h2 id="sheetTitle">${esc(t.t)}</h2>${t.en ? `<p class="muted small">Englisch: ${esc(t.en)}</p>` : ''}<p>${rich(t.d)}</p>${t.bild ? `<div class="note"><h3>Bildlich</h3><p>${rich(t.bild)}</p></div>` : ''}${t.wo ? `<h3>Wo an der Kamera</h3><p>${rich(t.wo)}</p>` : ''}`);
}
document.addEventListener('click', (e) => {
  const b = e.target.closest('.term');
  if (b) { e.preventDefault(); e.stopPropagation(); termSheet(b.dataset.t); }
}, true);
document.addEventListener('keydown', (e) => {
  const b = e.target.closest && e.target.closest('.term');
  if (b && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); termSheet(b.dataset.t); }
});

/* ---------- Symbole fürs Display ---------- */
const I = {
  video: '<svg viewBox="0 0 24 24"><rect x="2" y="6" width="14" height="12" rx="2.5" fill="currentColor"/><path d="M17 10.5l5-3v9l-5-3z" fill="currentColor"/></svg>',
  foto: '<svg viewBox="0 0 24 24"><path d="M3 8.5A2.5 2.5 0 0 1 5.5 6H8l1.6-2h4.8L16 6h2.5A2.5 2.5 0 0 1 21 8.5v9a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z" fill="currentColor"/><circle cx="12" cy="13" r="3.6" fill="#000" opacity=".55"/></svg>',
  zeitraffer: '<svg viewBox="0 0 24 24"><circle cx="12" cy="13" r="8" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M12 8.5V13l3 2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M9 2.5h6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>',
  akku: (p) => `<svg viewBox="0 0 28 16"><rect x="1" y="2" width="23" height="12" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="25" y="5.5" width="2.2" height="5" rx="1" fill="currentColor"/><rect x="3" y="4" width="${Math.max(1.5, 19 * p / 100)}" height="8" rx="1.2" fill="${p < 20 ? '#FF5A3C' : 'currentColor'}"/></svg>`,
  karte: '<svg viewBox="0 0 24 24"><path d="M6 2.5h8.5l4 4V20a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 20V4A1.5 1.5 0 0 1 6 2.5z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8.5 6v3M11.5 6v3M14.5 7v2" stroke="currentColor" stroke-width="1.8"/></svg>',
  slomo: '<svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 1 0 8-8" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><path d="M12 7v5l3 2" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><path d="M4.5 7.5l.01 0M7.5 4.6l.01 0" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg>',
  linse: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2.2"/></svg>',
  zoom: '<svg viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M15.5 15.5L21 21M8 10.5h5M10.5 8v5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
  hindsight: '<svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 1 0 2.3-5.6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><path d="M3 3.5v4.5h4.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="12" r="2.4" fill="currentColor"/></svg>',
  hs: '<svg viewBox="0 0 24 24"><path d="M3 15c3-6 6 2 9-4s6 2 9-4" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><path d="M3 20h18" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
  timer: '<svg viewBox="0 0 24 24"><circle cx="12" cy="13" r="8" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M12 9v4" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><path d="M10 2.5h4" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
  sprache: '<svg viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="11" rx="3" fill="currentColor"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
  sperre: '<svg viewBox="0 0 24 24"><rect x="5" y="10.5" width="14" height="10" rx="2" fill="currentColor"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" fill="none" stroke="currentColor" stroke-width="2.2"/></svg>',
  dreh: '<svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><path d="M18.5 3v4h-4M5.5 21v-4h4" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  blitz: '<svg viewBox="0 0 24 24"><path d="M13 2L5 13.5h6L10 22l8-11.5h-6z" fill="currentColor"/></svg>',
  ton: '<svg viewBox="0 0 24 24"><path d="M4 9.5h4l5-4v13l-5-4H4z" fill="currentColor"/><path d="M16.5 8.5a5 5 0 0 1 0 7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
  front: '<svg viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="16" rx="3" fill="none" stroke="currentColor" stroke-width="2.2"/><rect x="8" y="7" width="8" height="6" rx="1" fill="currentColor"/></svg>',
  funk: '<svg viewBox="0 0 24 24"><path d="M2.5 9a14 14 0 0 1 19 0M5.5 12.5a9.5 9.5 0 0 1 13 0M8.6 16a5 5 0 0 1 6.8 0" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><circle cx="12" cy="19.5" r="1.6" fill="currentColor"/></svg>',
  stern: '<svg viewBox="0 0 24 24"><path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6-4.5-4.2 6.1-.7z" fill="currentColor"/></svg>',
  chev: '<svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  back: '<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
};
const ico = (k, arg) => (typeof I[k] === 'function' ? I[k](arg) : (I[k] || ''));

/* ---------- Bildhintergründe fürs Display (16:9) ---------- */
const ART = {
  reef: `<svg class="scene" viewBox="0 0 160 90" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="rw" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2E9CC0"/><stop offset=".55" stop-color="#0F5E86"/><stop offset="1" stop-color="#06304A"/></linearGradient><linearGradient id="rr" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".35"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs><rect width="160" height="90" fill="url(#rw)"/><path d="M30 0l-14 70h6L40 0zM70 0l-6 70h5L80 0zM112 0l4 60h5L124 0z" fill="url(#rr)"/><path d="M58 40c10-8 22-11 30-6 6-4 14-4 20 0-7 2-12 7-16 9 2 6-2 10-6 11l-2-8c-6 2-14 2-20-1-4 1-8 0-10-3 2 0 3-1 4-2z" fill="#0A2333" opacity=".85"/><path d="M0 78c14-6 26 2 40-3s22-10 36-4 24 9 40 4 30-7 44-2v17H0z" fill="#07283B"/><circle cx="128" cy="30" r="1.4" fill="#BFE6F5" opacity=".7"/><circle cx="131" cy="22" r="1" fill="#BFE6F5" opacity=".6"/><circle cx="127" cy="15" r=".8" fill="#BFE6F5" opacity=".5"/></svg>`,
  safari: `<svg class="scene" viewBox="0 0 160 90" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="ss" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9CC6DE"/><stop offset="1" stop-color="#F0D9A8"/></linearGradient></defs><rect width="160" height="90" fill="url(#ss)"/><path d="M0 56c30-4 60-2 90-4s50 0 70 2v36H0z" fill="#B99A5B"/><path d="M0 64c40-3 90-2 160 0v26H0z" fill="#8E7442"/><path d="M118 56V38" stroke="#4A3A22" stroke-width="2"/><path d="M100 38c8-5 28-5 36 0-10 3-26 3-36 0z" fill="#4E6A33"/><path d="M62 58c0-8 5-13 12-13 5 0 9 2 11 6 2 0 3 2 3 4v3h-3v-2l-1 2h-3v-3h-9v3h-3v-3h-3c-1 3-2 7-1 9h-2c-1-2-1-4-1-6z" fill="#5B5550"/><rect x="0" y="80" width="160" height="10" fill="#2B2620"/><rect x="0" y="78" width="160" height="3" fill="#1C1814"/></svg>`,
  train: `<svg class="scene" viewBox="0 0 160 90" preserveAspectRatio="xMidYMid slice"><rect width="160" height="90" fill="#BFDDEA"/><path d="M0 40c25-10 50-14 80-8s60 0 80-6v64H0z" fill="#5E9A55"/><path d="M0 52c30-6 60-4 90 0s50 2 70-2v40H0z" fill="#3F7C3E"/><path d="M0 50h160M0 56h160M0 62h160" stroke="#2F6A33" stroke-width=".6" opacity=".5"/><path d="M60 90c10-20 30-34 60-40" stroke="#5B4D44" stroke-width="2.5" fill="none"/><path d="M118 52l16-4 4 5-16 4z" fill="#1F4E8A"/><path d="M102 57l16-5 3 5-16 5z" fill="#1F4E8A"/><rect x="0" y="0" width="22" height="90" fill="#2E3A44"/><rect x="0" y="0" width="160" height="7" fill="#2E3A44"/><rect x="22" y="0" width="3" height="90" fill="#46535D"/></svg>`,
  hills: `<svg class="scene" viewBox="0 0 160 90" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="hs" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F5B26B"/><stop offset=".5" stop-color="#F7D9A8"/><stop offset="1" stop-color="#DDE7D8"/></linearGradient></defs><rect width="160" height="90" fill="url(#hs)"/><circle cx="118" cy="34" r="9" fill="#FFF1C9"/><path d="M0 48c20-10 46-14 70-8s40-6 60-6 24 4 30 6v50H0z" fill="#7E9E86" opacity=".7"/><path d="M0 58c26-8 52-8 80-2s50-2 80-4v38H0z" fill="#4E8A54"/><path d="M0 62c30-4 60 0 90 2s50 0 70-2M0 69c30-4 60 0 90 2s50 0 70-2M0 76c30-4 60 0 90 2s50 0 70-2M0 83c30-4 60 0 90 2s50 0 70-2" stroke="#2F6B3A" stroke-width="1.3" fill="none"/><rect y="44" width="160" height="7" fill="#fff" opacity=".35"/></svg>`,
  stars: `<svg class="scene" viewBox="0 0 160 90" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="ns" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#050B1E"/><stop offset="1" stop-color="#1A2A4F"/></linearGradient></defs><rect width="160" height="90" fill="url(#ns)"/><g fill="none" stroke="#DCE8FF" stroke-width=".5" opacity=".8"><path d="M40 20a60 60 0 0 1 30-8"/><path d="M30 34a70 70 0 0 1 45-14"/><path d="M90 10a50 50 0 0 1 26 10"/><path d="M100 26a60 60 0 0 1 30 14"/><path d="M60 40a55 55 0 0 1 40 0"/><path d="M20 50a80 80 0 0 1 30-18"/><path d="M120 16a40 40 0 0 1 16 16"/></g><path d="M0 70l20-10 18 6 22-14 26 12 20-8 24 10 30-6v30H0z" fill="#03060D"/></svg>`,
  trail: `<svg class="scene" viewBox="0 0 160 90" preserveAspectRatio="xMidYMid slice"><rect width="160" height="90" fill="#0B1222"/><path d="M0 60h160v30H0z" fill="#121822"/><path d="M-10 74C40 66 90 64 170 58" stroke="#FF4B3A" stroke-width="2.2" fill="none"/><path d="M-10 79C40 71 90 69 170 63" stroke="#FFE3A3" stroke-width="2.2" fill="none"/><path d="M-10 84C40 76 90 74 170 68" stroke="#FFB04A" stroke-width="1.6" fill="none"/><rect x="20" y="30" width="16" height="30" fill="#1C2536"/><rect x="104" y="22" width="22" height="38" fill="#1C2536"/><g fill="#FFD27A" opacity=".8"><rect x="24" y="36" width="3" height="3"/><rect x="30" y="44" width="3" height="3"/><rect x="108" y="28" width="3" height="3"/><rect x="116" y="40" width="3" height="3"/></g></svg>`,
  walk: `<svg class="scene" viewBox="0 0 160 90" preserveAspectRatio="xMidYMid slice"><rect width="160" height="90" fill="#9FD0D8"/><path d="M0 30c20-6 40 4 60-2s40-8 60-2 30 4 40 2v62H0z" fill="#3E7B4F"/><path d="M60 90c8-20 14-36 20-52 6 16 12 32 20 52z" fill="#C7A97A"/><path d="M0 50c12-14 22-14 30 0zM130 46c10-16 22-16 30 0z" fill="#2A5E3A"/><circle cx="18" cy="38" r="12" fill="#2C6A3E"/><circle cx="142" cy="34" r="13" fill="#2C6A3E"/></svg>`
};
const art = (k) => ART[k] || ART.walk;

/* ---------- Das GoPro-Display ---------- */
// cfg: { mode, preset, settings, battery, remaining, shortcuts:[...], art, nums:true }
function screenHTML(cfg, opts = {}) {
  const c = Object.assign({}, D.cam.defaultScreen, cfg || {});
  const n = (i) => (opts.nums ? `<span class="num">${i}</span>` : '');
  const id = (k) => `data-f="${k}"`;
  const sc = c.shortcuts || [];
  const pos = D.cam.shortcutPos;
  return `<div class="cam" ${opts.camAttr || ''}>
    ${opts.buttons ? '<button class="cam-shutter" data-key="ausloeser" aria-label="Auslöser (oben)"></button><button class="cam-mode" data-key="modus" aria-label="Modus-Taste (seitlich)"></button>' : ''}
    <div class="screen ${c.rec ? 'recording' : ''}" ${opts.screenAttr || ''}>
      ${art(c.art)}
      <div class="vign"></div>
      <button class="hud" ${id('modus')} style="left:2.5%;top:3%">${ico(c.mode)}${n(1)}</button>
      <button class="hud rec-time" ${id('rest')} style="left:50%;top:3%;transform:translateX(-50%)">${c.rec ? '<span class="rec-dot"></span>' + esc(c.recTime || '00:00:12') : esc(c.remaining)}${n(2)}</button>
      <button class="hud" ${id('akku')} style="right:2.5%;top:3%">${esc(c.battery)}%${ico('akku', c.battery)}${n(5)}</button>
      ${sc.map((s, i) => `<button class="hud sc" ${id('sc:' + s)} style="${pos[i] || ''}" aria-label="Shortcut ${esc((D.cam.shortcuts[s] || {}).t || s)}">${ico((D.cam.shortcuts[s] || {}).icon || 'stern')}</button>`).join('')}
      ${opts.nums && sc.length ? `<span class="hud" style="left:4%;bottom:23%;pointer-events:none">${n(3)}</span>` : ''}
      <button class="hud pill" ${id('preset')}><span class="pname">${ico(c.mode)}${esc(c.preset)}${n(4)}</span><span class="pset">${esc(c.settings)}</span></button>
      <div class="expo" aria-hidden="true"><span>OBJEKTMESSUNG</span></div>
      <div class="ov" data-ov="dash"></div>
      <div class="ov up" data-ov="media"></div>
      <div class="ov up" data-ov="presets"></div>
    </div>
  </div>`;
}

/* ---------- Kamera-Seite ---------- */
let camState = null;
function renderKamera(sub) {
  const tab = ['bildschirm', 'gesten', 'tasten', 'sprache', 'grundlagen'].includes(sub) ? sub : 'bildschirm';
  camState = Object.assign({}, D.cam.defaultScreen, { modeIdx: 0 });
  const segs = [['bildschirm', 'Bildschirm'], ['gesten', 'Wischen'], ['tasten', 'Tasten'], ['sprache', 'Sprachbefehle'], ['grundlagen', 'Grundwissen']];
  view.innerHTML = `
    <h1>Deine HERO12 Black</h1>
    <p class="lead">Ein Nachbau des hinteren Touchscreens. Die gelben Nummern führen zu den Erklärungen darunter.</p>
    <div id="camWrap">${screenHTML(camState, { nums: tab === 'bildschirm', buttons: true })}</div>
    <div class="cam-hint"><span id="camMsg">${esc(D.cam.hint)}</span></div>
    <div class="seg" role="group" aria-label="Ansicht">${segs.map(([k, l]) => `<button data-seg="${k}" aria-pressed="${k === tab}">${l}</button>`).join('')}</div>
    <div id="camBody"></div>`;
  wireScreen($('#camWrap'), true);
  showCamTab(tab);
  $$('.seg button').forEach((b) => b.addEventListener('click', () => {
    history.replaceState(null, '', '#/kamera/' + b.dataset.seg);
    $$('.seg button').forEach((x) => x.setAttribute('aria-pressed', x === b));
    redrawCam(b.dataset.seg === 'bildschirm');
    showCamTab(b.dataset.seg);
  }));
}
function redrawCam(nums) {
  const m = D.cam.modes[camState.modeIdx];
  Object.assign(camState, { mode: m.mode, preset: m.preset, settings: m.settings, shortcuts: m.shortcuts });
  $('#camWrap').innerHTML = screenHTML(camState, { nums, buttons: true });
  wireScreen($('#camWrap'), true);
}
function setMsg(t) { const m = $('#camMsg'); if (m) m.innerHTML = rich(t); }

function showCamTab(tab) {
  const body = $('#camBody');
  if (tab === 'bildschirm') {
    body.innerHTML = `<ul class="legend">${D.cam.fields.map((f, i) => `<li><button data-field="${f.key}"><span class="n">${f.n}</span><span><span class="t">${esc(f.t)}</span><br><span class="v">${esc(f.short)}</span></span>${I.chev.replace('<svg', '<svg width="18" height="18" style="transform:rotate(-90deg);color:var(--ink-2)"')}</button></li>`).join('')}</ul>
      <p class="muted small" style="margin-top:12px">${rich(D.cam.screenNote)}</p>`;
    $$('[data-field]', body).forEach((b) => b.addEventListener('click', () => fieldSheet(b.dataset.field)));
  } else if (tab === 'gesten') {
    body.innerHTML = `<ul class="legend">${D.cam.gestures.map((g) => `<li><button data-g="${g.key}"><span class="n" style="background:var(--deep);color:var(--deep-ink)">${g.arrow}</span><span><span class="t">${esc(g.t)}</span><br><span class="v">${esc(g.short)}</span></span><span class="v">zeigen</span></button></li>`).join('')}</ul>
      <p class="muted small" style="margin-top:12px">${rich(D.cam.gestureNote)}</p>`;
    $$('[data-g]', body).forEach((b) => b.addEventListener('click', () => gesture(b.dataset.g, true)));
  } else if (tab === 'tasten') {
    body.innerHTML = `<ul class="keys">${D.cam.keys.map((k) => `<li><span class="what">${esc(k.t)}</span><span>${rich(k.d)}</span></li>`).join('')}</ul>${D.cam.keyNote ? `<div class="note" style="margin-top:14px">${rich(D.cam.keyNote)}</div>` : ''}`;
  } else if (tab === 'sprache') {
    body.innerHTML = `<p>${rich(D.cam.voiceIntro)}</p><ul class="rows block">${D.cam.voice.map((v) => `<li class="kv"><span class="k">„${esc(v[0])}“</span><span></span><span class="why">${rich(v[1])}</span></li>`).join('')}</ul>${D.cam.voiceNote ? `<p class="muted small">${rich(D.cam.voiceNote)}</p>` : ''}`;
  } else {
    body.innerHTML = `<p>${rich(D.basicsIntro)}</p><div>${D.basics.map((b, i) => probHTML(b.t, b.d, 'b' + i)).join('')}</div>`;
    wireProbs(body);
  }
}

function fieldSheet(key) {
  let f = D.cam.fields.find((x) => x.key === key);
  if (!f && key.startsWith('sc:')) {
    const s = D.cam.shortcuts[key.slice(3)];
    f = s && { t: 'Kurzbefehl: ' + s.t, what: s.d, how: D.cam.shortcutHow, tip: s.tip };
  }
  if (!f) return;
  $$('.hud').forEach((h) => h.classList.toggle('hl', h.dataset.f === key || (key === 'kurz' && (h.dataset.f || '').startsWith('sc:'))));
  openSheet(`<h2 id="sheetTitle">${esc(f.t)}</h2><p>${rich(f.what)}</p>${f.how ? `<h3>So änderst du es</h3><p>${rich(f.how)}</p>` : ''}${f.tip ? `<div class="note"><h3>Tipp</h3><p>${rich(f.tip)}</p></div>` : ''}`);
}

function overlayHTML(kind) {
  if (kind === 'dash') return `<div class="ov-title">${esc(D.cam.dashTitle)}</div><div class="ov-grid dashgrid">${D.cam.dash.map((d, i) => `<button class="ov-tile ${i >= 7 ? 'page' : ''}" data-dash="${d.key}">${ico(d.icon)}<span>${esc(d.t)}</span></button>`).join('')}</div>`;
  if (kind === 'media') return `<div class="ov-title">Medien</div><div class="ov-grid">${[1, 2, 3, 4, 5, 6, 7, 8].map((i) => `<div class="ov-tile" style="aspect-ratio:16/10;padding:0;overflow:hidden;opacity:${1 - i * .06}">${art(['reef', 'safari', 'train', 'hills', 'stars', 'walk', 'trail', 'reef'][i - 1])}</div>`).join('')}</div>`;
  if (kind === 'presets') {
    const m = D.cam.modes[camState ? camState.modeIdx : 0];
    return `<div class="ov-title">${esc(m.listTitle)}</div><div class="ov-list">${m.presets.map((p, i) => `<button class="ov-row ${p[0] === (camState && camState.preset) ? 'cur' : ''}" data-preset="${i}"><span>${esc(p[0])}</span><small>${esc(p[1])}</small></button>`).join('')}</div>`;
  }
  return '';
}
function showOverlay(wrap, kind) {
  $('.screen', wrap)?.classList.remove('expo-on');
  $$('.ov', wrap).forEach((o) => { if (o.dataset.ov !== kind) o.classList.remove('show'); });
  const ov = $(`.ov[data-ov="${kind}"]`, wrap);
  if (!ov) return;
  ov.innerHTML = overlayHTML(kind);
  requestAnimationFrame(() => ov.classList.add('show'));
  $$('[data-dash]', ov).forEach((b) => b.addEventListener('click', (e) => {
    e.stopPropagation();
    const d = D.cam.dash.find((x) => x.key === b.dataset.dash);
    if (d) openSheet(`<h2 id="sheetTitle">${esc(d.t)}</h2><p>${rich(d.d)}</p>`);
  }));
  $$('[data-preset]', ov).forEach((b) => b.addEventListener('click', (e) => {
    e.stopPropagation();
    const m = D.cam.modes[camState.modeIdx];
    const p = m.presets[+b.dataset.preset];
    if (!p[1]) { setMsg(p[2]); return; }
    m.preset = p[0]; m.settings = p[1];
    redrawCam(false);
    setMsg(`Voreinstellung „${p[0]}“ gewählt. ${p[2] || ''}`);
  }));
}
function hideOverlays(wrap) { let had = false; $$('.ov.show', wrap).forEach((o) => { o.classList.remove('show'); had = true; }); return had; }

function gesture(k, fromList) {
  const wrap = $('#camWrap'); if (!wrap) return;
  const g = D.cam.gestures.find((x) => x.key === k);
  if (k === 'down') showOverlay(wrap, 'dash');
  else if (k === 'up') showOverlay(wrap, 'media');
  else if (k === 'left' || k === 'right') {
    hideOverlays(wrap);
    const n = D.cam.modes.length;
    camState.modeIdx = (camState.modeIdx + (k === 'left' ? 1 : n - 1)) % n;
    const nums = $('.seg button[aria-pressed="true"]')?.dataset.seg === 'bildschirm';
    redrawCam(nums);
  } else if (k === 'pill') showOverlay(wrap, 'presets');
  else if (k === 'tap') { hideOverlays(wrap); $('.screen', wrap).classList.toggle('nohud'); }
  else if (k === 'hold') { hideOverlays(wrap); const s = $('.screen', wrap); s.classList.remove('nohud'); s.classList.add('expo-on'); clearTimeout(gesture.t); gesture.t = setTimeout(() => s.classList.remove('expo-on'), 3500); }
  if (g) setMsg(g.msg || g.short);
  if (fromList) wrap.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function wireScreen(wrap, interactive) {
  const scr = $('.screen', wrap); if (!scr) return;
  // Felder antippen
  $$('.hud[data-f]', scr).forEach((h) => h.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!interactive) return;
    if ($('.ov.show', scr)) { hideOverlays(scr); return; }
    const f = h.dataset.f;
    if (f === 'preset') { gesture('pill'); setTimeout(() => fieldSheetMaybe(f), 0); return; }
    fieldSheet(f);
  }));
  // Tasten am Gehäuse
  $$('[data-key]', wrap).forEach((b) => b.addEventListener('click', () => keyPress(b.dataset.key)));
  if (!interactive) return;
  // Wischen
  let x0 = null, y0 = null, t0 = 0, held = false, holdT = null, swiped = false;
  scr.addEventListener('pointerdown', (e) => {
    x0 = e.clientX; y0 = e.clientY; t0 = Date.now(); held = false; swiped = false;
    clearTimeout(holdT);
    if (!e.target.closest('.hud, .ov.show')) holdT = setTimeout(() => { held = true; gesture('hold'); }, 650);
  });
  scr.addEventListener('pointermove', (e) => { if (x0 != null && Math.hypot(e.clientX - x0, e.clientY - y0) > 12) clearTimeout(holdT); });
  scr.addEventListener('pointerup', (e) => {
    clearTimeout(holdT);
    if (x0 == null) return;
    const dx = e.clientX - x0, dy = e.clientY - y0; x0 = null;
    if (Math.max(Math.abs(dx), Math.abs(dy)) < 28 || Date.now() - t0 > 900) return;
    swiped = true;
    if ($('.ov.show', scr)) { hideOverlays(scr); setMsg('Zurück zum Aufnahmebildschirm.'); return; }
    if (Math.abs(dy) > Math.abs(dx)) gesture(dy > 0 ? 'down' : 'up');
    else gesture(dx < 0 ? 'left' : 'right');
  });
  scr.addEventListener('pointercancel', () => { clearTimeout(holdT); x0 = null; });
  scr.addEventListener('click', (e) => {
    if (held || swiped || e.target.closest('.hud')) return;
    if (hideOverlays(scr)) { setMsg('Zurück zum Aufnahmebildschirm.'); return; }
    if (!e.target.closest('.ov')) gesture('tap');
  });
}
function fieldSheetMaybe() { setMsg(D.cam.pillMsg); }

function keyPress(k) {
  const wrap = $('#camWrap'); if (!wrap) return;
  if (k === 'ausloeser') {
    hideOverlays(wrap);
    if (camState.mode === 'video' || camState.mode === 'zeitraffer') {
      camState.rec = !camState.rec;
      const nums = $('.seg button[aria-pressed="true"]')?.dataset.seg === 'bildschirm';
      $('#camWrap').innerHTML = screenHTML(camState, { nums, buttons: true }); wireScreen($('#camWrap'), true);
      setMsg(camState.rec ? D.cam.recStart : D.cam.recStop);
    } else {
      const s = $('.screen', wrap); s.style.transition = 'filter .08s'; s.style.filter = 'brightness(2.2)';
      setTimeout(() => { s.style.filter = ''; }, 120);
      setMsg(D.cam.photoMsg);
    }
  } else if (k === 'modus') {
    if (camState.rec) { setMsg(D.cam.modeWhileRec); return; }
    camState.modeIdx = (camState.modeIdx + 1) % D.cam.modes.length;
    const nums = $('.seg button[aria-pressed="true"]')?.dataset.seg === 'bildschirm';
    redrawCam(nums);
    setMsg(D.cam.modeMsg.replace('%s', D.cam.modes[camState.modeIdx].name));
  }
}

/* ---------- Szenen ---------- */
function renderSzenen() {
  view.innerHTML = `<h1>Szenen-Rezepte</h1><p class="lead">${rich(D.scenesIntro)}</p>
    <div class="scenes">${D.scenes.map((s) => `<a class="scene-link" href="#/szene/${s.id}"><svg viewBox="0 0 108 88" preserveAspectRatio="xMidYMid slice">${art(s.art).replace(/<svg[^>]*>|<\/svg>/g, '')}</svg><div><h3>${esc(s.title)}</h3><p>${esc(s.short)}</p>${(s.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div></a>`).join('')}</div>`;
  // Kleine Bilder: Szene im 160x90-Rahmen zuschneiden
  $$('.scene-link svg').forEach((s) => s.setAttribute('viewBox', '26 0 108 90'));
}

function renderSzene(id) {
  const s = D.scenes.find((x) => x.id === id);
  if (!s) { location.hash = '#/szenen'; return; }
  const sec = [['einst', 'Einstellungen'], ['halt', 'Halterung'], ['tipps', 'Tipps'], ['fehler', 'Fehler'], s.vertical ? ['hoch', 'Hochkant'] : null].filter(Boolean);
  view.innerHTML = `<a class="back" href="#/szenen">${I.back}Alle Szenen</a>
    <h1>${esc(s.title)}</h1><p class="lead">${rich(s.goal)}</p>
    <div id="sceneCam">${screenHTML(Object.assign({ art: s.art }, s.screen), {})}</div>
    <p class="cam-hint"><span>${rich(s.screenNote || 'So sieht das Display mit diesem Rezept aus. Antippen erklärt die Felder.')}</span></p>
    <nav class="jump" aria-label="Abschnitte">${sec.map(([k, l]) => `<a href="#/szene/${s.id}" data-jump="${k}">${l}</a>`).join('')}</nav>
    ${s.before ? `<div class="note warn" style="margin-top:14px">${rich(s.before)}</div>` : ''}
    <section id="einst"><h2>Einstellungen</h2><ul class="rows block">${s.settings.map((r) => `<li class="kv"><span class="k">${rich(r[0])}</span><span class="val">${esc(r[1])}</span><span class="why">${rich(r[2])}</span>${r[3] ? `<span class="path">Wo: ${rich(r[3])}</span>` : ''}</li>`).join('')}</ul>${s.settingsNote ? `<p class="muted small">${rich(s.settingsNote)}</p>` : ''}</section>
    <section id="halt"><h2>Halterung</h2><ul class="bul">${s.mount.map((m) => `<li>${rich(m)}</li>`).join('')}</ul></section>
    <section id="tipps"><h2>Tipps</h2><ul class="bul">${s.tips.map((m) => `<li>${rich(m)}</li>`).join('')}</ul></section>
    <section id="fehler"><h2>Typische Fehler</h2>${s.fixes.map((f) => `<div class="fix"><div class="bad">${rich(f[0])}</div><div class="good">${rich(f[1])}</div></div>`).join('')}</section>
    ${s.vertical ? `<section id="hoch"><h2>Hochkant für Reels</h2><div class="note vert">${rich(s.vertical)}</div></section>` : ''}
    ${s.related && s.related.length ? `<h2>Passende Experimente</h2><ul class="bul">${s.related.map((r) => { const i = D.ideas.find((x) => x.id === r); return i ? `<li><a href="#/ideen/${i.id}">${esc(i.title)}</a>: ${esc(i.short)}</li>` : ''; }).join('')}</ul>` : ''}`;
  wireScreen($('#sceneCam'), false);
  $$('#sceneCam .hud[data-f]').forEach((h) => h.addEventListener('click', () => fieldSheet(h.dataset.f)));
  $$('[data-jump]').forEach((a) => a.addEventListener('click', (e) => { e.preventDefault(); document.getElementById(a.dataset.jump).scrollIntoView({ behavior: 'smooth' }); }));
}

/* ---------- Ideen ---------- */
function renderIdeen(open) {
  view.innerHTML = `<h1>Action-Cam-Experimente</h1><p class="lead">${rich(D.ideasIntro)}</p>
    <ul class="ideas">${D.ideas.map((i) => `<li class="idea" id="i-${i.id}" open-state="0">
      <button aria-expanded="false" data-idea="${i.id}"><h3>${esc(i.title)}</h3><p>${esc(i.short)}</p>${I.chev.replace('<svg', '<svg class="chev"')}</button>
      <div class="more" hidden>
        <p>${rich(i.what)}</p>
        ${i.why ? `<div class="note"><h3>Warum nur mit der Action-Cam</h3><p>${rich(i.why)}</p></div>` : ''}
        ${i.where ? `<p class="small"><b>Wo auf deiner Reise:</b> ${rich(i.where)}</p>` : ''}
        ${i.settings ? `<h3 style="margin-top:12px">Einstellungen</h3><ul class="rows">${i.settings.map((r) => `<li class="kv"><span class="k">${rich(r[0])}</span><span class="val">${esc(r[1])}</span>${r[2] ? `<span class="why">${rich(r[2])}</span>` : ''}</li>`).join('')}</ul>` : ''}
        <h3 style="margin-top:12px">So geht's</h3><ol class="steps">${i.steps.map((s) => `<li>${rich(s)}</li>`).join('')}</ol>
        ${i.tip ? `<div class="note vert"><p>${rich(i.tip)}</p></div>` : ''}
      </div></li>`).join('')}</ul>`;
  $$('[data-idea]').forEach((b) => b.addEventListener('click', () => toggleIdea(b.closest('.idea'))));
  if (open) { const el = $('#i-' + open); if (el) { toggleIdea(el, true); setTimeout(() => el.scrollIntoView({ block: 'start' }), 30); } }
}
function toggleIdea(li, force) {
  const on = force != null ? force : li.getAttribute('open-state') !== '1';
  li.setAttribute('open-state', on ? '1' : '0');
  $('.more', li).hidden = !on;
  $('button', li).setAttribute('aria-expanded', on);
}

/* ---------- Checks ---------- */
function probHTML(q, a, id) {
  return `<div class="prob" id="p-${id}"><button aria-expanded="false">${esc(q)}${I.chev}</button><div class="ans" hidden>${rich(a)}</div></div>`;
}
function wireProbs(root) {
  $$('.prob > button', root).forEach((b) => b.addEventListener('click', () => {
    const p = b.parentElement, on = !p.classList.contains('open');
    p.classList.toggle('open', on); $('.ans', p).hidden = !on; b.setAttribute('aria-expanded', on);
  }));
}
function renderChecks(sub) {
  const tab = sub === 'probleme' ? 'probleme' : 'listen';
  const done = store.get('checks', {});
  view.innerHTML = `<h1>Checks</h1><p class="lead">${rich(D.checksIntro)}</p>
    <div class="seg" role="group" aria-label="Ansicht"><button data-seg="listen" aria-pressed="${tab === 'listen'}">Checklisten</button><button data-seg="probleme" aria-pressed="${tab === 'probleme'}">Problemlöser</button></div>
    <div id="chkBody"></div>`;
  const body = $('#chkBody');
  if (tab === 'listen') {
    body.innerHTML = D.checklists.map((cl) => {
      const n = cl.items.filter((_, i) => done[cl.id + i]).length;
      return `<section class="block" data-cl="${cl.id}"><div class="cl-head"><h2 style="margin:4px 0 2px">${esc(cl.title)}</h2><span class="count">${n}/${cl.items.length}</span></div>${cl.when ? `<p class="muted small" style="margin:0 0 4px">${rich(cl.when)}</p>` : ''}
      <ul class="check">${cl.items.map((it, i) => `<li><label><input type="checkbox" data-k="${cl.id + i}" ${done[cl.id + i] ? 'checked' : ''}><span>${rich(it[0])}${it[1] ? `<small>${rich(it[1])}</small>` : ''}</span></label></li>`).join('')}</ul>
      <button class="linkbtn" data-reset="${cl.id}">Liste zurücksetzen</button></section>`;
    }).join('');
    $$('input[data-k]', body).forEach((c) => c.addEventListener('change', () => {
      const d = store.get('checks', {}); if (c.checked) d[c.dataset.k] = 1; else delete d[c.dataset.k]; store.set('checks', d);
      const sec = c.closest('[data-cl]'); const cl = D.checklists.find((x) => x.id === sec.dataset.cl);
      $('.count', sec).textContent = `${$$('input:checked', sec).length}/${cl.items.length}`;
    }));
    $$('[data-reset]', body).forEach((b) => b.addEventListener('click', () => {
      const d = store.get('checks', {}); Object.keys(d).forEach((k) => { if (k.startsWith(b.dataset.reset)) delete d[k]; }); store.set('checks', d);
      const sec = b.closest('[data-cl]'); $$('input', sec).forEach((c) => { c.checked = false; }); $('.count', sec).textContent = `0/${$$('input', sec).length}`;
    }));
  } else {
    body.innerHTML = D.problems.map((g) => `<h2>${esc(g.group)}</h2>${g.items.map((p, i) => probHTML(p[0], p[1], g.group.length + '-' + i)).join('')}`).join('');
    wireProbs(body);
  }
  $$('.seg button').forEach((b) => b.addEventListener('click', () => { location.hash = '#/checks/' + b.dataset.seg; }));
}

/* ---------- Router ---------- */
function route() {
  const parts = (location.hash || '#/kamera').slice(2).split('/');
  const [p, a] = parts;
  closeSheet();
  if (p === 'szenen') renderSzenen();
  else if (p === 'szene') renderSzene(a);
  else if (p === 'ideen') renderIdeen(a);
  else if (p === 'checks') renderChecks(a);
  else renderKamera(a);
  const tab = { szene: 'szenen' }[p] || p || 'kamera';
  $$('.tabs a').forEach((t) => t.classList.toggle('on', t.dataset.tab === (['kamera', 'szenen', 'ideen', 'checks'].includes(tab) ? tab : 'kamera')));
  if (!(p === 'ideen' && a)) window.scrollTo(0, 0);
}
window.addEventListener('hashchange', route);
route();
})();
