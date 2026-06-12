<!DOCTYPE html>
<html lang="zh-TW">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>蘭花管家 — 智慧種植管理系統</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.19.0/dist/tabler-icons.min.css">
<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f0f0ec; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 20px; }
:root {
  --green-50: #EAF3DE; --green-100: #C0DD97; --green-200: #97C459;
  --green-600: #3B6D11; --green-800: #27500A; --green-900: #173404;
  --teal-50: #E1F5EE; --teal-100: #9FE1CB; --teal-600: #0F6E56; --teal-800: #085041;
  --bg: #ffffff; --bg2: #f5f5f3; --bg3: #eeece6;
  --text: #1a1a1a; --text2: #6b6b6b;
  --border: rgba(0,0,0,0.1); --border2: rgba(0,0,0,0.22);
  --r: 8px; --rl: 12px;
}
.app { display: flex; width: 960px; max-width: 100%; height: 620px; overflow: hidden; border: 1px solid var(--border2); border-radius: var(--rl); box-shadow: 0 4px 32px rgba(0,0,0,0.1); }
.sidebar { width: 200px; background: var(--green-900); display: flex; flex-direction: column; flex-shrink: 0; }
.logo { padding: 20px 16px 16px; border-bottom: 0.5px solid rgba(255,255,255,0.1); }
.logo h1 { color: var(--green-100); font-size: 15px; font-weight: 500; }
.logo p { color: var(--green-200); font-size: 11px; margin-top: 2px; }
.nav-item { display: flex; align-items: center; gap: 10px; padding: 10px 16px; cursor: pointer; color: rgba(192,221,151,0.7); font-size: 13px; transition: background 0.15s; border-left: 3px solid transparent; user-select: none; }
.nav-item:hover { background: rgba(255,255,255,0.08); color: var(--green-100); }
.nav-item.active { background: rgba(255,255,255,0.13); color: #fff; border-left-color: var(--green-200); }
.nav-item i { font-size: 17px; flex-shrink: 0; }
.main { flex: 1; display: flex; flex-direction: column; overflow: hidden; background: var(--bg3); }
.topbar { background: var(--bg); border-bottom: 0.5px solid var(--border); padding: 14px 20px; display: flex; align-items: center; justify-content: space-between; flex-shrink: 0; }
.topbar h2 { font-size: 16px; font-weight: 500; color: var(--text); }
.btn { padding: 7px 14px; border-radius: var(--r); font-size: 13px; cursor: pointer; border: 0.5px solid var(--border2); background: var(--bg); color: var(--text); transition: background 0.15s; }
.btn:hover { background: var(--bg2); }
.btn-sm { padding: 5px 10px; font-size: 12px; }
.btn-primary { background: var(--green-800); color: var(--green-50); border-color: var(--green-800); }
.btn-primary:hover { background: var(--green-900); }
.content { flex: 1; overflow-y: auto; padding: 20px; }
.page { display: none; }
.page.active { display: block; }

/* Cards & layout */
.stat-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; margin-bottom: 20px; }
.stat-card { background: var(--bg); border: 0.5px solid var(--border); border-radius: var(--rl); padding: 16px; text-align: center; }
.stat-val { font-size: 28px; font-weight: 500; margin-bottom: 4px; }
.stat-lbl { font-size: 12px; color: var(--text2); }
.sec-title { font-size: 11px; font-weight: 500; color: var(--text2); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px; }
.badge { display: inline-block; padding: 3px 8px; border-radius: 100px; font-size: 11px; font-weight: 500; }
.b-green { background: var(--green-50); color: var(--green-800); }
.b-amber { background: #FAEEDA; color: #633806; }
.b-blue  { background: #E6F1FB; color: #0C447C; }

/* Orchid rows */
.orow { background: var(--bg); border: 0.5px solid var(--border); border-radius: var(--r); padding: 12px 16px; display: flex; align-items: center; gap: 12px; cursor: pointer; transition: border-color 0.15s; margin-bottom: 8px; }
.orow:hover { border-color: var(--border2); }
.oavatar { width: 40px; height: 40px; border-radius: var(--r); background: var(--green-50); display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0; }
.oinfo { flex: 1; }
.oname { font-size: 14px; font-weight: 500; color: var(--text); }
.ometa { font-size: 12px; color: var(--text2); margin-top: 2px; }
.pbar { height: 4px; background: var(--bg2); border-radius: 2px; overflow: hidden; margin-top: 8px; }
.pfill { height: 100%; border-radius: 2px; background: var(--green-600); }

/* Env cards */
.env-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 12px; }
.env-card { background: var(--bg); border: 0.5px solid var(--border); border-radius: var(--rl); padding: 20px; text-align: center; }
.env-val { font-size: 36px; font-weight: 500; color: var(--text); margin: 8px 0 4px; }
.env-unit { font-size: 14px; color: var(--text2); }
.env-lbl { font-size: 13px; color: var(--text2); margin-top: 4px; }

/* Schedule */
.sitem { background: var(--bg); border: 0.5px solid var(--border); border-radius: var(--r); padding: 12px 16px; display: flex; align-items: center; gap: 12px; margin-bottom: 8px; }
.sdot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }

