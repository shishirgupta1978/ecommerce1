import React from 'react'
import './Banner.scss'
import { bannerImg } from '../../assets'

export const Banner = () => {
  return (
    <section id="banner" className='section-m1' style={{backgroundImage:  `url(${bannerImg})`   }}>
      <h4>Repair Services</h4>
      <h2>Up to <span>70% Off</span> - All t-Shirt & Accessories</h2>
      <button className='normal'>Explore More</button>
    </section>
  )
}

