import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Mainpage from '../Pages/Mainpage';
import Skill from '../Pages/Skill';

export default function RoutingPage(){
  
      return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Mainpage />} />
            <Route path='/skill' element={<Skill/>} />
            <Route path='/about' element={<Mainpage />} />
        </Routes>
        </BrowserRouter>
     
      )
  }