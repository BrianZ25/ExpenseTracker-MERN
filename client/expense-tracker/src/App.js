import React from 'react';
import AppNavbar from './components/AppNavbar';
import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Router>
        <AppNavbar/> 
        <Routes>
          <Route path ='/' element={<Home/>}/>
          <Route path ='/Calculator' element ={<Calculator/>}/>
          <Route path ='/About' element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;