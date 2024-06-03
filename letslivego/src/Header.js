import React from 'react';
import {Link} from 'react-router-dom';
import Zyanru from './Zyanru';


const Header = () => {
  return (
    <header>
      <div className="logo2">
        <img src="/logo.png" alt="logo" style={{ width: '80px', height: '80px' }} /> 
      </div>
      <nav>
        <ul>
          <li>
          <Link to="/">TopPage</Link>
          </li>
          <li>
            <Link to="/Zyanru"><Zyanru/></Link>
          </li>
          <li>
          <Link to="/Otoiawase">Contact form</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;