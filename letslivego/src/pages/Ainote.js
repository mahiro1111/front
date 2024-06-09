import React, { useEffect, useState } from 'react';
import Ainoten from '../components/Ainoten';
import axios from 'axios';

const Ainote = () => {
  const [lyrics, setLyrics] = useState(null); // 初期値を null に設定
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm !== '') { // 検索語が空でない場合のみ実行
      const url = `http://localhost/songs/song_name/${searchTerm}`;
      axios
        .get(url) 
        .then(response => {
          const songData = response.data[0];
          if (songData && songData.lyrics) {
            setLyrics(songData.lyrics);
          } else {
            setError('歌詞データが見つかりません');
          }
        })
        .catch(err => {
          console.error('通信に失敗しました', err);
          setError('通信に失敗しました');
        });
    }
  }, [searchTerm]);

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
  };

  const content = (
    <textarea value={lyrics || ''} readOnly placeholder="ここに歌詞が表示されます"></textarea>
  );

  return (
    <div>
      {error ? <p>{error}</p> : <Ainoten content={content} onSearch={handleSearch} />}
    </div>
  );
}

export default Ainote;

