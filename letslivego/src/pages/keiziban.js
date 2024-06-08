import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../keiziban.css';
import Ainoten from '../components/Ainoten';
import '../style.css';

const Keizi = () => {
  const [newPostText, setNewPostText] = useState('');
  const [username, setUsername] = useState('');
  const [keizi, setKeizi] = useState([]);
  const bottomRef = useRef(null); // 一番下の要素の参照を作成

  const addPost = () => {
    if (!newPostText.trim()) return;
    const author = username || "Anonymous";
    const newPost = {
      author: author,
      text: newPostText,
      isNew: true
    };
    setKeizi([...keizi, newPost]);
    setNewPostText('');
    scrollToBottom(); // PUSHボタンを押した後に一番下までスクロール
  };

  useEffect(() => {
    axios
      .get("http://localhost/boards/index/1")
      .then((response) => {
        setKeizi(response.data.map(item => ({
          id: item.id,
          author: item.username,
          text: item.post
        })));
        console.log("Keizi fetched:", response.data);
        scrollToBottom(); // コンポーネントがマウントされた後に一番下までスクロール
      })
      .catch((error) => {
        console.error("Error fetching keizi:", error);
      });
  },[]);

  useEffect(() => {
    scrollToBottom(); // keiziが変更された後に一番下までスクロール
  }, [keizi]);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' }); // 一番下までスクロール
  };

  const handleInputChange = (e) => {
    setNewPostText(e.target.value);
  };

  const content = (
    <div style={{ fontFamily: 'Hachi Maru Pop, cursive' }} className="Ainotecontent">
      <h1>みんなの掲示板</h1>
      <ul className="post-list" style={{ overflowY: 'auto', maxHeight: '400px' }}>
        {keizi.map((post, index) => (
          <li className={`balloon-think ${post.isNew ? 'right' : ''}`} key={index}>
            <strong>{post.author}: </strong>{post.text}
          </li>
        ))}
        <div ref={bottomRef}></div> {/* 一番下の要素 */}
      </ul>
      <div className="input-container">
        <textarea
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="ユーザー名を入力してください"
        ></textarea>
      </div>
      <div className="textarea-container">
        <textarea
          value={newPostText}
          onChange={handleInputChange}
          placeholder="新しい投稿を入力してください"
        ></textarea>
        <a href="#" className="btn btn-gradient" onClick={addPost}><span>PUSH!</span></a>
      </div>
    </div>
  );

  useEffect(() => {
    scrollToBottom(); // ページが読み込まれた後に一番下までスクロール
  }, []); // この useEffect は最初の1回だけ実行される

  return (
    <div>
      <Ainoten content={content} />
    </div>
  );
};

export default Keizi;




