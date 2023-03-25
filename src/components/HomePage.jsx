import ScrollTracker from './ScrollTracker';
import NavBar from './NavBar';
import WhatsOffered from './WhatsOffered';
import RappelDude from './RappelDude';
import 'aos/dist/aos.css'
import '../App.css';

function  HomePage () {

  return(
    <div>
    <div className='initialLoad' style={{backgroundImage: "/images/climbingPhoto1.jpg"}} >
    <img src="/images/climbingPhoto1.jpg" style={{backgroundPosition: '-190px -190px'}}/>
    
    {/* <div className='navBar'>
      <img src='/images/logoClimber.png'></img>
      <div className='navElement'>Home</div>
      <div className='navElement'>Memberships</div>
      <div className='navElement'>Visit Us</div>
      <div className='navElement'>Programs</div>
      <div className='navElement'>Sign In</div>
    </div>
    <ScrollTracker /> */}
  
    <div className='container'>

     <div className='boxOne navElement'> <img src='https://static.thenounproject.com/png/4536695-200.png' style={{width: '120px', }}></img>  <div>About Us</div> </div>
    
     <div className='boxOne navElement'> <img src='https://static.thenounproject.com/png/647068-200.png' style={{width: '120px', }}></img> <div >Memberships</div>  </div>
   
     <div className='boxOne navElement'> <img src='https://static.thenounproject.com/png/1094390-200.png' style={{width: '120px', }}></img> <div>Classes</div></div>
    </div>

    </div>
        <div className='rappelContainer' >
        <RappelDude/>
         <WhatsOffered/>
    
    
       </div>
       </div>
  );
  
};

export default HomePage;