import './App.css';
import {Route, Routes, useLocation} from 'react-router-dom'
import Landing from './components/Landing/Landing.jsx';
import Home from './components/Home/Home.jsx';
import characters from './data.js'
import NavBar from './NavBar/NavBar';

function App() {
  const {pathname} = useLocation()
  return (    
    <div className="App">
      {pathname !== "/" && <NavBar />}
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/home' element={<Home characters={characters}/>}/>
      </Routes>
    </div>
  );
}

export default App;