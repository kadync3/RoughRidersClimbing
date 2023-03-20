import { useState, useRef, useEffect } from 'react';
import AOS from 'aos'
import '/images/ClimbingPhoto1.jpg'
import '/images/climberDoodle.png'
import ScrollTracker from './ScrollTracker';

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
      {/* <div ref={climber} className='rappelBox' data-aos='slide-right'  ></div> */}
      
    <div className='initialLoad'  >

    <div className='navBar'>
      <img src='https://fvmstatic.s3.amazonaws.com/maps/m/ICON-NPS-00-0006.png'></img>
      <div className='navElement'>Home</div>
      <div className='navElement'>Memberships</div>
      <div className='navElement'>Visit Us</div>
      <div className='navElement'>Programs</div>
      <div className='navElement'>Sign In</div>
    </div>
    <ScrollTracker/>
    <div className='container'>

     <div className='boxOne'></div>
     <div className='boxOne'></div>
     <div className='boxOne'></div>
    </div>

    </div>
    <div className='rappelContainer'>
    <img ref={climber} src='' className='rappelBox' data-aos='slide-right'
      ></img>

   <div className='boxTwo' style={{  marginLeft: '5%', marginTop: '5%'}}> Bouldering</div>
   <div className='boxTwo' style={{ alignSelf:'flex-end', marginRight: '40%', marginTop: '5%'}} >Rope Climbing</div>
   <div className='boxTwo' style={{  marginLeft: '5%',  marginTop: '3%'}}>Slacklineing</div>
   <div className='boxTwo' style={{ alignSelf:'flex-end', marginRight: '45%', marginTop: '8%'}}>Parkour</div>
   <div className='boxTwo' style={{  marginLeft: '5%', marginTop: '6%'}}>Cheer</div>
    </div>
    </div>
  );
};

export default App
