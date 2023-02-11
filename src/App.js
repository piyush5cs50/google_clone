
import './App.css';
import Home from "./Home"
import {Routes, Route} from 'react-router-dom';
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="app">
    
     <Routes>
            <Route path="/" element={<Home />}/>
            <Route path='/search' element={<SearchPage/>}/>
    </Routes>
    
    </div>

  );
}

export default App;