/* AI Diag */
.diag-upload { border: 1.5px dashed var(--border2); border-radius: var(--rl); padding: 40px 20px; text-align: center; cursor: pointer; transition: border-color 0.15s; margin-bottom: 16px; }
.diag-upload:hover { border-color: var(--green-600); }
.diag-upload i { font-size: 40px; color: var(--text2); display: block; margin-bottom: 12px; }
.diag-result { background: var(--teal-50); border: 0.5px solid var(--teal-100); border-radius: var(--rl); padding: 16px; }

/* Chat */
.chat-msgs { height: 340px; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; margin-bottom: 12px; }
.msg { max-width: 80%; padding: 10px 14px; border-radius: var(--rl); font-size: 13px; line-height: 1.55; }
.msg-ai   { align-self: flex-start; background: var(--bg); border: 0.5px solid var(--border); color: var(--text); }
.msg-user { align-self: flex-end; background: var(--green-800); color: var(--green-50); }
.chat-input-row { display: flex; gap: 8px; }
.chat-input-row input { flex: 1; padding: 9px 12px; border: 0.5px solid var(--border2); border-radius: var(--r); font-size: 13px; background: var(--bg); color: var(--text); outline: none; }
.chat-input-row input:focus { border-color: var(--green-600); }

/* KB */
.kb-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 12px; }
.kb-card { background: var(--bg); border: 0.5px solid var(--border); border-radius: var(--rl); padding: 16px; cursor: pointer; transition: border-color 0.15s; }
.kb-card:hover { border-color: var(--border2); }
.kb-tag { font-size: 11px; color: var(--green-800); background: var(--green-50); padding: 2px 8px; border-radius: 100px; display: inline-block; margin-bottom: 8px; }
.kb-title { font-size: 14px; font-weight: 500; color: var(--text); margin-bottom: 4px; }
.kb-desc { font-size: 12px; color: var(--text2); line-height: 1.5; }

