import React, { useState } from 'react';

const Ainoten = ({ content, onSearch })  => {
  const [searchValue, setSearchValue] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchClick = () => {
    // 検索ボタンがクリックされた時に、検索キーワードを親コンポーネントに渡す
    onSearch(searchValue);
    // 検索履歴に追加
    setSearchHistory(prevHistory => [...prevHistory, searchValue]);
    // 検索ボックスをクリア
    setSearchValue('');
  };

  return (
    <div className="Ainotecontainer">
      <div className="Ainotesidebar">
        <h2 style={{ fontFamily:'Hachi Maru Pop, cursive' }}>ジャンル</h2>
        <div className="Ainotesearch">
          <label htmlFor="Ainotesearch" style={{ fontFamily:'Hachi Maru Pop, cursive' }}>楽曲検索</label>
          <input 
            style={{ fontFamily:'Hachi Maru Pop, cursive' }} 
            type="text" 
            id="search" 
            placeholder="検索" 
            value={searchValue} 
            onChange={handleSearchChange} 
          />
          <button onClick={handleSearchClick}>検索</button> {/* 検索ボタン */}
        </div>
        <div className="Ainotelist">
          <h3 style={{ fontFamily:'Hachi Maru Pop, cursive' }}>検索履歴</h3>
          <ul>
            {searchHistory.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="Ainotecontent">
          {content}
      </div>
    </div>
  )
}

export default Ainoten;


