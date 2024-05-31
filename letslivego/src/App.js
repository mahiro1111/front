import logo from './logo.svg';
import './App.css';
import { UIProvider } from "@yamada-ui/react"
import Demo from './maincomponent';


function App() {
  return (
    <UIProvider>
      <Demo />
    </UIProvider>
  );
}

export default App;
