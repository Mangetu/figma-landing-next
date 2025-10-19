# Figma → Next.js ハンドオフ手順


## 1. ファイル情報
- Figma: <共有リンク>
- 対象ページ/フレーム: Landing v1
- ブレークポイント: 375 / 768 / 1200


## 2. タイポ & カラー
- Font Family: Inter → `--font-sans`
- Body: 16px / 1.6 → `text-base leading-[1.6]`
- H1: 48px / 1.1 → `text-5xl leading-[1.1]`
- Primary: #2563EB → `--color-accent`


## 3. スペーシング（8pxグリッド）
- セクション縦: 24~32pxの倍数（本実装は `py-24` 基準）
- カード内: 24px (`p-6`)


## 4. コンポーネント化方針
- Hero/Features/Cta を分割し、propsでバリエーション対応
- 画像は `next/image`、SVGは inline で色拡張


## 5. レスポンシブ対応
- 主要ブロックは `md:` で2カラム化
- 画像`sizes`: `(max-width: 768px) 100vw, 50vw`


## 6. モーション
- 初回フェード/スライド（Framer Motion）
- 150–300msで控えめ、Reduce Motion には未適用 → 次版で対応


## 7. a11y
- ランドマーク: main/section/h2
- フォーカス: ボタンは :focus-visible 適用（Tailwind デフォルト）
- コントラスト: ボタン前景/背景 4.5:1 以上


## 8. 検証
- Lighthouse: Performance 90+/A11y 100/SEO 100 目標
- Viewport: 360/768/1024/1440


## 9. 差分管理
- Figma更新時は `docs/decisions.md` に変更メモ → PR に紐付け