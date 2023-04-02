import React from 'react'
import { savemoneyImg,onlineorderImg,pic24_7Img,promotionsImg,freeshippingImg,happysaleImg } from '../../assets'

export const Feature = () => {
  return (
    <section id="feature" className='section-p1'>
      <div className='fe-box'>
        <img src={freeshippingImg}/>
        <h6>Free Shipping</h6>
      </div>
      <div className='fe-box'>
        <img src={onlineorderImg}/>
        <h6>Online Order</h6>
      </div>
      <div className='fe-box'>
        <img src={savemoneyImg}/>
        <h6>Save Money</h6>
      </div>
      <div className='fe-box'>
        <img src={promotionsImg}/>
        <h6>Promotions</h6>
      </div>
      <div className='fe-box'>
        <img src={happysaleImg}/>
        <h6>Happy Sale</h6>
      </div>
      <div className='fe-box'>
        <img src={pic24_7Img}/>
        <h6>24/7 Support</h6>
      </div>
    </section>
  )
}

