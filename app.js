const S = { acts: [], chars: {}, progress: null, lang: 'ja', cur: 0, bundles: {}, panels: [], fold: null, langs: ['ja'] };
const UI = {
  ja: { site: '鳴潮 物語解析', arc: '今州篇', intro: '本文の引用に基づく解析です。進度を選ぶと、その幕までの内容だけが表示されます。', where: 'どこまでプレイ済みですか',
        lang: '言語', read: 'この進度で読む', later: '進度は後からヘッダーで変更できます', index: '索引', setp: '進度を変更', locked: '未プレイの幕（クリックで進度を更新）',
        played: 'はプレイ済みですか？', playedHint: '進度を更新すると、この幕までの内容（解析・人物・謎の進展）が表示されます。', notyet: 'まだ', update: 'プレイ済み、進度を更新',
        noContent: 'この幕の解析はまだ書かれていません。', newM: 'この幕で生まれた謎', advM: '進展した謎', chars: '登場人物', hl: '注目ポイント', facts: 'この幕で分かったこと', seeChar: '人物ファイルで詳しく', first: '初登場',
        next: '次の幕へ', nextLocked: '次の幕', gateHint: 'プレイ済みなら進度を更新', end: 'ここまで（続きは準備中）', closeAll: 'すべて閉じる', close: '閉じる',
        mys: '謎', mysRec: '謎の記録', notYet: 'この進度ではまだ表示できません。', profile: '人物紹介', curAct: '（現在の幕まで）', noProfile: 'この進度ではまだ紹介がありません。',
        idxTitle: '索引（この進度まで）', resolved: '解決', ongoing: '継続中', openedAt: ' で提示', clues: '手がかり', unit: '件', none: 'まだありません。', people: '人物', firstAt: ' で初登場',
        line: '本文', ctx: '前後の文脈', jaFallback: '', fail: '読み込みに失敗しました', mt: '',
        ppl: '人物考察', pplTitle: '人物考察（この進度まで）', tabPlay: '主要人物', tabOther: 'その他の人物', bio: '人物の歩み（本文の整理）', anN: '考察', noAn: 'この人物の考察はまだありません。', back: '← 幕に戻る', spoil: 'この先は、現在の進度より後の内容を含む可能性があります（クリックで開く）', more: '推理を読む', charPage: '人物ページを開く', noChars: 'この進度ではまだ表示できる人物がいません。', since: ' から', loading: '読み込み中…', analysis: '考察', offMain: '本編では未登場（活動・地域任務など）', evN: '根拠を見る',
        ess: '章のことば', essTitle: '章のことば', essRead: '編者の読み', essHow: 'この読みについて', essSrc: '出典', essEv: '根拠の台詞',
        credit: '企画・監修：橘なるもの ／ 解析・執筆：Claude（Anthropic）。非公式のファンサイトです。ゲーム本文の著作権は Kuro Games に帰属します。' },
  zh: { site: '鳴潮 劇情解析', arc: '今州篇', intro: '依據遊戲文本引用的劇情解析。選擇遊戲進度後，只會顯示到該幕為止的內容。', where: '你玩到哪裡了？',
        lang: '語言', read: '以這個進度閱讀', later: '之後可以在上方變更進度', index: '索引', setp: '變更進度', locked: '尚未遊玩的幕（點擊以更新進度）',
        played: '已經玩過了嗎？', playedHint: '更新進度後，會顯示到這一幕為止的內容（解析、人物、謎題進展）。', notyet: '還沒', update: '玩過了，更新進度',
        noContent: '這一幕的解析還沒寫好。', newM: '這一幕出現的謎', advM: '有進展的謎', chars: '登場人物', hl: '注目要點', facts: '這一幕確認的事', seeChar: '詳見人物檔案', first: '初登場',
        next: '下一幕', nextLocked: '下一幕', gateHint: '玩過的話請更新進度', end: '到此為止（後續準備中）', closeAll: '全部關閉', close: '關閉',
        mys: '謎', mysRec: '謎題紀錄', notYet: '這個進度還不能顯示。', profile: '人物介紹', curAct: '（到目前這一幕）', noProfile: '這個進度還沒有介紹。',
        idxTitle: '索引（到目前進度）', resolved: '已解開', ongoing: '進行中', openedAt: ' 提出', clues: '線索', unit: ' 條', none: '還沒有。', people: '人物', firstAt: ' 初登場',
        line: '遊戲文本', ctx: '前後文', jaFallback: '（此句沒有官方中文對照，顯示日文原句）', fail: '載入失敗', mt: '說明文字為機器翻譯（日文版為原稿），遊戲台詞為官方中文版。',
        ppl: '人物考察', pplTitle: '人物考察（到目前進度）', tabPlay: '主要人物', tabOther: '其他人物', bio: '人物經歷（文本整理）', anN: '考察', noAn: '這個人物還沒有考察。', back: '← 回到劇情', spoil: '以下內容可能含有目前進度之後的劇透（點擊展開）', more: '閱讀推理', charPage: '開啟人物頁面', noChars: '這個進度還沒有可以顯示的人物。', since: ' 起', loading: '載入中…', analysis: '考察', offMain: '主線未登場（活動、地區任務等）', evN: '查看根據',
        ess: '章之語', essTitle: '章之語', essRead: '編者的解讀', essHow: '關於這個解讀', essSrc: '出處', essEv: '依據的台詞',
        credit: '企劃・監修：橘なるもの ／ 解析・撰寫：Claude（Anthropic）。非官方粉絲網站，遊戲文本版權屬於 Kuro Games。' } };
