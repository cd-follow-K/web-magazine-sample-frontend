// next.config.tsx

// Next.js の設定ファイル
const nextConfig = {
    // reactStrictMode: true は React の開発時に Strict Mode を有効にし、潜在的な問題を検出するために使います
    reactStrictMode: true,
  
    // サーバーサイドとクライアントサイドで共通して使う環境変数を設定
    env: {
      API_BASE_URL: 'http://localhost:8000',  // Django の API のエンドポイントを定義
    },
  
    // 画像最適化のための設定。Next.js の Image コンポーネントでリモート画像を使用する場合、ドメインの許可リストを設定する必要がある
    images: {
      domains: ['localhost'],  // ここではローカルホストで画像を提供するための設定
    },
  
    // ビルド時に特定のパスをプレレンダリングしたい場合、ここで動的ルーティングの対象を定義できます
    async rewrites() {
      return [
        {
          source: '/api/:path*',  // フロントエンドの API エンドポイント（例: /api/articles）
          destination: `${process.env.API_BASE_URL}/api/:path*`,  // Django API のエンドポイントにリクエストを転送
        },
      ];
    },
  }
  
  // nextConfig をエクスポートして Next.js に設定を適用
  export default nextConfig;
  