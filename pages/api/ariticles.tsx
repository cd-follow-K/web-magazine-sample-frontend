import type { NextApiRequest, NextApiResponse } from 'next';  // Next.jsのAPI型をインポート

// モックデータ（本番環境では実際のAPI呼び出しが必要）
const articles = [
  { id: 1, title: 'First Article', content: 'This is the first article.', author: 'Author 1', published_at: '2024-01-01' },
  { id: 2, title: 'Second Article', content: 'This is the second article.', author: 'Author 2', published_at: '2024-01-02' },
];

// APIリクエストを処理するハンドラー関数
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(articles);  // モックデータをJSON形式で返す
}
