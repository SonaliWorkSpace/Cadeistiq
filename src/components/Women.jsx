import React, { useState, useEffect } from 'react';
import './Women.css';
import ring1 from './assets/women/girlring.png';
import bracelet from './assets/women/girlbracelet.png';
import belt from './assets/women/clucture.png';
import perfume from './assets/women/perfume.png';
import neck from './assets/women/pendant.png';
import jhumka from './assets/women/jhumka.png';
import ringn from './assets/women/Hamper.png';
import choco from './assets/women/bow.jpg';
import flower from './assets/women/combo.webp';
import shave from './assets/women/bokai.webp';
import gift from './assets/women/scrunchy2.jpg';



const slides = [
  {
    text: "Give her the best collection of Jhumkas",
    img: ringn
  },
  {
    text: "Gift her with cute hair accesories!",
    img: choco
  },
  {
    text: "Make her feel special by gifting her a lovely gift hamper",
    img: flower
  },
  {
    text: "Lift up the moment with a beautiful boquet!.",
    img: shave
  },
  {
    text: "Surprise her with best quality scunchies and clips!",
    img: gift
  }

];

const Women = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 1000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="women"  className='container'>
 {/* Right Side (Slideshow) */}
 <div className="right">
        <h2>Women's Section</h2>
        <p>{slides[currentSlide].text}</p>
        <img src={slides[currentSlide].img} alt='SlideImage' />
      </div>
    


      {/* Left Side (Boxes) */}
      <div className="left"> 
        <div className='boxcont'> 
        <div className="box">
    <img src={ring1} alt='ring'/>
    <span className="title">Rings</span>
    <span className="description">A stylish ring to enhance her look.</span>
</div>
     
<div className="box">
    <img src={bracelet} alt='bracelet'/>
    <span className="title">Bracelets</span>
    <span className="description">Elegant bracelets for every occasion.</span>
</div>

<div className="box">
    <img src={jhumka} alt='jhumka'/>
    <span className="title">jhumka & Earrings</span>
    <span className="description">Best jhumkas and earrings for women.</span>
</div>

<div className="box">
    <img src={belt} alt='belt'/>
    <span className="title">Hair accesories</span>
    <span className="description">Cute yet stylish hair accesories.</span>
</div>

<div className="box">
    <img src={neck} alt='neck'/>
    <span className="title">Chains & Pendants</span>
    <span className="description">A charming necklace for a classy look.</span>
</div>

<div className="box">
    <img src={perfume} alt='perfume'/>
    <span className="title">Aromas & Essences</span>
    <span className="description">Long-lasting fragrance for her.</span>
</div>
        </div>
      </div>
</div>
    
  );
};


export default Women;