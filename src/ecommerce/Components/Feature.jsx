import React from 'react'
import img1 from '../assets/hero2.jpg'

const Feature = () => {
  return (
    <section id="feature" className='section-p1'>
      <div className='fe-box'>
        <img src={img1}/>
        <h6>Free Shipping</h6>
      </div>
      <div className='fe-box'>
        <img src={img1}/>
        <h6>Online Order</h6>
      </div>
      <div className='fe-box'>
        <img src={img1}/>
        <h6>Save Money</h6>
      </div>
      <div className='fe-box'>
        <img src={img1}/>
        <h6>Promotions</h6>
      </div>
      <div className='fe-box'>
        <img src={img1}/>
        <h6>Happy Sale</h6>
      </div>
      <div className='fe-box'>
        <img src={img1}/>
        <h6>24/7 Support</h6>
      </div>
    </section>
  )
}

export default Feature;