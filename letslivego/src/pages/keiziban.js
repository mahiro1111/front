import React, { useState } from 'react';

const Keizi = () => {
  // 投稿の状態を管理するためのuseStateフック
  const [posts, setPosts] = useState([]);
  // 新しい投稿のテキストを管理するためのuseStateフック
  const [newPostText, setNewPostText] = useState('');

  // 新しい投稿を追加する関数
  const addPost = () => {
    // 空の投稿は追加しない
    if (!newPostText.trim()) return;
    // 現在の投稿リストに新しい投稿を追加する
    setPosts([...posts, newPostText]);
    // 新しい投稿のテキストをクリアする
    setNewPostText('');
  };

  return (
    <div>
      <h1>簡易掲示板</h1>
      {/* 投稿フォーム */}
      <div>
        <textarea
          value={newPostText}
          onChange={(e) => setNewPostText(e.target.value)}
          placeholder="新しい投稿を入力してください"
        ></textarea>
        <button onClick={addPost}>投稿する</button>
      </div>
      {/* 投稿リスト */}
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post}</li>
        ))}
      </ul>
    </div>
  );
};

export default Keizi;
