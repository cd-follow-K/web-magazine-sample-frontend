import { Article } from './types';  // Article型をインポート

// 記事リストコンポーネントのプロパティ型を定義
interface ArticleListProps {
  articles: Article[];  // 記事データの配列
}

// 記事リストコンポーネントを定義
export default function ArticleList({ articles }: ArticleListProps) {
  return (
    <ul>
      {/* 記事のリストをループして表示 */}
      {articles.map((article) => (
        <li key={article.id}>
          <h2>{article.title}</h2>  {/* 記事のタイトル */}
          <p>{article.content}</p>  {/* 記事のコンテンツ */}
          <small>By {article.author} on {new Date(article.published_at).toLocaleDateString()}</small>  {/* 記事の著者と公開日 */}
        </li>
      ))}
    </ul>
  );
}