const T = k => (UI[S.lang] || UI.ja)[k];
// evidence chips: up to two stay in view; more fold under one line so reading isn't interrupted
const evFold = html => { const n = (html.match(/class="ev"/g) || []).length; return n > 2 ? `<details class="evfold"><summary>${T('evN')}（${n}）</summary>${html}</details>` : html; };
const CONF_LABEL = { ja: {}, zh: { '本文確定': '文本確定', '強推論': '強推論', '推測': '推測', '未決': '未定' } };
const ACT_LABEL = { ja: { open: '提示', advance: '進展', resolve: '解決' }, zh: { open: '提出', advance: '進展', resolve: '解開' } };
const disp = name => (S.chars[name] && S.chars[name].disp) || name;
const app = document.getElementById('app');
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const CONF = { '本文確定': 'fix', '強推論': 'strong', '推測': 'guess', '未決': 'open' };
async function getJSON(u) { const r = await fetch(u); if (!r.ok) throw new Error(u); return r.json(); }
function save() { try { localStorage.setItem('wuwa_site', JSON.stringify({ progress: S.progress, lang: S.lang, cur: S.cur })); } catch (e) {} }
function restore() { try { const o = JSON.parse(localStorage.getItem('wuwa_site') || 'null'); if (o) { S.progress = o.progress; S.lang = o.lang || 'ja'; S.cur = o.cur || 0; } } catch (e) {} }

async function loadLang() { S.acts = await getJSON(`data/${S.lang}/acts.json`); S.chars = await getJSON(`data/${S.lang}/characters.json`); S.bundles = {}; S.cpages = {};
  try { S.cidx = await getJSON(`data/${S.lang}/chars.json`); } catch (e) { S.cidx = []; }
  try { S.essays = await getJSON(`data/${S.lang}/essays.json`); } catch (e) { S.essays = null; } }
async function init() {
  try { S.langs = (await getJSON('data/langs.json')).langs; } catch (e) {}
  restore(); if (!S.langs.includes(S.lang)) S.lang = 'ja';
  await loadLang();
  document.documentElement.lang = S.lang === 'zh' ? 'zh-Hant' : 'ja';
  if (S.progress == null) return showStart();
  await loadBundles(); S.cur = Math.min(S.cur, S.progress); render();
}
// progress overlay while act data loads (a reader far into the story fetches ~50 files on the first visit)
function loadingUI(done, total) {
  let el = document.getElementById('loading');
  if (!el) { el = document.createElement('div'); el.id = 'loading'; document.body.appendChild(el); }
  el.innerHTML = `<div class="lbox"><div>${T('loading')} ${done} / ${total}</div><div class="lbar"><div style="width:${total ? Math.round(done * 100 / total) : 100}%"></div></div></div>`;
}
function loadingDone() { const el = document.getElementById('loading'); if (el) el.remove(); }
async function loadBundles() {
  const need = [];   // fetched in parallel: on a real server, 50 one-by-one requests took several seconds
  for (let i = 0; i <= S.progress; i++) if (!S.bundles[i] && S.acts[i].has_content) need.push(i);
  let done = 0; if (need.length) loadingUI(0, need.length);
  try { await Promise.all(need.map(i => getJSON(`data/${S.lang}/act_${S.acts[i].id}.json`).then(b => { S.bundles[i] = b; loadingUI(++done, need.length); }))); }
  finally { loadingDone(); }
  fold();
}
function fold() {
  const M = {}, C = {}, R = [];
  for (let i = 0; i <= S.progress; i++) {
    const b = S.bundles[i]; if (!b) continue;
    for (const m of b.mysteries) {
      M[m.id] = M[m.id] || { id: m.id, title: m.title, question: m.question, events: [] };
      if (m.action === 'open') { M[m.id].title = m.title; M[m.id].question = m.question; }
      else if (m.title && i <= S.cur) M[m.id].title = m.title;
      M[m.id].events.push({ act: i, action: m.action, note: m.note, evidence: m.evidence });
    }
    for (const c of b.characters) { C[c.name] = C[c.name] || { name: c.name, disp: c.disp, notes: [] }; C[c.name].notes.push({ act: i, note: c.note, new: c.new, evidence: c.evidence }); }
    for (const r of b.relations) R.push({ ...r, act: i });
  }
  S.fold = { M, C, R };
}

/* ---------- start screen ---------- */
function showStart() {
  let sel = S.progress ?? 0;
  const draw = () => {
    app.innerHTML = `<div class="start">
      <h1>${T('site')}</h1>
      <p>${T('intro')}</p>${T('mt') ? `<p class="hint">${T('mt')}</p>` : ''}
      <h2>${T('where')}</h2>
      ${arcGroups().map(g => `<details class="arc"${g.idx.includes(sel) ? ' open' : ''}><summary>${esc(g.arc)}<small>${esc(S.acts[g.idx[0]].short)}〜${esc(S.acts[g.idx[g.idx.length - 1]].short)}</small></summary><div class="actgrid">${g.idx.map(i => `<button data-i="${i}" class="${i === sel ? 'sel' : ''}">${esc(S.acts[i].short)}<small>${esc(S.acts[i].title)}</small></button>`).join('')}</div></details>`).join('')}
      <h2>${T('lang')} / 語言</h2>
      <div class="langs"><label><input type="radio" name="lang" value="ja" ${S.lang === 'ja' ? 'checked' : ''}> 日本語</label><label><input type="radio" name="lang" value="zh" ${S.lang === 'zh' ? 'checked' : ''} ${S.langs.includes('zh') ? '' : 'disabled'}> 中文（繁體）</label></div>
      <div class="go"><button class="primary" id="go">${T('read')}</button><span class="hint">${T('later')}</span></div>
      <p class="credit">${T('credit')}</p>
    </div>`;
    app.querySelectorAll('.actgrid button').forEach(b => b.onclick = () => { sel = +b.dataset.i; draw(); });
    app.querySelectorAll('input[name=lang]').forEach(r => r.onchange = async () => { S.lang = r.value; await loadLang(); draw(); });
    app.querySelector('#go').onclick = async () => { S.progress = sel; S.cur = sel; S.panels = []; save(); await loadBundles(); render(); };
  };
  draw();
}

