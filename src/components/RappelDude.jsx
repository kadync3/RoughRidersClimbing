import { useEffect, useState } from 'react';
import '../App.css';


function RappelDude (){
  const [spriteFrame, setSpriteFrame]= useState("/images/climberSprite.png")


  function SpriteAnimation (){

  };
  return (
    <div className='spriteContainer'>
       
    <img className='sprite' src={spriteFrame} />
          
         </div>
  );
};

export default RappelDude;