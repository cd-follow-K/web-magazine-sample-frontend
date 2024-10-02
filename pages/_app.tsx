import type { AppProps } from 'next/app';  // Next.jsのAppProps型をインポート
import '../styles/globals.css';  // グローバルなスタイリングをインポート

// 全てのページで共通のレイアウトを提供するAppコンポーネント
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;  // 各ページコンポーネントをレンダリング
}

export default MyApp;  // MyAppコンポーネントをエクスポート

