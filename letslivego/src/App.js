import './App.css';
//import { UIProvider } from "@yamada-ui/react"
import Header from './Header';
import Otoiawase from './Otoiawase';
import Zyanru from './Zyanru';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Toppage from './TopPage';
//import Demo from './maincomponent';
//import Hedderbox from './hedder';




function App() {
  return (
    <Router>
      <div className='App'>
        <Header />

        <Routes>
        <Route path="/TopPage" element={<Toppage />} />
          <Route path="/Zyanru" element={<Zyanru />} />
          <Route path="/Otoiawase" element={<Otoiawase />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
