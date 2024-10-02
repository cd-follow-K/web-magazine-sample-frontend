import { useEffect, useState } from 'react';
import Image from 'next/image';  // Next.jsのImageコンポーネントをインポート

// 記事の型を定義
interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
  published_at: string;
}

// Homeコンポーネントを定義
export default function Home() {
  // 記事データを格納するstate
  const [articles, setArticles] = useState<Article[]>([]);
  // ローディング状態を管理するstate
  const [loading, setLoading] = useState<boolean>(true);
  // エラーメッセージを格納するstate
  const [error, setError] = useState<string | null>(null);
  // 検索クエリを管理するstate
  const [query, setQuery] = useState<string>('');
  // フィルタリングされた記事データを格納するstate
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);

  useEffect(() => {
    // Django APIから記事リストを取得
    fetch('http://localhost:8000/api/articles/')
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch');
        return response.json();
      })
      .then((data: Article[]) => {
        setArticles(data);  // 取得した記事データをセット
        setFilteredArticles(data);  // フィルタリングされたデータもセット
        setLoading(false);  // ローディング状態を解除
      })
      .catch((err: Error) => {
        setError(err.message);  // エラーメッセージをセット
        setLoading(false);  // ローディング状態を解除
      });
  }, []);

  useEffect(() => {
    // 検索クエリが変更されたときに記事をフィルタリング
    setFilteredArticles(
      articles.filter(article =>
        article.title.toLowerCase().includes(query.toLowerCase()) || 
        article.content.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, articles]);

  // ローディング中の表示
  if (loading) return <p>Loading...</p>;

  // エラーが発生した場合の表示
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {/* ヘッダーにロゴを表示 */}
      <header>
        <Image src="/images/logo.png" alt="Logo" width={50} height={50} />  {/* ロゴを表示 */}
      </header>
      
      {/* ヒーロー画像を表示するセクション */}
      <section>
        <Image src="/images/hero-image.jpg" alt="Hero Image" width={800} height={400} />  {/* ヒーロー画像を表示 */}
      </section>

      <h1>Articles</h1>
      
      {/* 検索バーの表示 */}
      <input
        type="text"
        placeholder="Search articles..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}  // 検索クエリを更新
      />

      <ul>
        {/* フィルタリングされた記事リストを表示 */}
        {filteredArticles.map((article) => (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <small>By {article.author} on {new Date(article.published_at).toLocaleDateString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