/* ---------- main render ---------- */
function render() {
  app.innerHTML = `<header><div class="wrap">
      <div class="brand">${T('site')}<small>${esc(S.acts[S.cur] ? S.acts[S.cur].arc : '')}</small></div>
      <div class="bar" id="bar"></div>
      <a href="#" class="set" id="ppl">${T('ppl')}</a>
      ${S.essays ? `<a href="#" class="set" id="ess">${T('ess')}</a>` : ''}
      <a href="#" class="set" id="idx">${T('index')}</a>
      ${S.langs.length > 1 ? `<a href="#" class="set" id="lng">${S.lang === 'zh' ? '日本語' : '中文'}</a>` : ''}
      <a href="#" class="set" id="setp">${T('setp')}</a>
      <a href="#" class="set themebtn" id="thm" title="theme">${document.documentElement.dataset.theme === 'light' ? '☾' : '☀'}</a>
    </div><div class="wrap actbar" id="actbar"></div></header>
    <div class="wrap main"><div class="page" id="page"></div><div class="panels" id="panels"></div></div>`;
  renderBar();
  app.querySelector('#setp').onclick = e => { e.preventDefault(); showStart(); };
  app.querySelector('#thm').onclick = e => { e.preventDefault(); const t = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light'; document.documentElement.dataset.theme = t; try { localStorage.setItem('wuwa-theme', t); } catch (_) {} e.target.textContent = t === 'light' ? '☾' : '☀'; };
  app.querySelector('#ppl').onclick = e => { e.preventDefault(); showCharList(); };
  const es = app.querySelector('#ess'); if (es) es.onclick = e => { e.preventDefault(); showEssays(); };
  app.querySelector('#idx').onclick = e => { e.preventDefault(); push({ type: 'index', id: 'index', label: T('index') }, true); };
  const lg = app.querySelector('#lng'); if (lg) lg.onclick = async e => { e.preventDefault(); S.lang = S.lang === 'zh' ? 'ja' : 'zh'; S.panels = []; save(); await loadLang(); await loadBundles(); document.documentElement.lang = S.lang === 'zh' ? 'zh-Hant' : 'ja'; render(); };
  renderAct(); renderPanels();
}
/* progress bar: one group per arc (篇); only one arc shows its acts, the others fold into a single button */
const arcGroups = () => { const g = []; S.acts.forEach((a, i) => { if (!g.length || g[g.length - 1].arc !== a.arc) g.push({ arc: a.arc, idx: [] }); g[g.length - 1].idx.push(i); }); return g; };
function renderBar() {
  const bar = app.querySelector('#bar'); if (!bar) return;
  const openArc = S.openArc ?? (S.acts[S.cur] || {}).arc;   // null = follow the current act; '' = all folded
  const groups = arcGroups(), og = groups.find(g => g.arc === openArc);
  bar.innerHTML = groups.map(g => {
    const done = g.idx.filter(i => i <= S.progress).length, cur = g.idx.includes(S.cur);
    return `<button class="arcbtn${g === og ? ' open' : ''}${cur ? ' hascur' : ''}${done ? ' unlocked' : ' locked'}" data-arc="${esc(g.arc)}">${done ? '' : '🔒 '}${esc(g.arc)}<small>${done}/${g.idx.length}</small></button>`;
  }).join('');
  const row = app.querySelector('#actbar');   // second header row: the acts of the open arc
  row.innerHTML = og ? og.idx.map(i => {
    const a = S.acts[i], cls = (i <= S.progress ? 'unlocked' : 'locked') + (i === S.cur ? ' current' : '') + (a.has_content ? '' : ' nocontent');
    return `<button data-i="${i}" class="${cls}" title="${i <= S.progress ? esc(a.title) : T('locked')}">${i <= S.progress ? '' : '🔒 '}${esc(a.short)}</button>`;
  }).join('') : '';
  row.querySelectorAll('button[data-i]').forEach(b => b.onclick = () => { const i = +b.dataset.i; i <= S.progress ? go(i) : gate(i); });
  bar.querySelectorAll('.arcbtn').forEach(b => b.onclick = () => { S.openArc = b.classList.contains('open') ? '' : b.dataset.arc; renderBar(); });
  for (const [box, c] of [[bar, bar.querySelector('.open, .hascur')], [row, row.querySelector('.current')]])
    if (c) box.scrollLeft = Math.max(0, c.offsetLeft - box.offsetLeft - 40);
  document.documentElement.style.setProperty('--hh', app.querySelector('header').offsetHeight + 'px');   // panels stick below the header
}
function go(i) { S.cur = i; S.openArc = null; S.panels = []; save(); fold(); renderAct(); renderPanels(); window.scrollTo(0, 0); renderBar(); app.querySelector('.brand small').textContent = S.acts[i].arc; }
function gate(i) {
  const a = S.acts[i];
  modal(`<p><b>${esc(a.chapter)} ${esc(a.act)}</b> ${T('played')}<br><span style="color:var(--muted);font-size:14px">${T('playedHint')}</span></p>`,
    [[T('notyet'), null], [T('update'), async () => { S.progress = i; save(); await loadBundles(); render(); go(i); }]]);
}
function modal(html, btns) {
  const d = document.createElement('div'); d.className = 'modal-bg';
  d.innerHTML = `<div class="modal">${html}<div class="btns">${btns.map((b, k) => `<button data-k="${k}" class="${k === btns.length - 1 ? 'primary' : ''}">${esc(b[0])}</button>`).join('')}</div></div>`;
  d.querySelectorAll('button').forEach(b => b.onclick = () => { d.remove(); const f = btns[+b.dataset.k][1]; if (f) f(); });
  d.onclick = e => { if (e.target === d) d.remove(); };
  document.body.appendChild(d);
}
const badge = c => `<span class="badge ${CONF[c] || 'open'}">${esc((CONF_LABEL[S.lang] || {})[c] || c)}</span>`;
const evChips = (evs, key) => evs && evs.length ? evFold(`<div class="evs">${evs.map((e, k) => `<button class="ev" data-ev="${key}:${k}">${esc(e.label || e.ref)}</button>`).join('')}</div>`) : '';
function icon(name, size) {
  const c = S.chars[name]; const ini = name.slice(0, 1);
  return `<div class="ic">${c && c.icon ? `<img src="icons/${c.icon}" alt="">` : esc(ini)}</div>`;
}
function renderAct() {
  const a = S.acts[S.cur], b = S.bundles[S.cur], page = app.querySelector('#page'); S.evmap = {};
  if (!b) { page.innerHTML = `<h1>${esc(a.title)}</h1><div class="sub">${esc(a.chapter)} ${esc(a.act)}</div><p class="empty">${T('noContent')}</p>${navHtml()}`; bindNav(page); return; }
  const reg = (key, evs) => { S.evmap[key] = evs; return evChips(evs, key); };
  const opens = b.mysteries.filter(m => m.action === 'open'), advs = b.mysteries.filter(m => m.action !== 'open');
  const mtitle = m => m.title || (S.fold.M[m.id] ? S.fold.M[m.id].title : m.id);
  const mcard = (m, k) => `<div class="card click mcard" data-m="${esc(m.id)}"><div class="t"><span class="tag ${m.action}">${ACT_LABEL[S.lang][m.action]}</span>${esc(mtitle(m))}</div>${m.action === 'open' ? `<div class="q">${esc(m.question)}</div>` : ''}<div class="n">${esc(m.note)}</div>${reg('m' + k, m.evidence)}</div>`;
  page.innerHTML = `
    <h1>${esc(a.title)}</h1><div class="sub">${esc(a.chapter)} ${esc(a.act)}</div>
    ${b.key ? `<div class="actkey">${esc(b.key)}</div>` : ''}
    <div class="syn">${b.synopsis.map(s => `<p>${esc(s)}</p>`).join('')}</div>
    ${opens.length ? `<h2>${T('newM')}</h2>${opens.map((m, k) => mcard(m, 'o' + k)).join('')}` : ''}
    ${advs.length ? `<h2>${T('advM')}</h2>${advs.map((m, k) => mcard(m, 'a' + k)).join('')}` : ''}
    ${(b.facts || []).length ? `<h2>${T('facts')}</h2><ul class="facts">${b.facts.map((f, k) => `<li><span>${esc(f.text)}</span>${reg('f' + k, f.evidence)}</li>`).join('')}</ul>` : ''}
    ${b.characters.length ? `<h2>${T('chars')}</h2><div class="chips">${b.characters.map(c => `<div class="chip" data-c="${esc(c.name)}">${icon(c.name)}<div><div class="nm">${esc(c.disp || c.name)}${c.new ? `<small>${T('first')}</small>` : ''}</div><div class="no">${esc(c.note)}</div></div></div>`).join('')}</div>` : ''}
    ${b.highlights.length ? `<h2>${T('hl')}</h2>${b.highlights.map((h, k) => `<div class="card"><div class="t">${badge(h.confidence)}${esc(h.title)}</div><div class="n">${esc(h.body)}</div>${(h.char || []).length ? `<div class="seechar">→ ${T('seeChar')}：${h.char.map(n => `<a href="#" class="rc" data-c="${esc(n)}">${esc((S.chars[n] && S.chars[n].disp) || n)}</a>`).join('・')}</div>` : ''}${reg('h' + k, h.evidence)}</div>`).join('')}` : ''}
    ${navHtml()}`;
  page.querySelectorAll('.mcard').forEach(el => el.onclick = e => { if (!e.target.closest('.ev')) openMystery(el.dataset.m, true); });
  page.querySelectorAll('.chip, .rc').forEach(el => el.onclick = e => { e.preventDefault(); openChar(el.dataset.c, true); });
  page.querySelectorAll('.ev').forEach(el => el.onclick = () => { const [k, n] = el.dataset.ev.split(':'); openEvidence(S.evmap[k][+n], true); });
  bindNav(page);
}
function navHtml() {
  const i = S.cur, prev = i > 0 ? `<button id="prev">← ${esc(S.acts[i - 1].short)}</button>` : '<span></span>';
  const next = i + 1 < S.acts.length ? (i + 1 <= S.progress ? `<button id="next" class="primary">${T('next')}：${esc(S.acts[i + 1].short)} →</button>` : `<button id="next">${T('nextLocked')}（${esc(S.acts[i + 1].chapter)} ${esc(S.acts[i + 1].act)}）🔒 <span class="gate">${T('gateHint')}</span></button>`) : `<span class="gate">${T('end')}</span>`;
  return `<div class="nav">${prev}${next}</div>`;
}
function bindNav(page) {
  const p = page.querySelector('#prev'), n = page.querySelector('#next');
  if (p) p.onclick = () => go(S.cur - 1);
  if (n) n.onclick = () => { const i = S.cur + 1; i <= S.progress ? go(i) : gate(i); };
}

/* ---------- character pages (site/chars → data/<lang>/chars) ----------
   Items whose refs reveal them after the reader's progress are folded behind a spoiler warning. */
/* 章のことば: one phrase (or a thesis/antithesis pair) per chapter; later chapters fold behind the spoiler notice */
function showEssays() {
  const page = app.querySelector('#page'); S.panels = []; renderPanels(); S.evmap = {};
  const E = S.essays || { entries: [] };
  const role = r => r === 'anti' ? '⇔' : r === 'image' ? '◇' : '';
  const card = (e, k) => {
    const ph = e.phrases.map(p => `<div class="ess-ph ${p.role}">${role(p.role) ? `<span class="ess-mark">${role(p.role)}</span>` : ''}<span class="ess-txt">${esc(p.text)}</span><span class="ess-src">${esc(p.src)}</span></div>`).join('');
    S.evmap['e' + k] = e.evidence;
    const body = `<div class="ess-head"><div class="ess-ch">${esc(e.chapter)}</div><div class="ess-range">${esc(e.range)}</div></div>
      <div class="ess-phrases${e.phrases.some(p => p.role === "main") && e.phrases.length > 1 ? " withmain" : ""}">${ph}</div>${e.sub ? `<div class="ess-sub">${esc(e.sub)}</div>` : ''}
      <div class="ess-body">${e.body.map(t => `<p>${esc(t)}</p>`).join('')}</div>
      <div class="ess-ev">${evChips(e.evidence, "e" + k)}</div>
      <details class="ess-how"><summary>${T('essHow')}</summary><p>${esc(e.method)}</p></details>`;
    return `<article class="ess">${e.reveal > S.progress ? `<details class="spoil"><summary>${esc(e.chapter)} — ${T('spoil')}</summary>${body}</details>` : body}</article>`;
  };
  page.innerHTML = `<p><button id="back">${T('back')}</button></p><h1>${T('essTitle')}</h1><p class="ess-intro">${esc(E.intro || '')}</p>` +
    E.entries.map(card).join('');
  page.querySelector('#back').onclick = () => go(S.cur);
  page.querySelectorAll('.ev').forEach(el => el.onclick = () => { const [k, n] = el.dataset.ev.split(':'); openEvidence(S.evmap[k][+n], true); });
  window.scrollTo(0, 0);
}
function showCharList(tab) {
  const page = app.querySelector('#page'); S.panels = []; renderPanels();
  if (tab) S.ctab = tab; tab = S.ctab || 'play';
  const an = c => (c.an || []).filter(r => r <= S.progress).length;
  const list = (S.cidx || []).filter(c => c.unlock <= S.progress && (tab === 'play') === (c.kind === 'playable' || an(c) > 0));
  // within each arc, characters with readable 考察 come first (stable: otherwise first-appearance order)
  const byAn = cs => cs.map((c, i) => [c, i]).sort((a, b) => ((an(b[0]) > 0) - (an(a[0]) > 0)) || a[1] - b[1]).map(x => x[0]);
  const groups = arcGroups().map(g => ({ arc: g.arc, cs: byAn(list.filter(c => c.listed !== false && g.idx.includes(c.unlock))) })).concat([{ arc: T('offMain'), cs: byAn(list.filter(c => c.listed === false)) }]).filter(g => g.cs.length);
  const card = c => `<div class="chip cp" data-c="${esc(c.name)}">${icon(c.name)}<div class="tx"><div class="nm">${esc(c.disp || c.name)}</div><div class="no">${esc(c.title)}</div><div class="no">${c.listed !== false ? esc(S.acts[c.unlock].short) + T('firstAt') : ''}${an(c) ? `<span class="anb">${T('anN')} ${an(c)}</span>` : ''}</div></div></div>`;
  page.innerHTML = `<p><button id="back">${T('back')}</button></p><h1>${T('pplTitle')}</h1>` +
    `<div class="ctabs"><button data-t="play" class="${tab === 'play' ? 'on' : ''}">${T('tabPlay')}</button><button data-t="other" class="${tab === 'other' ? 'on' : ''}">${T('tabOther')}</button></div>` +
    (groups.length ? groups.map(g => `<h2>${esc(g.arc)}</h2><div class="cgrid">${g.cs.map(card).join('')}</div>`).join('')
      : `<p class="empty">${T('noChars')}</p>`);
  page.querySelector('#back').onclick = () => go(S.cur);
  page.querySelectorAll('.ctabs button').forEach(b => b.onclick = () => showCharList(b.dataset.t));
  page.querySelectorAll('.cp').forEach(el => el.onclick = () => showCharPage(el.dataset.c));
  window.scrollTo(0, 0);
}
async function showCharPage(name) {
  const page = app.querySelector('#page');
  let c = S.cpages[name];
  if (!c) { try { c = S.cpages[name] = await getJSON(`data/${S.lang}/chars/${encodeURIComponent(name)}.json`); } catch (e) { return; } }
  if (c.unlock > S.progress) return;
  S.evmap = {};
  // chips on character pages: one per act+speaker ("1-7・今汐 ×3"), opening the first of its lines
  const reg = (key, evs) => {
    const groups = []; (evs || []).forEach(e => { const l = (e.label || e.ref).replace(/（[^）]*）/g, ''); const g = groups.find(x => x.l === l); g ? g.n++ : groups.push({ l, e, n: 1 }); });
    S.evmap[key] = groups.map(g => g.e);
    return groups.length ? evFold(`<div class="evs">${groups.map((g, k) => `<button class="ev" data-ev="${key}:${k}">${esc(g.l)}${g.n > 1 ? ` ×${g.n}` : ''}</button>`).join('')}</div>`) : '';
  };
  const item = (it, key) => `<div class="citem">${badge(it.confidence)}${esc(it.text)}${it.more && c.more[it.more] ? ` <button class="morebtn" data-mo="${esc(it.more)}">${T('more')}</button>` : ''}${reg(key, it.evidence)}</div>`;
  page.innerHTML = `<p><button id="back">${T('back')}</button> <button id="plist">${T('pplTitle')}</button></p>
    <div class="pchar big">${icon(name)}<div><h1>${esc(c.disp || c.name)}</h1><div class="sub">${esc(c.title)}</div></div></div>
    <div class="card"><div class="n">${esc(c.intro)}</div>${reg('intro', c.intro_evidence)}</div>
    ${(c.analysis || []).length ? (() => {
      const an = (a, k) => `<div class="card acard">${badge(a.confidence)}<span class="t">${esc(a.title)}</span><div class="n">${rich(a.summary, a.evidence)}</div>${a.paragraphs.length ? `<button class="morebtn" data-an="${k}">${T('more')}</button>` : ''}${reg('a' + k, a.evidence)}</div>`;
      const RANK = { '本文確定': 0, '強推論': 1, '推測': 2, '未決': 3 };   // firmer readings first, then guesses, then open questions
      const all = c.analysis.map((a, k) => [a, k]).sort((x, y) => ((RANK[x[0].confidence] ?? 2) - (RANK[y[0].confidence] ?? 2)) || x[1] - y[1]), now = all.filter(([a]) => a.reveal <= S.progress), later = all.filter(([a]) => a.reveal > S.progress);
      return `<h2>${T('analysis')}</h2>${now.map(([a, k]) => an(a, k)).join('')}` + (later.length ? `<details class="spoil"><summary>${T('spoil')}</summary>${later.map(([a, k]) => an(a, k)).join('')}</details>` : '');
    })() : ''}
    ${(() => { const hasAn = (c.analysis || []).some(a => a.reveal <= S.progress); return `${hasAn ? '' : `<p class="empty">${T('noAn')}</p>`}<details class="bio"${hasAn ? '' : ' open'}><summary>${T('bio')}</summary>`; })()}
    ${c.sections.filter(s => s.items.length).map((s, k) => {
      const all = s.items.map((it, j) => [it, j]), now = all.filter(([it]) => it.reveal <= S.progress), later = all.filter(([it]) => it.reveal > S.progress);
      return `<h2>${esc(s.title)}</h2>${now.map(([it, j]) => item(it, `s${k}_${j}`)).join('')}` +
        (later.length ? `<details class="spoil"><summary>${T('spoil')}</summary>${later.map(([it, j]) => item(it, `s${k}_${j}`)).join('')}</details>` : '');
    }).join('')}</details>`;
  page.querySelector('#back').onclick = () => go(S.cur);
  page.querySelector('#plist').onclick = () => showCharList();
  page.querySelectorAll('.ev').forEach(el => el.onclick = () => { const [k, n] = el.dataset.ev.split(':'); openEvidence(S.evmap[k][+n], true); });
  page.querySelectorAll('.morebtn[data-mo]').forEach(el => el.onclick = () => moreModal(c, el.dataset.mo));
  page.querySelectorAll('.morebtn[data-an]').forEach(el => el.onclick = () => { const a = c.analysis[+el.dataset.an]; moreModal({ more: { x: a } }, 'x'); });
  window.scrollTo(0, 0);
}
// the reasoning window: long text is allowed here, in short paragraphs; folded if it reaches past the reader's progress
// light markup for reasoning text: "## " starts a small heading, **…** is the key sentence, 「…」 quotes from the game stand out
// a 「…」 found in one of the item's evidence lines links to that line: dotted underline, brackets hidden (kept in the text
// for copying); hover shows a side card, click opens the evidence (pinned side card inside the reasoning window).
const qnorm = s => (s || '').replace(/<rt>.*?<\/rt>/g, '').replace(/<[^>]+>/g, '').replace(/[\s、。，,．.！？!?…・·「」『』“”"—―\-－~〜（）()]/g, '');
const QEV = [];
const rich = (t, evs) => esc(t).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/「([^「」]*)」/g, (m, inner, off, str) => {
  if (evs && evs.length) {
    const n = qnorm(inner), ev = n && evs.find(e => qnorm(e.ja_plain || e.ja).includes(n));
    if (ev) {
      QEV.push(ev);
      // without the brackets a line-final 。 would collide with what follows (「…。」と → …。と, 「…。」， → …。，): hide it too
      let tail = '';
      if (str.slice(off + m.length).replace(/<\/strong>/g, '').trim()) { const k = inner.search(/[。．.]+$/); if (k > 0) { tail = inner.slice(k); inner = inner.slice(0, k); } }
      return `<span class="ql" data-qi="${QEV.length - 1}" tabindex="0"><span class="qb">「</span>${inner}<span class="qb">${tail}」</span></span>`;
    }
  }
  return `<span class="q">${m}</span>`;
});
const para = (p, evs) => p.startsWith('## ') ? `<h4>${rich(p.slice(3), evs)}</h4>` : `<p>${rich(p, evs)}</p>`;
const qtip = document.createElement('div'); qtip.id = 'qtip'; qtip.hidden = true; document.body.appendChild(qtip);
const canHover = matchMedia('(hover: hover)').matches;
let qtTimer, qPinned = false, qAnchor = null;
// short card on hover; "pinned" card (line + surrounding dialogue) when a quote is clicked inside the reasoning window,
// so the window stays open and the reader keeps their place
function tipHTML(ev, full) {
  const head = `<div class="s">${full ? '<button class="qx" aria-label="close">×</button>' : ''}${esc(ev.speaker || '')}<span class="lb">${esc(ev.label || ev.ref)}</span></div>`;
  if (!full) return head + `<div class="l">${ev.ja}</div><button class="qgo">${T('ctx')} →</button>`;
  const ctx = ev.ctx && ev.ctx.length ? `<div class="qctx">${ev.ctx.map(l => `<div class="${l.cur ? 'cur' : ''}"><span class="sp">${esc(l.speaker || '')}</span>${l.ja}</div>`).join('')}</div>` : `<div class="l">${ev.ja}</div>`;
  return head + (ev.doc_title ? `<div class="dt">${esc(ev.doc_title)}</div>` : '') + ctx;
}
function showEvTip(ev, anchor, full) {
  if (!ev) return; clearTimeout(qtTimer);
  qtip.innerHTML = tipHTML(ev, full); qtip.classList.toggle('pin', full); qPinned = full; qAnchor = anchor; qtip._ev = ev; qtip.hidden = false;
  document.querySelectorAll('.ql.on').forEach(x => x.classList.remove('on')); if (anchor.classList.contains('ql')) anchor.classList.add('on');
  placeTip(anchor);
  const cur = full && qtip.querySelector('.qctx .cur'); if (cur) qtip.scrollTop = cur.offsetTop - qtip.clientHeight / 2 + cur.offsetHeight / 2;
}
const showTip = (el, full) => showEvTip(QEV[+el.dataset.qi], el, !!full);
function closeTip() { qPinned = false; qtip.hidden = true; qtip.classList.remove('pin'); document.querySelectorAll('.ql.on').forEach(x => x.classList.remove('on')); }
// beside the text column (aligned with the quoted line) so it never covers what is being read;
// with no room on either side it docks at the bottom edge, or at the top when the quote itself is low on the screen
function placeTip(el) {
  const col = el.closest('.modal') || el.closest('#page') || el.closest('.panel') || document.body;
  const c = col.getBoundingClientRect(), r = el.getClientRects()[0] || el.getBoundingClientRect();
  const G = 16, MIN = 260, right = innerWidth - c.right - 2 * G, left = c.left - 2 * G, st = qtip.style;
  qtip.classList.remove('dock'); st.right = st.bottom = 'auto';
  if (right >= MIN || left >= MIN) {
    const w = Math.min(qPinned ? 440 : 380, Math.max(right, left));
    st.width = w + 'px'; st.left = (right >= MIN ? c.right + G : c.left - G - w) + 'px';
    st.top = Math.max(8, Math.min(r.top - 10, innerHeight - qtip.offsetHeight - 8)) + 'px';
  } else {
    qtip.classList.add('dock'); st.width = 'auto'; st.left = st.right = G + 'px';
    const hb = el.closest('.modal') ? 0 : (document.querySelector('header')?.getBoundingClientRect().bottom || 0);
    if (r.bottom > innerHeight * 0.6) st.top = (hb + 8) + 'px'; else { st.top = 'auto'; st.bottom = G + 'px'; }
  }
}
const hideTip = () => { if (qPinned) return; clearTimeout(qtTimer); qtTimer = setTimeout(() => { if (!qPinned) closeTip(); }, 400); };
function openQ(qi) { closeTip(); const ev = QEV[+qi]; if (!ev) return; document.querySelectorAll('.modal-bg').forEach(d => d.remove()); openEvidence(ev, true); }
document.addEventListener('mouseover', e => { if (!canHover || qPinned) return; const el = e.target.closest('.ql'); if (el) showTip(el); else if (e.target.closest('#qtip')) clearTimeout(qtTimer); });
document.addEventListener('mouseout', e => { if (canHover && e.target.closest('.ql, #qtip')) hideTip(); });
document.addEventListener('click', e => {
  if (e.target.closest('.qx')) { closeTip(); return; }
  if (e.target.closest('.qgo')) { if (qAnchor && qAnchor.closest('.modal')) showEvTip(qtip._ev, qAnchor, true); else openQ(qtip.dataset.qi = qAnchor ? qAnchor.dataset.qi : qtip.dataset.qi); return; }
  const el = e.target.closest('.ql');
  if (el) { if (el.closest('.modal')) showTip(el, canHover); else if (canHover) openQ(el.dataset.qi); else showTip(el); return; }
  if (!e.target.closest('#qtip')) closeTip();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !qtip.hidden) { closeTip(); e.stopPropagation(); return; }
  const el = e.target.closest && e.target.closest('.ql'); if (el && e.key === 'Enter') el.closest('.modal') ? showTip(el, true) : openQ(el.dataset.qi);
}, true);
addEventListener('scroll', e => { if (canHover && !qPinned && !(e.target.closest && e.target.closest('#qtip'))) closeTip(); }, true);
function moreModal(c, id) {
  const mo = c.more[id]; if (!mo) return;
  const d = document.createElement('div'); d.className = 'modal-bg';
  const body = `<h3>${badge(mo.confidence)}${esc(mo.title)}</h3>${mo.summary ? `<div class="lead">${rich(mo.summary, mo.evidence)}</div>` : ''}<div class="reason">${mo.paragraphs.map(p => para(p, mo.evidence)).join('')}</div>` +
    evFold(`<div class="evs">${(mo.evidence || []).map((e, k) => `<button class="ev" data-k="${k}">${esc(e.label || e.ref)}</button>`).join('')}</div>`);
  d.innerHTML = `<div class="modal wide">${mo.reveal > S.progress ? `<details class="spoil"><summary>${T('spoil')}</summary>${body}</details>` : body}<div class="btns"><button class="primary" id="mclose">${T('close')}</button></div></div>`;
  d.onclick = e => { if (e.target === d) { closeTip(); d.remove(); } };
  d.querySelector('#mclose').onclick = () => { closeTip(); d.remove(); };
  // evidence buttons open the pinned side card too, so the reasoning window stays open
  d.querySelectorAll('.ev').forEach(b => b.onclick = e => { e.stopPropagation(); showEvTip(mo.evidence[+b.dataset.k], b, true); });
  document.body.appendChild(d);
}

/* ---------- panels ---------- */
const pkey = p => p.type + ':' + (p.id || p.name || (p.ev && p.ev.ref) || '');
const MAX_PANELS = 6;
// A click on the page starts a fresh stack; a click inside a panel goes one level deeper.
// Re-opening something already in the stack returns to it instead of stacking a duplicate.
function push(p, fromPage) {
  if (fromPage) S.panels = [p];
  else {
    const k = S.panels.findIndex(q => pkey(q) === pkey(p));
    if (k >= 0) S.panels = S.panels.slice(0, k + 1);
    else { S.panels.push(p); if (S.panels.length > MAX_PANELS) S.panels = S.panels.slice(-MAX_PANELS); }
  }
  renderPanels();
}
function renderPanels() {
  const box = app.querySelector('#panels'); if (!box) return;
  if (!S.panels.length) { box.innerHTML = ''; return; }
  const top = S.panels[S.panels.length - 1];
  box.innerHTML = S.panels.slice(0, -1).map((p, k) => `<button class="ptab" data-k="${k}">${esc(p.label)}</button>`).join('') + `<div class="panel">${panelHtml(top)}</div>`;
  box.querySelectorAll('.ptab').forEach(b => b.onclick = () => { S.panels = S.panels.slice(0, +b.dataset.k + 1); renderPanels(); });
  box.querySelector('#pclose').onclick = () => { S.panels.pop(); renderPanels(); };
  const all = box.querySelector('#pall'); if (all) all.onclick = () => { S.panels = []; renderPanels(); };
  box.querySelectorAll('.ev').forEach(el => el.onclick = () => { const [k, n] = el.dataset.ev.split(':'); openEvidence(top.evmap[k][+n]); });
  box.querySelectorAll('.rc, .chip').forEach(el => el.onclick = () => openChar(el.dataset.c));
  box.querySelectorAll('.mref').forEach(el => el.onclick = () => openMystery(el.dataset.m));
  box.querySelectorAll('.cpage').forEach(el => el.onclick = () => showCharPage(el.dataset.c));
}
const phead = (kind) => `<div class="ph"><span class="kind">${esc(kind)}</span><span>${S.panels.length > 1 ? `<button id="pall">${T('closeAll')}</button> ` : ''}<button id="pclose">${T('close')}</button></span></div>`;
function panelHtml(p) {
  p.evmap = {};
  const reg = (key, evs) => { p.evmap[key] = evs; return evChips(evs, key); };
  if (p.type === 'mystery') {
    const m = S.fold.M[p.id]; if (!m) return phead(T('mys')) + `<p class="empty">${T('notYet')}</p>`;
    // like the profile panel: only the entry of the act being read (or the latest one before it) is unfolded
    let cur = -1; m.events.forEach((e, k) => { if (e.act <= S.cur) cur = k; }); if (cur < 0) cur = 0;
    return phead(T('mysRec')) + `<h3>${esc(m.title)}</h3><div class="q">${esc(m.question)}</div><div class="tl">${m.events.map((e, k) => `<details class="step fold ${e.act > S.cur ? 'future' : ''}"${k === cur ? ' open' : ''}><summary class="act">${esc(S.acts[e.act].short)}　${esc(S.acts[e.act].title)}　<span class="tag ${e.action}">${ACT_LABEL[S.lang][e.action]}</span>${k === cur ? '　' + T('curAct') : ''}</summary><div>${esc(e.note)}</div>${reg('e' + k, e.evidence)}</details>`).join('')}</div>`;
  }
  if (p.type === 'char') {
    const c = S.fold.C[p.name]; const notes = c ? c.notes : [];
    // only the profile as of the act being read is unfolded; earlier/later ones stay folded
    let cur = -1; notes.forEach((n, k) => { if (n.act <= S.cur) cur = k; }); if (cur < 0) cur = 0;
    const cpage = (S.cidx || []).find(x => x.name === p.name && x.unlock <= S.progress);
    return phead(T('profile')) + `<div class="pchar">${icon(p.name)}<h3>${esc(disp(p.name))}</h3></div>` + (cpage ? `<p><button class="cpage" data-c="${esc(p.name)}">${T('charPage')} →</button></p>` : '') + (notes.length ? `<div class="tl">${notes.map((n, k) => `<details class="step fold ${n.act > S.cur ? 'future' : ''}"${k === cur ? ' open' : ''}><summary class="act">${esc(S.acts[n.act].short)}　${esc(S.acts[n.act].title)}${n.new ? '　' + T('first') : ''}${k === cur ? '　' + T('curAct') : ''}</summary><div>${esc(n.note)}</div></details>`).join('')}</div>` : `<p class="empty">${T('noProfile')}</p>`);
  }
  if (p.type === 'index') {
    const ms = Object.values(S.fold.M), cs = Object.values(S.fold.C);
    const last = m => m.events[m.events.length - 1];
    return phead(T('idxTitle')) +
      `<h3>${T('mys')}</h3>${ms.length ? ms.map(m => `<div class="card click mref" data-m="${esc(m.id)}"><div class="t"><span class="tag ${last(m).action}">${last(m).action === 'resolve' ? T('resolved') : T('ongoing')}</span>${esc(m.title)}</div><div class="q">${esc(S.acts[m.events[0].act].short)}${T('openedAt')} ・ ${T('clues')} ${m.events.length}${T('unit')}</div></div>`).join('') : `<p class="empty">${T('none')}</p>`}` +
      `<h3 style="margin-top:16px">${T('people')}</h3><div class="chips">${cs.map(c => `<div class="chip" data-c="${esc(c.name)}">${icon(c.name)}<div><div class="nm">${esc(c.disp || c.name)}</div><div class="no">${esc(S.acts[c.notes[0].act].short)}${T('firstAt')}</div></div></div>`).join('')}</div>`;
  }
  if (p.type === 'ev') {
    const e = p.ev;
    return phead(T('line')) + `<div class="quote"><span class="sp">${esc(e.speaker)}</span>${e.ja}</div>` + (S.lang === 'zh' && e.lang === 'ja' ? `<div class="q">${T('jaFallback')}</div>` : '') +
      (e.label ? `<div class="q">${esc(e.label)}</div>` : '') +
      `<details open><summary>${T('ctx')}</summary><div class="ctx">${e.ctx.map(l => `<div class="l ${l.cur ? 'cur' : ''}"><span class="s">${esc(l.speaker)}</span><span>${l.ja}</span></div>`).join('')}</div></details>` +
      `<div class="meta">${esc(e.doc_title)}　${esc(e.ref)}</div>`;
  }
  return phead('') + '';
}
function openMystery(id, fromPage) { const m = S.fold.M[id]; push({ type: 'mystery', id, label: m ? m.title : id }, fromPage); }
function openChar(name, fromPage) { push({ type: 'char', name, label: disp(name) }, fromPage); }
function openEvidence(ev, fromPage) { push({ type: 'ev', ev, label: (ev.speaker + '：' + ev.ja_plain).slice(0, 18) }, fromPage); }

init().catch(e => { app.innerHTML = `<p style="padding:20px">${T('fail')}：${esc(e.message)}</p>`; });
