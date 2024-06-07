import React, { useState } from 'react';
import '../keiziban.css';
import Ainoten from '../components/Ainoten';

const Keizi = () => {
  // 投稿の状態を管理するためのuseStateフック
  const [posts, setPosts] = useState([]);
  // 新しい投稿のテキストを管理するためのuseStateフック
  const [newPostText, setNewPostText] = useState('');
  // ユーザー名を管理するためのuseStateフック
  const [username, setUsername] = useState('');

  // 新しい投稿を追加する関数
  const addPost = () => {
    // 空の投稿は追加しない
    if (!newPostText.trim()) return;
    // ユーザー名が空の場合、デフォルトの"Anonymous"を使用する
    const author = username || "Anonymous";
    // 新しい投稿を作成し、現在の投稿リストに追加する
    const newPost = {
      author: author,
      text: newPostText
    };
    setPosts([...posts, newPost]);
    // 新しい投稿のテキストをクリアする
    setNewPostText('');
  };

  const content =(
    <div className="Ainotecontent">
      <h1>みんなの掲示板</h1>
      {/* ユーザー名入力フォーム */}
      <div className="input-container">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="ユーザー名を入力してください"
        />
      </div>
      {/* 投稿フォーム */}
      <div className="textarea-container">
        <textarea
          value={newPostText}
          onChange={(e) => setNewPostText(e.target.value)}
          placeholder="新しい投稿を入力してください"
        ></textarea>
        <a href="#" class="btn btn-gradient" onClick={addPost}><span>PUSH!</span></a>
      </div>
      {/* 投稿リスト */}
      <ul className="post-list">
        {posts.map((post, index) => (
          <li className="balloon-think" key={index}>
          <strong>{post.author}: </strong>{post.text}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div>
      <Ainoten content={content}/>
    </div>
  );
};

export default Keizi;


