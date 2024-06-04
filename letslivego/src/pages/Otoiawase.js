import React from 'react';
//import { Button } from 'react-bootstrap';
import { Button } from "@yamada-ui/react";
import '../App.css';

const Otoiawase = () => {
  return (
    <div className="contact-form">
      <h3 className="section-title">お問い合わせ</h3>
      
      <p>メールアドレス（必須）</p>
      <input className = "mail-contact" type="email" required />
      <p>お問い合わせ内容（必須）</p>
      <textarea className ="naiyou-contact" required></textarea>
      <p>※必須項目は必ずご入力ください</p>
      
      <Button className="contact-submit" type="submit">送信</Button>
    </div>
  )
}

export default Otoiawase;