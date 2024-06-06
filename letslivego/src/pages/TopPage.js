
import { Link } from 'react-router-dom'

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
    link:"/keiziban"
  
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
    link:"/rankingu"
  },
  {
    title: "ライブ会場情報",
    description: "Live Consert Information",
    image: "/kaizyou.jpg",
    link:"/Live"
    
    
  },
  {
    title: "あなたへのおすすめ",
    description: "Your favorite List",
    image: "/heart.jpg",
    link:"/okiniiri"
   
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