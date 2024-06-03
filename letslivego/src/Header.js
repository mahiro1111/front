import React from 'react';
import {Link} from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <div className="logo2">
        <img src="/logo.png" alt="logo" style={{ width: '80px', height: '80px' }} /> 
      </div>
      <nav>
        <ul>
          <li>
          <Link to="/">トップ</Link>
          </li>
          <li>
            <Link to="/Zyanru">ジャンル</Link>
          </li>
          <li>
          <Link to="/Otoiawase">お問い合わせ</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;