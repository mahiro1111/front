import './App.css';
import Header from './Header';
import Otoiawase from './Otoiawase';
import Zyanru from './Zyanru';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Toppage from './TopPage';
import Ainote from './Ainote';
import Demo from './maincomponent';
import { UIProvider } from '@yamada-ui/react';
import Sidebar from './sidebar';




function App() {
  return (
    <div>
    <UIProvider>
    <Router>
      <div className='App'>
      <Demo/>
        <Header />
        <div className="main-content">
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
