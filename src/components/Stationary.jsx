import React, { useState, useEffect } from 'react';
import './Stationary.css';
import pens from './assets/Stationary/pen2.jpg';
import diary from './assets/Stationary/diary2.webp';
import colours from './assets/Stationary/color3.webp';
import geometry from './assets/Stationary/geometry.jpg';
import stickers from './assets/Stationary/sticker.avif';
import boxes from './assets/Stationary/pencil case.webp';

import combo from './assets/Stationary/combo.jpeg';
import cases from './assets/Stationary/cases.webp';
import pencilstand from './assets/Stationary/stand.jpg';
import kawai from './assets/Stationary/kawai.webp';
import office from './assets/Stationary/office supplies.jpg';



const slides = [
  {
    text: "Combined stationary supplies",
    img: combo
  },
  {
    text: "Takeaway the best pencil cases!",
    img: cases
  },
  {
    text: "Most stylish pen stands and desk essntials",
    img: pencilstand
  
  },
  {
    text: "Aesthetic kawai stationaries.",
    img: kawai
  },
  {
    text: "All essential office supplies available!",
    img: office
  }

];

const Stationary = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 1000); // Change slide every 1 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="stationary"  className='container'>
     
 {/* Right Side (Slideshow) */}
 <div className="right">
        <h2>Stationary Section</h2>
        <p>{slides[currentSlide].text}</p>
        <img src={slides[currentSlide].img} alt='SlideImage' />
      </div>
    


      {/* Left Side (Boxes) */}
      <div className="left"> 
        <div className='boxcont'> 
        <div className="box">
    <img src={pens} alt='ring'/>
    <span className="title">Pens and Pencils</span>
    <span className="description">Smooth, high-quality pens and pencils for writing and creativity</span>
</div>
     
<div className="box">
    <img src={diary} alt='diary'/>
    <span className="title">Diaries & Planners </span>
    <span className="description">Stay organized with stylish diaries and planners</span>
</div>

<div className="box">
    <img src={boxes} alt='boxes'/>
    <span className="title">Pencil Cases</span>
    <span className="description">Trendy and spacious cases to keep your stationery neat.</span>
</div>

<div className="box">
    <img src={colours} alt='colours'/>
    <span className="title">Colours & Paints</span>
    <span className="description">Vibrant colors and paints for artists and hobbyists</span>
</div>

<div className="box">
    <img src={stickers} alt='stickers'/>
    <span className="title">Cute stickers</span>
    <span className="description">Adorable stickers to decorate journals and scrapbooks.</span>
</div>

<div className="box">
    <img src={geometry} alt='geometry'/>
    <span className="title">Tools and Desk essentials </span>
    <span className="description">Must-have supplies for school, office, and workspaces.</span>
</div>
        </div>
      </div>
</div>
    
  );
};

export default Stationary;
