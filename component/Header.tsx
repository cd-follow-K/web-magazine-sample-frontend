import Link from 'next/link';  // Next.jsのLinkコンポーネントをインポート

// ヘッダーコンポーネントを定義
export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          {/* ホームページへのリンク */}
          <li>
            <Link href="/">Home</Link>
          </li>
          {/* Aboutページへのリンク */}
          <li>
            <Link href="/about">About</Link>
          </li>
          {/* Contactページへのリンク */}
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
