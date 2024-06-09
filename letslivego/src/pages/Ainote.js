import React, { useEffect, useState } from 'react';
import Ainoten from '../components/Ainoten';
import axios from 'axios';

const Ainote = () => {
  const [lyrics, setLyrics] = useState(null);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('song'); // 初期値を 'song' に設定

  useEffect(() => {
    if (searchTerm !== '') {
      let url = '';
      if (searchType === 'song') {
        url = `http://localhost/songs/song_name/${searchTerm}`;
      } else if (searchType === 'artist') {
        url = `http://localhost/songs/artist_name/${searchTerm}`;
      } else if (searchType === 'lyrics') {
        url = `http://localhost/songs/lyrics_search/${searchTerm}`;
      }

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
