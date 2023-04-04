import React from 'react';
import './Front.scss';
import { buttonImg,frontImg } from '../../assets';

export const Front = () => {
  return (
    <section id='front'  style={{backgroundImage:  `url(${frontImg})` }}>
      <h4>Trade-in-offer</h4>
      <h2>Super value deals</h2>
      <h1>On all products</h1>
      <p>Save more with coupons & up to 70% off!</p>
      <button style={{backgroundImage:  `url(${buttonImg})`   }}>Shop Now</button>
      
    </section>
  )
}

