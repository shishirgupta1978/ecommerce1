import React from 'react'

export const PageHeader = (props) => {
  return (
    <section id="page-header" style={{backgroundImage:  `url(${props?.image})`   }}>
            <h2>{props?.heading}</h2>
            <p>{props?.text}</p>
      
    </section>
  )
}