/* Quick btns */
.quick-btns { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 10px; }
</style>
</head>
<body>
<div class="app">
  <!-- Sidebar -->
  <div class="sidebar">
    <div class="logo">
      <h1>🌸 蘭花管家</h1>
      <p>智慧種植管理系統</p>
    </div>
    <nav style="flex:1;padding:8px 0;">
      <div class="nav-item active"  onclick="nav('home',this)"><i class="ti ti-layout-dashboard"></i>總覽</div>
      <div class="nav-item" onclick="nav('varieties',this)"><i class="ti ti-plant"></i>品種管理</div>
      <div class="nav-item" onclick="nav('growth',this)"><i class="ti ti-chart-line"></i>生長記錄</div>
      <div class="nav-item" onclick="nav('env',this)"><i class="ti ti-temperature"></i>環境監控</div>
      <div class="nav-item" onclick="nav('schedule',this)"><i class="ti ti-calendar"></i>排程管理</div>
      <div class="nav-item" onclick="nav('diag',this)"><i class="ti ti-stethoscope"></i>AI 病害診斷</div>
      <div class="nav-item" onclick="nav('advisor',this)"><i class="ti ti-robot"></i>種植顧問</div>
      <div class="nav-item" onclick="nav('kb',this)"><i class="ti ti-book"></i>知識庫</div>
    </nav>
    <div style="padding:12px 16px;border-top:0.5px solid rgba(255,255,255,0.1);">
      <div style="display:flex;align-items:center;gap:8px;">
        <div style="width:30px;height:30px;border-radius:50%;background:var(--green-200);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:500;color:var(--green-900);">蘭</div>
        <span style="font-size:12px;color:var(--green-100);">蘭花愛好者</span>
      </div>
    </div>
  </div>

  <!-- Main -->
  <div class="main">
    <div class="topbar">
      <h2 id="ptitle">總覽</h2>
      <button class="btn btn-primary" onclick="nav('varieties', document.querySelectorAll('.nav-item')[1])">+ 新增蘭花</button>
    </div>
    <div class="content">

      <!-- 總覽 -->
      <div class="page active" id="page-home">
        <p class="sec-title">本週摘要</p>
        <div class="stat-grid">
          <div class="stat-card"><div class="stat-val" style="color:var(--green-800);">12</div><div class="stat-lbl">蘭花總數</div></div>
          <div class="stat-card"><div class="stat-val" style="color:#185FA5;">3</div><div class="stat-lbl">待澆水</div></div>
          <div class="stat-card"><div class="stat-val" style="color:#BA7517;">1</div><div class="stat-lbl">異常預警</div></div>
          <div class="stat-card"><div class="stat-val" style="color:var(--green-800);">5</div><div class="stat-lbl">本月開花</div></div>
        </div>
        <p class="sec-title">最近動態</p>
        <div class="orow"><div class="oavatar">🌸</div><div class="oinfo"><div class="oname">嘉德麗雅蘭 #3</div><div class="ometa">今天 09:30 — 澆水完成</div></div><span class="badge b-green">健康</span></div>
        <div class="orow"><div class="oavatar">🌼</div><div class="oinfo"><div class="oname">文心蘭 #1</div><div class="ometa">昨天 — AI 診斷：輕微葉斑病</div></div><span class="badge b-amber">注意</span></div>
        <div class="orow"><div class="oavatar">💜</div><div class="oinfo"><div class="oname">蝴蝶蘭 #7</div><div class="ometa">2天前 — 施肥記錄更新</div></div><span class="badge b-green">健康</span></div>
      </div>

      <!-- 品種管理 -->
      <div class="page" id="page-varieties">
        <div class="orow"><div class="oavatar">🌸</div><div class="oinfo"><div class="oname">嘉德麗雅蘭 (Cattleya)</div><div class="ometa">購入：2023/03 · 紫色大花 · 室內窗台</div><div class="pbar"><div class="pfill" style="width:75%"></div></div></div><span class="badge b-green">健康</span></div>
        <div class="orow"><div class="oavatar">🌼</div><div class="oinfo"><div class="oname">文心蘭 (Oncidium)</div><div class="ometa">購入：2023/08 · 黃色小花 · 陽台半日照</div><div class="pbar"><div class="pfill" style="width:50%;background:#BA7517"></div></div></div><span class="badge b-amber">注意</span></div>
        <div class="orow"><div class="oavatar">💜</div><div class="oinfo"><div class="oname">蝴蝶蘭 (Phalaenopsis)</div><div class="ometa">購入：2024/01 · 白色 · 室內弱光</div><div class="pbar"><div class="pfill" style="width:90%"></div></div></div><span class="badge b-green">開花中</span></div>
        <div class="orow"><div class="oavatar">🌺</div><div class="oinfo"><div class="oname">萬代蘭 (Vanda)</div><div class="ometa">購入：2024/03 · 藍紫色 · 吊掛通風</div><div class="pbar"><div class="pfill" style="width:60%"></div></div></div><span class="badge b-green">健康</span></div>
      </div>

      <!-- 生長記錄 -->
      <div class="page" id="page-growth">
        <p class="sec-title">蝴蝶蘭 #7 — 生長時間軸</p>
        <div style="position:relative;padding-left:24px;">
          <div style="position:absolute;left:8px;top:0;bottom:0;width:1px;background:var(--border);"></div>
          <div id="growth-tl"></div>
        </div>
        <div style="text-align:center;margin-top:16px;">
          <button class="btn btn-primary" onclick="addGrowth()">+ 新增生長記錄</button>
        </div>
      </div>

      <!-- 環境監控 -->
      <div class="page" id="page-env">
        <div class="env-grid">
          <div class="env-card"><i class="ti ti-temperature" style="font-size:24px;color:var(--green-800)"></i><div class="env-val" id="ev-temp">24</div><div class="env-unit">°C</div><div class="env-lbl">溫度</div><div style="margin-top:8px"><span class="badge b-green">適中</span></div></div>
          <div class="env-card"><i class="ti ti-droplet" style="font-size:24px;color:#185FA5"></i><div class="env-val" id="ev-hum">62</div><div class="env-unit">%</div><div class="env-lbl">濕度</div><div style="margin-top:8px"><span class="badge b-green">適中</span></div></div>
          <div class="env-card"><i class="ti ti-sun" style="font-size:24px;color:#BA7517"></i><div class="env-val" id="ev-light">3200</div><div class="env-unit">lux</div><div class="env-lbl">光照強度</div><div style="margin-top:8px"><span class="badge b-amber">偏低</span></div></div>
          <div class="env-card"><i class="ti ti-wind" style="font-size:24px;color:var(--green-600)"></i><div class="env-val" id="ev-co2">412</div><div class="env-unit">ppm</div><div class="env-lbl">CO₂ 濃度</div><div style="margin-top:8px"><span class="badge b-green">正常</span></div></div>
        </div>
        <div style="text-align:center;margin-top:16px;display:flex;gap:8px;justify-content:center;">
          <button class="btn" onclick="refreshEnv()"><i class="ti ti-refresh"></i> 更新數據</button>
          <button class="btn btn-primary" onclick="goAdvisor('根據溫度24°C、濕度62%、光照3200lux，給我蘭花照護建議')">AI 分析</button>
        </div>
      </div>

      <!-- 排程 -->
      <div class="page" id="page-schedule">
        <p class="sec-title">本週任務</p>
        <div id="sched-list">
          <div class="sitem"><div class="sdot" style="background:#185FA5"></div><div style="flex:1"><div style="font-size:14px;font-weight:500;color:var(--text)">澆水 — 嘉德麗雅蘭、萬代蘭</div><div style="font-size:12px;color:var(--text2);margin-top:2px">今天 · 下午澆水，避免根部積水</div></div><button class="btn btn-sm" onclick="done(this)">完成</button></div>
          <div class="sitem"><div class="sdot" style="background:#BA7517"></div><div style="flex:1"><div style="font-size:14px;font-weight:500;color:var(--text)">施肥 — 全部蘭花</div><div style="font-size:12px;color:var(--text2);margin-top:2px">週三 · 稀釋 1000 倍蘭花專用肥</div></div><button class="btn btn-sm" onclick="done(this)">完成</button></div>
          <div class="sitem" style="opacity:0.5"><div class="sdot" style="background:var(--green-600)"></div><div style="flex:1"><div style="font-size:14px;font-weight:500;color:var(--text);text-decoration:line-through">換盆 — 蝴蝶蘭 #7</div><div style="font-size:12px;color:var(--text2);margin-top:2px">週一 · 已完成 ✓</div></div><span class="badge b-green">完成</span></div>
        </div>
        <div style="text-align:center;margin-top:16px;">
          <button class="btn btn-primary" onclick="goAdvisor('幫我規劃下週的蘭花養護排程')">AI 規劃排程</button>
        </div>
      </div>

      <!-- AI 診斷 -->
      <div class="page" id="page-diag">
        <div class="diag-upload" onclick="diagnose()">
          <i class="ti ti-camera-plus"></i>
          <div style="font-size:14px;color:var(--text);margin-bottom:6px;">上傳蘭花照片</div>
          <div style="font-size:12px;color:var(--text2)">點擊上傳，AI 自動分析病蟲害</div>
        </div>
        <div class="diag-result" id="diag-result" style="display:none">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
            <i class="ti ti-shield-check" style="font-size:20px;color:var(--teal-600)"></i>
            <span style="font-size:14px;font-weight:500;color:var(--teal-800)">AI 診斷結果</span>
            <span class="badge b-amber" style="margin-left:auto">輕微異常</span>
          </div>
          <div style="font-size:13px;color:var(--text);line-height:1.6" id="diag-text">分析中…</div>
        </div>
      </div>

      <!-- 種植顧問 -->
      <div class="page" id="page-advisor">
        <div class="chat-msgs" id="chat-msgs">
          <div class="msg msg-ai">你好！我是你的蘭花種植顧問 🌸 有什麼蘭花養護問題想問我嗎？</div>
        </div>
        <div class="quick-btns">
          <button class="btn btn-sm" onclick="quickAsk('蝴蝶蘭葉子變黃怎麼辦？')">葉子變黃</button>
          <button class="btn btn-sm" onclick="quickAsk('蘭花多久澆一次水？')">澆水頻率</button>
          <button class="btn btn-sm" onclick="quickAsk('蘭花為什麼不開花？')">促進開花</button>
          <button class="btn btn-sm" onclick="quickAsk('蘭花根部腐爛怎麼處理？')">根部腐爛</button>
        </div>
        <div class="chat-input-row">
          <input type="text" id="chat-in" placeholder="輸入問題…" onkeydown="if(event.key==='Enter')sendChat()">
          <button class="btn btn-primary" onclick="sendChat()"><i class="ti ti-send"></i></button>
        </div>
      </div>

      <!-- 知識庫 -->
      <div class="page" id="page-kb">
        <div class="kb-grid">
          <div class="kb-card" onclick="goAdvisor('介紹蘭花澆水的正確方法')"><span class="kb-tag">養護基礎</span><div class="kb-title">蘭花澆水完整指南</div><div class="kb-desc">了解不同品種的澆水頻率、水質要求與根部觀察方法。</div></div>
          <div class="kb-card" onclick="goAdvisor('介紹蘭花施肥的方法與注意事項')"><span class="kb-tag">施肥</span><div class="kb-title">施肥時機與配方選擇</div><div class="kb-desc">生長期與休眠期的施肥差異，及各類肥料的比較。</div></div>
          <div class="kb-card" onclick="goAdvisor('介紹常見蘭花病蟲害與防治方法')"><span class="kb-tag">病蟲害</span><div class="kb-title">常見病蟲害辨識與防治</div><div class="kb-desc">葉斑病、根腐病、介殼蟲等常見問題的識別與處理。</div></div>
          <div class="kb-card" onclick="goAdvisor('介紹蘭花換盆的步驟和注意事項')"><span class="kb-tag">換盆</span><div class="kb-title">換盆步驟與介質選擇</div><div class="kb-desc">何時換盆、選用樹皮或水草的差異，以及換盆後照顧。</div></div>
          <div class="kb-card" onclick="goAdvisor('蘭花如何促進開花？')"><span class="kb-tag">開花</span><div class="kb-title">促進開花的環境調控</div><div class="kb-desc">溫差刺激、光照管理與花箭誘導的實用技巧。</div></div>
          <div class="kb-card" onclick="goAdvisor('不同種類蘭花的光照需求有什麼不同？')"><span class="kb-tag">光照</span><div class="kb-title">各品種光照需求對照</div><div class="kb-desc">嘉德麗雅、蝴蝶蘭、文心蘭等的光線強度與擺放位置建議。</div></div>
        </div>
      </div>

    </div>
  </div>
