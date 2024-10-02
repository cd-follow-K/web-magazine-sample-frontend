import { ChangeEvent } from 'react';  // ChangeEvent型をインポート

// 検索バーコンポーネントのプロパティ型を定義
interface SearchBarProps {
  query: string;  // 検索クエリの状態
  onQueryChange: (query: string) => void;  // 検索クエリの変更を処理する関数
}

// 検索バーコンポーネントを定義
export default function SearchBar({ query, onQueryChange }: SearchBarProps) {
  // 検索バーの入力が変更されたときの処理
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onQueryChange(e.target.value);  // 検索クエリを更新
  };

  return (
    <input
      type="text"
      placeholder="Search articles..."
      value={query}
      onChange={handleChange}  // 入力変更時にhandleChangeを呼び出し
    />
  );
}
