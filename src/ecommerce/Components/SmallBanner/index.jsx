import React from 'react'
import './SmallBanner.scss'

export const SmallBanner = () => {
  return (
    <section id="sm-banner" className='section-p1'>
        <div className='banner-box'>
            <h4>creazy deals</h4>
            <h2>buy 1 get 1 free</h2>
            <span>The best classic dress is on sale at this</span>
            <button className='white'>Learn More</button>
        </div>
        <div className='banner-box banner-box2'>
            <h4>sprint/summer</h4>
            <h2>upcoming season</h2>
            <span>The best classic dress is on sale at this</span>
            <button className='white'>Collection</button>
        </div>
      
    </section>
  )
}

