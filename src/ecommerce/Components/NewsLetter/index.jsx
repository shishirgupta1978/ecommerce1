import React from 'react'
import './NewsLetter.scss'
import { newsletterImg } from '../../assets'


export const NewsLetter = () => {
  return (
    <section id="newsletter" className='section-p1 section-m1'  style={{backgroundImage:  `url(${newsletterImg})`}}>
        <div className='newstext'>
      <h4>Sign Up for Newsletters</h4>
      <p>Get E-mail updates about our latest shop and <span>special offers</span>.</p>
    </div>
    <div className='form'><input type="text" placeholder='Your email address'/><button className='normal'>Sign Up</button></div>
    </section>
  )
}

