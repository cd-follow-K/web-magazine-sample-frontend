// エラーメッセージコンポーネントのプロパティ型を定義
interface ErrorMessageProps {
  message: string;  // エラーメッセージ
}

// エラーメッセージコンポーネントを定義
export default function ErrorMessage({ message }: ErrorMessageProps) {
  return <p>Error: {message}</p>;  // エラーメッセージを表示
}
