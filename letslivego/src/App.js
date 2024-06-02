import './App.css';
import { UIProvider } from "@yamada-ui/react"
import Demo from './maincomponent';
import Hoge from './box';


function App() {
  return (
    <div class="main">
    <UIProvider>
      <Demo />
      <Hoge />
    </UIProvider>
    <p>
      Hello World!
    </p>
    </div>
    
  );
}

export default App;
