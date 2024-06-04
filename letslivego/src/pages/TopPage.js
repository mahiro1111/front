import { Button } from "@yamada-ui/react";
//import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';




const TopPage = () => {
  const location = useLocation();
  const shouldShowButton = location.pathname !== '/Ainote';
  return(
    <div>
    <ul className="Toppage">
    <li >
      {shouldShowButton && (
        <Button as="a" href="/Ainote" target="_blank">
          Call and Response!
        </Button>
        
      )}
    </li>
    </ul>
    </div>
)
}


export default TopPage;