# 旭市商工会 リッチメニューモック（GitHub Pages）

旭市商工会の LINE リッチメニュー構成を想定したモックサイトです。ニューモフィズムのデザインで、各メニューを静的ページとして用意しています。

## 収録メニュー

1. ① 会員向けお知らせ — `pages/news.html`
2. ② イベント・セミナー — `pages/events.html`
3. ③ 相談・連絡（チャットbot＋問い合わせ） — `pages/chat.html`
4. ④ アンケート・フィードバック — `pages/survey.html`
5. ⑤ 会員証・マイページ — `pages/mypage.html`
6. ⑥ ビジネス支援・補助金 — `pages/grants.html`
7. ⑦ 地元企業MAP・商品紹介 — `pages/map.html`
8. ⑧ クーポン・特典 — `pages/coupons.html`
9. ⑨ 緊急情報・災害支援 — `pages/emergency.html`
10. ⑩ 設定・ヘルプ — `pages/settings.html`

トップページ（`index.html`）から各ページに遷移できます。`assets/css/style.css` にニューモフィズムのスタイルを定義しています。

### 多言語（i18n）
- 言語切替: ヘッダー（トップ）または 設定ページ から JA/EN/ZH を切替
- 辞書: `assets/i18n/ja.json`, `assets/i18n/en.json`, `assets/i18n/zh.json`
- 適用: HTML要素に `data-i18n="キー"` を付与（未指定テキストはそのまま表示）

### 実データ差し替え（JSON）
- 企業マップ: `assets/data/companies.json` を編集（`pages/map.html` がロード）
- イベント: `assets/data/events.json` を編集（`pages/events.html` がロード）
- スキーマ: `assets/data/README.md` 参照

## GitHub Pages 公開手順

1. GitHub の当リポジトリを開く
2. Settings → Pages
3. Build and deployment
   - Source: 「Deploy from a branch」
   - Branch: 「main」およびフォルダ「/root」
4. Save。数分後に `https://<ユーザー名>.github.io/<リポジトリ名>/` で公開されます。

公開後の言語固定リンク例:
- 日本語: `...?lang=ja`
- English: `...?lang=en`
- 中文: `...?lang=zh`

備考:
- 外部ライブラリは使用していないためビルド不要です（静的HTML）。
- `pages/map.html` は OpenStreetMap の iframe を用いた簡易表示です（通信は GitHub Pages 配信時に行われます）。

## ローカルプレビュー

ローカルで簡易確認する場合は VS Code の Live Server など、静的ファイルサーバを使用してください。

## ライセンス / 注意

本サイトはモック（試作）であり、コンテンツ・文言・外部リンクはダミーです。実運用時は実データ・最新情報に差し替えてください。
