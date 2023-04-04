import React from 'react'

export const PageHeader = (props) => {
  return (
    <section id="page-header" style={{backgroundImage:  `url(${props?.image})`   }}>
            <h2>{props?.heading}Super value deals</h2>
            <p>{props?.text}Save more with coupons & up to 70% off!</p>
      
    </section>
  )
}


