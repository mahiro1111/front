import React, { useEffect, useState } from 'react';
import Ainoten from '../components/Ainoten';
import axios from 'axios';

const Ainote = () => {
  const [lyrics, setLyrics] = useState(''); // 歌詞を保存するstateを用意
  const [error, setError] = useState(null); // エラーを保存するstateを用意

  useEffect(() => {
    axios
      .get('http://localhost/songs/song_name/aaa') 
      .then(response => {
        // データが配列で返ってくることを想定し、その中の最初の要素を取得
        const songData = response.data[0];
        if (songData && songData.lyrics) {
          setLyrics(songData.lyrics); // 歌詞データを保存
        } else {
          setError('歌詞データが見つかりません');
        }
      })
      .catch(err => {
        console.error('通信に失敗しました', err);
        setError('通信に失敗しました');
      });
  }, []);

  const content = (
    <textarea value={lyrics} readOnly placeholder="ここに歌詞が表示されます"></textarea>
  );

  return (
    <div>
      {error ? <p>{error}</p> : <Ainoten content={content} />}
    </div>
  );
}

export default Ainote;
