import { useState, useRef, useEffect } from 'react';
import AOS from 'aos'


import ScrollTracker from './components/ScrollTracker';
import RappelDude from './components/RappelDude';

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
 
      
    <div className='initialLoad' style={{backgroundImage: "/images/climbingPhoto1.jpg"}} >
    <img src="/images/climbingPhoto1.jpg" style={{backgroundPosition: '-190px -190px'}}/>
    <div className='navBar'>
      <img src='/images/logoClimber.png'></img>
      <div className='navElement'>Home</div>
      <div className='navElement'>Memberships</div>
      <div className='navElement'>Visit Us</div>
      <div className='navElement'>Programs</div>
      <div className='navElement'>Sign In</div>
    </div>
    <ScrollTracker />
    <div className='container'>

     <div className='boxOne'><img src=''></img> About Us</div>
     <div className='boxOne'><img src=''></img> MemberShips</div>
     <div className='boxOne'><img src=''></img> Classes</div>
    </div>

    </div>
    <div className='rappelContainer' >
 
    <RappelDude ref={climber}/>
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
