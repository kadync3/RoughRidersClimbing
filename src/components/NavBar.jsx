import ScrollTracker from './ScrollTracker';
import 'aos/dist/aos.css'
import '../App.css';

function NavBar (){

  return (
    <div >
    <div className='navBar'>
      
    <img src='/images/logoClimber.png'></img>
    <a href='/'>
    <div className='navElement'>Home</div>
    </a>
      
    <a href='/memberships'>
    <div className='navElement' >Memberships</div>
    </a>
    <a href='/visit-us'>
    <div className='navElement'>Visit Us</div>
    </a>
    <a href='/programs'>
    <div className='navElement'>Programs</div>
    </a>
    <a href='/signIn'>

    <div className='navElement'>Sign In</div>
    </a>
  </div>
  <ScrollTracker />
  </div>
  )
};

export default NavBar;