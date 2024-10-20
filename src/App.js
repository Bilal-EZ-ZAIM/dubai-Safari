import React, { useState } from 'react';
import { toursList } from './data'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './combonts/Header';
import Footer from './combonts/Footer';
import { languages } from './data'
import { currencies } from './data'
import About from './combonts/about/About'
import Home from './combonts/Homee/Home';
import Login from './combonts/login/Login';
import Regester from './combonts/regester/Regester';
import Semor from './combonts/Semor';
import Count from './combonts/redux/Count';
function App() {
  
  



  return (
    <div className="App">
      
      <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home toursList={toursList}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/regester' element={<Regester/>}/>
        <Route path='/seemor/:id' element={<Semor toursList={toursList}/>}/>
        <Route path='/redux' element={<Count/>}/>
      </Routes>
      <Footer languages={languages} currencies={currencies} />
      </Router>
      




      
     



      {/* <h1>dubai s sassf   ari</h1>
      <h2><i className='fas fa-house-chimney'></i> ccc</h2>
      <h2><i className='fas fa-bars'></i> ccc</h2>
      <h2><i className='fas fa-bank'></i> ccc</h2>
      <h2><i className='fas fa-user-plus'></i> ccc</h2>
      <i class="fas fa-times" id="clos"></i>
      <i class="fas fa-" id="clos"></i>
      <i className='search'></i> */}
    </div>

  );
}

export default App;
