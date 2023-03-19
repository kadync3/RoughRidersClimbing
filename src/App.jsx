import { useState } from 'react'

import './App.css'

function App() {
  

  return (
    <div className="app">
      <div className='rappelBox'></div>
    <div className='initialLoad'>

    <div className='navBar'>
      <img src="https://fvmstatic.s3.amazonaws.com/maps/m/ICON-NPS-00-0006.png"></img>
      <div className='navElement'>Home</div>
      <div className='navElement'>Memberships</div>
      <div className='navElement'>Visit Us</div>
      <div className='navElement'>Programs</div>
      <div className='navElement'>Sign In</div>
    </div>

    <div className='container'>

     <div className='boxOne'></div>
     <div className='boxOne'></div>
     <div className='boxOne'></div>
    </div>

    </div>
    <div className='rappelContainer'>
   <div className='boxTwo' style={{  marginLeft: '5%', marginTop: '5%'}}> Bouldering</div>
   <div className='boxTwo' style={{ alignSelf:'flex-end', marginRight: '40%', marginTop: '5%'}} >Rope Climbing</div>
   <div className='boxTwo' style={{  marginLeft: '5%',  marginTop: '3%'}}>Slacklineing</div>
   <div className='boxTwo' style={{ alignSelf:'flex-end', marginRight: '45%', marginTop: '8%'}}>Parkour</div>
   <div className='boxTwo' style={{  marginLeft: '5%', marginTop: '6%'}}>Cheer</div>
    </div>
    </div>
  )
}

export default App
