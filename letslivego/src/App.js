import './App.css';
import Header from './components/Header';
import Otoiawase from './pages/Otoiawase';
import Zyanru from './pages/Zyanru';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Toppage from './pages/TopPage';
import Ainote from './pages/Ainote';
import { UIProvider } from '@yamada-ui/react';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div>
      
    <UIProvider>
    
    <Router>
      <div className='App'>
       
      
      
      
        <div className="main-content">
        
        
        
        <Header />
        <Routes>
        <Route path="/TopPage" element={<Toppage />} />
        <Route path="/Zyanru" element={<Zyanru />} />
        <Route path="/Otoiawase" element={<Otoiawase />} />
        <Route path="/Ainote" element={<Ainote />} />
          
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
