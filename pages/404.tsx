import Link from 'next/link';  // Next.jsのLinkコンポーネントをインポート

// カスタム404ページを定義
export default function Custom404() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>  {/* エラーメッセージ */}
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/">Go back to home</Link>  {/* ホームページへのリンク */}
    </div>
  );
}
