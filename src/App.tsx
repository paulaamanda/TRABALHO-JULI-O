import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import { Menu } from './components/menu/Menu';
import { Contatos } from './pages/Contatos/Conatos';
import { Home } from './pages/Home/Home';
import { Sobre } from './pages/Sobre/Sobre';

function App() {
  return (
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path= '/' element={<Home/>}/>
      <Route path= '/sobre' element={<Sobre/>}/>
      <Route path= '/contatos' element={<Contatos/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
