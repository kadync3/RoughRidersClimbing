import { useState, useRef, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from 'aos'



import Memberships from './components/Memberships';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage'; 
import VisitUs from './components/VisitUs';
import Programs from './Programs';
import SignIn from './components/SignIn';

import 'aos/dist/aos.css'
import './App.css';


function App() {


  const climber = useRef();  
  const scrollTracker = useRef()


useEffect(()=> {
  console.log(climber)
  console.log(scrollTracker)
  AOS.init()
}, [])
  return (
    <div className='app'>
      <BrowserRouter>
          <NavBar/>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route exact path='/memberships' element={<Memberships/>}/>
          <Route exact path='/visit-us' element={<VisitUs/>} />          
          <Route exact path='/programs' element={<Programs/>} />          
          <Route exact path='/signIn' element={<SignIn/>} />          
 

    
      
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App
