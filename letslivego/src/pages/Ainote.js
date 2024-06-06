import React from 'react';
//import { Button } from 'react-bootstrap';
import Ainoten from '../components/Ainoten';

const Ainotecontent = ({ content }) => {
  return (
    <div className="Ainotecontent">
      {content}
    </div>
  )
}

const Ainote = () => {
  const content = (
    <textarea placeholder="ここに歌詞が表示されます"></textarea>
  );

  return (
    <Ainoten content={content}/>
  )
}

export default Ainote;