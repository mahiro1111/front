import './App.css';
import Header from './components/Header';
import Otoiawase from './pages/Otoiawase';
import Zyanru from './pages/Zyanru';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Toppage from './pages/TopPage';
import Ainote from './pages/Ainote';
import { UIProvider } from '@yamada-ui/react';
import Sidebar from './components/sidebar';
import Keizi from './pages/keiziban';
import Live from './pages/Live';
import Fav from './pages/okiniiri';
import Rank from './pages/rankingu';

function App() {
  return (
    <div>
      
    <UIProvider>
    <Router>
      <div className='App'>
       
        <div className="main-content">
        
        <Header />
        <Routes>
        <Route path="/" element={<Toppage />} />
        <Route path="/Zyanru" element={<Zyanru />} />
        <Route path="/Otoiawase" element={<Otoiawase />} />
        <Route path="/Ainote" element={<Ainote />} /> 
        <Route path="/keiziban" element={<Keizi />} />
        <Route path="/rankingu" element={<Rank />} /> 
        <Route path="/okiniiri" element={<Fav />} /> 
        <Route path="/Live" element={<Live />} /> 
        </Routes>

        </div>
      </div>
    </Router>
    </UIProvider>
    <Sidebar/>
    </div>
  );
}

export default App;
