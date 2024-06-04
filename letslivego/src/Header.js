import React from 'react';
import {Link} from 'react-router-dom';
//import Zyanru from './Zyanru';
import './style.css'


const Header = () => {
  return (
    <header>
      <div className="logo2">
        <img src="/logo.png" alt="logo" style={{ width: '80px', height: '80px' }} /> 
      </div>
      <nav>
        <ul>
          <li style={{ fontFamily:'Hachi Maru Pop, cursive' }}>
          <Link to="/">ホーム</Link>
          </li>
          <li style={{ fontFamily:'Hachi Maru Pop, cursive' }}>
            <Link to="/Zyanru">ジャンル</Link>
          </li>
          <li style={{ fontFamily:'Hachi Maru Pop, cursive' }}>
          <Link to="/Otoiawase">お問い合わせ</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;