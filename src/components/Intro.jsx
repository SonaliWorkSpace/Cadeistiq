import React from 'react'
import './Intro.css';
import Gimg from "../components/assets/GIFTS2.webp";



const Intro = () => {
  return (
    
   
    <div className='Cont'>
      <div className="left">
        <p> Hassel free & Personalized
            </p>
      <img src={Gimg} alt="Gift" />
      </div>
      <div className="right"> <div className='extl'> Welcome to <span className="logop"> Cadeistiq </span> Thoughtful Gifting Made Easy!</div>
      </div>
    
    </div>
  

  )
}

export default Intro
