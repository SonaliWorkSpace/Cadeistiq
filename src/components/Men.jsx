import React, { useState, useEffect } from 'react';
import './Men.css';
import ring1 from './assets/men/rings2.jpg';
import bracelet from './assets/men/bracelet.png';
import belt from './assets/men/belt.png';
import perfume from './assets/men/perfume.png';
import neck from './assets/men/necklace.png';
import wallet from './assets/men/wallet.png';
import ringn from './assets/men/slide ring.jpg';
import choco from './assets/men/choco3.jpg';
import flower from './assets/men/flower3.jpg';
import shave from './assets/men/shave.png';
import gift from './assets/men/gift2.jpg'

const slides = [
  {
    text: "Discover stylish accessories to elevate your look.",
    img: ringn
  },
  {
    text: "Make the moment more chocolaty and delecious!",
    img: choco
  },
  {
    text: "Make him feel special by gifting hime a lovely bouquet",
    img: flower
  },
  {
    text: "Upgrade his grooming routine with a premium shaving kit.",
    img: shave
  },
  {
    text: "Surprise him with the perfect gift!",
    img: gift
  }
];

const Men = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 1000); // Change slide every 1 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='container'>
 {/* Right Side (Slideshow) */}
 <div  id="men"  className="right">
        <h2>Men's Section</h2>
        <p>{slides[currentSlide].text}</p>
        <img src={slides[currentSlide].img} alt='SlideImage' />
      </div>
    


      {/* Left Side (Boxes) */}
      <div className="left"> 
        <div className='boxcont'> 
        <div className="box">
    <img src={ring1} alt='ring'/>
    <span className="title">Rings</span>
    <span className="description">A stylish ring to enhance your look.</span>
</div>
     
<div className="box">
    <span className="title">Bracelets</span>
    
    <img src={bracelet} alt='bracelet'/>
    <span className="description">Elegant bracelets for every occasion.</span>
</div>

<div className="box">
    <img src={wallet} alt='wallet'/>
    <span className="title">Wallet & Cardholder</span>
    <span className="description">Premium leather wallets for men.</span>
</div>

<div className="box">
    <img src={belt} alt='belt'/>
    <span className="title">Wardrobe Enhancers</span>
    <span className="description">Durable and stylish belts.</span>
</div>

<div className="box">
    <img src={neck} alt='neck'/>
    <span className="title">Chains & Pendants</span>
    <span className="description">A charming necklace for a classy look.</span>
</div>

<div className="box">
    <img src={perfume} alt='perfume'/>
    <span className="title">Aromas & Essences</span>
    <span className="description">Long-lasting fragrance for him.</span>
</div>
        </div>
      </div>
</div>
    
  );
};

export default Men;