</div>

<script>
const titles = { home:'總覽', varieties:'品種管理', growth:'生長記錄', env:'環境監控', schedule:'排程管理', diag:'AI 病害診斷', advisor:'種植顧問', kb:'知識庫' };

function nav(id, el) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  document.getElementById('ptitle').textContent = titles[id];
  if (el) el.classList.add('active');
  if (id === 'growth') renderGrowth();
}

// Growth timeline
const growthData = [
  { date: '2024-01-15', event: '購入', note: '初次入手，根系健康，2 根花梗' },
  { date: '2024-02-20', event: '開花', note: '第一朵花開放，白色帶粉芯' },
  { date: '2024-03-10', event: '施肥', note: '花期施肥，使用高磷肥' },
  { date: '2024-04-05', event: '修剪', note: '花謝後修剪花梗至第二節點' },
  { date: '2024-05-12', event: '換盆', note: '換用水草介質，新根生長旺盛' },
];
function renderGrowth() {
  document.getElementById('growth-tl').innerHTML = growthData.map(d => `
    <div style="margin-bottom:16px;position:relative;">
      <div style="position:absolute;left:-20px;top:4px;width:10px;height:10px;border-radius:50%;background:var(--green-600)"></div>
      <div style="font-size:11px;color:var(--text2)">${d.date}</div>
      <div style="font-size:14px;font-weight:500;color:var(--text)">${d.event}</div>
      <div style="font-size:12px;color:var(--text2);margin-top:2px">${d.note}</div>
    </div>`).join('');
}
function addGrowth() {
  const evts = ['澆水', '觀察葉片', '新根發現', '花苞出現'];
  growthData.unshift({ date: new Date().toISOString().slice(0,10), event: evts[Math.floor(Math.random()*evts.length)], note: '手動新增記錄' });
  renderGrowth();
}

