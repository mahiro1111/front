import React, { useEffect, useState } from 'react';
import Ainoten from '../components/Ainoten';
import axios from 'axios';

const Ainote = () => {
  const [lyrics, setLyrics] = useState(null);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('song'); // 新しく追加

  useEffect(() => {
    if (searchTerm !== '') {
      const url = `http://localhost/songs/${searchType}_name/${searchTerm}`;
      axios
        .get(url) 
        .then(response => {
          const songData = response.data[0];
          if (songData && songData.lyrics) {
            setLyrics(songData.lyrics);
            setError(null);
          } else {
            setLyrics(null);
            setError('歌詞データが見つかりません');
          }
        })
        .catch(err => {
          console.error('通信に失敗しました', err);
          setError('通信に失敗しました');
        });
    }
  }, [searchTerm, searchType]);

  const handleSearch = (searchValue, type) => {
    setSearchTerm(searchValue);
    setSearchType(type);
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
