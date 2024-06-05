//import { Button } from "@yamada-ui/react";
//import {Link} from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { Calendar } from "@yamada-ui/calendar";

const cards = [
  {
    title: "あいの手練習",
    description: "Call and Response",
    image: "/LiveView.jpg",
    link:"/Ainote"
    

  },
  {
    title: "掲示板",
    description: "BBS",
    image: "/desk.jpg",
   
  },
  {
    title: "話題のトピック",
    description: "Hot Topic",
    image: "/fireworks.jpg",
    link: "/hot-topics"
    
  },
  {
    title: "ランキング",
    description: "Ranking",
    image: "/crown2.jpg",
   
  },
  {
    title: "ライブ会場情報",
    description: "Live Consert Information",
    image: "/kaizyou.jpg",
    
    
  },
  {
    title: "あなたへのおすすめ",
    description: "Your favorite List",
    image: "/heart.jpg",
   
  }
];

const TopPage = () => {
  



  return (
    <div className="container">

      {cards.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.image} alt={card.title} />
          <div style={{ fontFamily:'Hachi Maru Pop, cursive' }} className="card-content">
            <h3  className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
            <div className="card-footer">
            
            <Link to={card.link} className="card-button">View</Link>
              </div>
          </div>
        </div>
      ))}
      
      </div>
    
  );
}

export default TopPage;