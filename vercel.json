# 🌸 蘭花管家 — 部署說明

## 專案結構

```
orchid-app/
├── public/
│   └── index.html          # 前端網頁
├── api/
│   └── claude.js           # Vercel Serverless Function（API 中繼）
├── netlify/
│   └── functions/
│       └── claude.js       # Netlify Function（API 中繼）
├── vercel.json             # Vercel 設定
├── netlify.toml            # Netlify 設定
└── README.md
```

---

## 部署到 Vercel（推薦）

### 步驟一：上傳到 GitHub
1. 前往 https://github.com/new 建立新 repository
2. 將這個資料夾的所有檔案上傳

### 步驟二：連接 Vercel
1. 前往 https://vercel.com，用 GitHub 帳號登入
2. 點選 **Add New Project**
3. 選擇你的 GitHub repository，點 **Deploy**

### 步驟三：設定環境變數（重要！）
1. 部署完成後，進入專案 → **Settings** → **Environment Variables**
2. 新增：
   - Name：`ANTHROPIC_API_KEY`
   - Value：你的 API Key（從 https://console.anthropic.com 取得）
3. 點 **Save**，然後 **Redeploy**

完成！你的網站會有一個 `https://你的專案.vercel.app` 網址。

---

## 部署到 Netlify

### 步驟一：上傳到 GitHub（同上）

### 步驟二：連接 Netlify
1. 前往 https://netlify.com，用 GitHub 帳號登入
2. 點選 **Add new site** → **Import an existing project**
3. 選擇 GitHub repository
4. Build settings 保持預設，點 **Deploy site**

### 步驟三：設定環境變數
1. 進入專案 → **Site configuration** → **Environment variables**
2. 新增：
   - Key：`ANTHROPIC_API_KEY`
   - Value：你的 API Key
3. 點 **Save**，然後 **Trigger deploy**

完成！你的網站會有一個 `https://你的專案.netlify.app` 網址。

---

## 取得 Anthropic API Key

1. 前往 https://console.anthropic.com
2. 登入或註冊帳號
3. 點選 **API Keys** → **Create Key**
4. 複製 Key（只會顯示一次，請妥善保存）

---

## 安全說明

- API Key 儲存在 Vercel/Netlify 的環境變數中，不會暴露在前端程式碼
- 前端只呼叫 `/api/claude`，由後端函式安全地轉發給 Anthropic
- 建議在 Anthropic Console 設定 **Usage Limits** 控制費用上限
