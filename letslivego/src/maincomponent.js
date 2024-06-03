import { Button } from "@yamada-ui/react";
//import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';




const Demo = () => {
  const location = useLocation();
  const shouldShowButton = location.pathname !== '/Ainote';
  return(
    <header>
    <li className="Demo">
      {shouldShowButton && (
        <Button as="a" href="/Ainote" target="_blank">
          Call and Response!
        </Button>
      )}
    </li>
  </header>
)
}


export default Demo;