// Env
function refreshEnv() {
  document.getElementById('ev-temp').textContent  = 22 + Math.floor(Math.random()*6);
  document.getElementById('ev-hum').textContent   = 55 + Math.floor(Math.random()*20);
  document.getElementById('ev-light').textContent = 2500 + Math.floor(Math.random()*2000);
  document.getElementById('ev-co2').textContent   = 400 + Math.floor(Math.random()*30);
}

// Schedule complete
function done(btn) {
  const item = btn.closest('.sitem');
  item.style.opacity = '0.5';
  item.querySelector('[style*="font-weight"]').style.textDecoration = 'line-through';
  btn.replaceWith(Object.assign(document.createElement('span'), { className: 'badge b-green', textContent: '完成' }));
}

// API proxy call — goes through /api/claude (no key in frontend)
async function askClaude(system, message) {
  const res = await fetch('/api/claude', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ system, message }),
  });
  if (!res.ok) throw new Error(await res.text());
  const data = await res.json();
  return data.text;
}

// Diagnosis
async function diagnose() {
  const r = document.getElementById('diag-result');
  r.style.display = 'block';
  document.getElementById('diag-text').textContent = '分析中…請稍候';
  try {
    const text = await askClaude(
      '你是蘭花病害診斷專家，用繁體中文回答，簡潔實用，約100字。',
      '模擬診斷：一株蝴蝶蘭葉片出現黃色斑點，請給出診斷結果與建議處理方式。'
    );
    document.getElementById('diag-text').textContent = text;
  } catch {
    document.getElementById('diag-text').textContent = '診斷完成：疑似輕微葉斑病（Cercospora），建議移除病葉，噴灑稀釋殺菌劑，並改善通風環境，避免葉片積水。';
  }
}

// Chat
async function sendChat() {
  const inp = document.getElementById('chat-in');
  const q = inp.value.trim();
  if (!q) return;
  inp.value = '';
  const msgs = document.getElementById('chat-msgs');
  msgs.innerHTML += `<div class="msg msg-user">${q}</div>`;
  const typing = Object.assign(document.createElement('div'), { className: 'msg msg-ai', textContent: '思考中…' });
  msgs.appendChild(typing);
  msgs.scrollTop = msgs.scrollHeight;
  try {
    const text = await askClaude('你是蘭花種植顧問，使用繁體中文，回答簡潔友善，約80-120字。', q);
    typing.textContent = text;
  } catch {
    typing.textContent = '抱歉，顧問暫時無法回應，請稍後再試。';
  }
  msgs.scrollTop = msgs.scrollHeight;
}
function quickAsk(q) { document.getElementById('chat-in').value = q; sendChat(); }
function goAdvisor(q) {
  nav('advisor', document.querySelectorAll('.nav-item')[6]);
  setTimeout(() => { document.getElementById('chat-in').value = q; sendChat(); }, 100);
}

renderGrowth();
</script>
</body>
</html>
