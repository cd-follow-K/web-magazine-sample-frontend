// フッターコンポーネントを定義
export default function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Web Magazine. All rights reserved.</p>  {/* 現在の年を表示 */}
    </footer>
  );
}
