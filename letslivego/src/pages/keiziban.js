import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../keiziban.css';
import Ainoten from '../components/Ainoten';
import '../style.css';

const Keizi = () => {
  const [newPostText, setNewPostText] = useState('');
  const [username, setUsername] = useState('');
  const [keizi, setKeizi] = useState([]);

  const addPost = () => {
    if (!newPostText.trim()) return;
    const author = username || "Anonymous";
    const newPost = {
      author: author,
      text: newPostText
    };
    setKeizi([...keizi, newPost]);
    setNewPostText('');
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
      })
      .catch((error) => {
        console.error("Error fetching keizi:", error);
      });
  },[]);

  const content = (
    <div style={{ fontFamily: 'Hachi Maru Pop, cursive' }} className="Ainotecontent">
          <h1>みんなの掲示板</h1>
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
              onChange={(e) => setNewPostText(e.target.value)}
              placeholder="新しい投稿を入力してください"
            ></textarea>
            <a href="#" className="btn btn-gradient" onClick={addPost}><span>PUSH!</span></a>
          </div>
          <ul className="post-list">
            {keizi.map((post, index) => (
              <li className="balloon-think" key={index}>
                <strong>{post.author}: </strong>{post.text}
              </li>
            ))}
          </ul>
        </div>
  );

  return (
    <div>
      <Ainoten content={content} />
    </div>
  );
};

export default Keizi;




