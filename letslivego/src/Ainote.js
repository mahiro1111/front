import React from 'react';
//import { Button } from 'react-bootstrap';

const Ainote = () => {
  return (
    <div className="Ainotecontainer">
      <div className="Ainotesidebar">
        <h2>Genre</h2>
        <div className="Ainotesearch">
          <label htmlFor="Ainotesearch">Music Search</label>
          <input type="text" id="search" placeholder="Search" />
        </div>
        <div className="Ainotelist">
          <h3>Music List</h3>
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