import React from 'react';
//import { Button } from 'react-bootstrap';

const Ainote = () => {
  return (
    <div className="Ainotecontainer">
      <div className="Ainotesidebar">
        <h2 style={{ fontFamily:'Hachi Maru Pop, cursive' }}>ジャンル</h2>
        <div className="Ainotesearch">
          <label htmlFor="Ainotesearch" style={{ fontFamily:'Hachi Maru Pop, cursive' }}>楽曲検索</label>
          <input style={{ fontFamily:'Hachi Maru Pop, cursive' }} type="text" id="search" placeholder="検索" />
        </div>
        <div className="Ainotelist">
          <h3 style={{ fontFamily:'Hachi Maru Pop, cursive' }}>楽曲一覧</h3>
          <ul>
            <li>---</li>
            <li>---</li>
            <li>---</li>
            <li>---</li>
            <li>---</li>
          </ul>
        </div>
      </div>
      <div className="Ainotecontent">
        <p>歌詞表示される</p>
      </div>
    </div>
  )
}

export default Ainote;