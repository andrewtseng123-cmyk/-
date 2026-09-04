# Maison Lumière — Spring Château Prototype

這是一個「像影片，但不是影片」的 Scroll-driven 甜點品牌網站 Prototype。

## 1. 核心概念

整個網站不是一般的「Banner → Section → Section」，而是讓使用者像參觀一座春日法式莊園。

使用者向下滑動時：
- 畫面像攝影機慢慢移動
- 重要元素會從旁邊掠過
- 甜點桌會從側視逐漸轉成高角度俯視
- Hover 用來快速聚焦
- Click 用來展開產品重點
- 不使用傳統「返回鍵」
- 點空白處即可收回產品資訊

## 2. 章節順序

1. Opening / Château
2. The Collection — 產品
3. Our Craft — 我們的堅持
4. Made for Moments — 適合什麼時刻
5. Our Story — 品牌故事
6. The People — 團隊
7. The Invitation — CTA / 聯絡 / 訂購

產品一定比團隊更前面，因為使用者來到甜點網站時，第一核心仍然是「看甜點」。

## 3. 視覺方向

風格：
- 法式春日莊園
- 動畫電影感
- 親切，但不是幼稚卡通
- 中性，不偏公主感，也不偏陽剛
- 不做過度寫實的 3D
- 不做科技 HUD

主色：
- Ivory #F3EFE5
- Paper #EBE4D4
- Sage #A5AD93
- Olive #5D6654
- Deep #2D332C
- Cocoa #624D3D
- Gold #B99A61

## 4. 動態原則

動態語言只使用幾種，保持一致：

- Dolly：靠近重要物件
- Orbit：環繞主體
- Fly-by：讓建築、植物、柱子等從鏡頭旁掠過
- Tilt / Crane：把視角由低角度帶到俯視
- Scale + Opacity：做重點聚焦

避免：
- 突然黑屏
- 突然白屏
- 硬切頁面
- 每個區塊都 Fade In
- 過度 3D
- 太多漂浮粒子
- 內容全藏在動畫裡

## 5. Loading

Loading 長度約 2 秒。

目前 Prototype 使用：
- 奶油色背景
- 小型徽記
- 「Preparing the table...」
- 細金線 Progress

未來可以替換為：
- 花苞綻放
- 莊園徽章線稿被畫出來
- 藤蔓從左向右生長

## 6. 產品互動

Hover：
- 放大約 1.08–1.13 倍
- 稍微上浮
- 微光 / Shadow

Click：
- 甜點維持選中狀態
- 旁邊資訊卡出現
- 資訊內容：名稱 / 一句特色 / 價格 / 故事
- 不跳頁
- 不出現返回鍵

退出：
- 點擊空白處收回

## 7. Images 資料夾未來放什麼

assets/images 建議放：

- 01-loading-mark.png
- 02-chateau-aerial.webp
- 03-garden-foreground.webp
- 04-chateau-door.webp
- 05-dessert-room.webp
- 06-dessert-table.webp
- dessert-01.webp
- dessert-02.webp
- dessert-03.webp
- dessert-04.webp
- dessert-05.webp
- craft-kitchen.webp
- brand-story.webp
- team-01.webp
- team-02.webp
- team-03.webp
- team-04.webp

目前版本為了可以直接跑，先全部用 CSS 建構，不需要任何圖片。

## 8. GitHub 要怎麼放

最簡單：

- `index.html`
- `style.css`
- `script.js`
- `README.md`
- `assets/`
  - `images/`
  - `icons/`

把整個資料夾上傳到 GitHub repo 即可。

若使用 GitHub Pages：
Settings → Pages → Deploy from a branch → main / root

## 9. 下一版建議

下一版再處理：
- 真實莊園背景素材
- 甜點透明 PNG/WebP
- Scroll 轉場精緻化
- GSAP ScrollTrigger
- Three.js 只用在必要的 Camera Orbit
- 手機版獨立簡化動畫
