import { useState } from 'react';  // useStateフックをインポート

// Contactページコンポーネントを定義
export default function Contact() {
  const [name, setName] = useState('');  // 名前入力フィールドの状態を管理
  const [email, setEmail] = useState('');  // メールアドレス入力フィールドの状態を管理
  const [message, setMessage] = useState('');  // メッセージ入力フィールドの状態を管理
  const [submitted, setSubmitted] = useState(false);  // フォーム送信状態を管理

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();  // フォームのデフォルトの送信動作を防ぐ
    // ここでフォームデータを送信するロジックを追加
    setSubmitted(true);  // フォームが送信されたことを示す
  };

  return (
    <div>
      <h1>Contact Us</h1>  {/* ページタイトル */}
      {submitted ? (  // submittedがtrueの場合
        <p>Thank you for your message!</p>  /* メッセージ送信後の表示 */
      ) : (  // submittedがfalseの場合
        <form onSubmit={handleSubmit}>  {/* フォームの送信処理 */}
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />  {/* 名前入力フィールド */}
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />  {/* メールアドレス入力フィールド */}
          </label>
          <br />
          <label>
            Message:
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} />  {/* メッセージ入力フィールド */}
          </label>
          <br />
          <button type="submit">Send</button>  {/* 送信ボタン */}
        </form>
      )}  {/* 条件式の閉じ括弧 */}
    </div>
  );
}
