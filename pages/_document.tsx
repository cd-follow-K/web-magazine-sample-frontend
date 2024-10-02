import { Html, Head, Main, NextScript } from 'next/document';  // Next.jsのドキュメント用コンポーネントをインポート

// カスタムドキュメントを定義
export default function Document() {
  return (
    <Html>
      <Head>
        {/* カスタムメタタグやフォントなどをここに追加 */}
        <link rel="icon" href="/favicon.ico" />  {/* Faviconの設定 */}
      </Head>
      <body>
        <Main />  {/* ページコンテンツをレンダリング */}
        <NextScript />  {/* Next.jsのスクリプトをレンダリング */}
      </body>
    </Html>
  );
}
