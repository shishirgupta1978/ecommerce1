import React from 'react'
import {Banner,Feature,Front,ProductCart,SmallBanner,TextBanner} from '../../Components'

import { buy1Img as Img} from '../../assets'



export const Home = () => {
  const data=[{Name:"adidas", "Title":"Cartoon Astronaut T-Shirts","Price":"536","Img":`${Img}`},
  {Name:"adidas", "Title":"Cartoon Astronaut T-Shirts","Price":"536","Img":`${Img}`},
  {Name:"adidas", "Title":"Cartoon Astronaut T-Shirts","Price":"536","Img":`${Img}`},
  {Name:"adidas", "Title":"Cartoon Astronaut T-Shirts","Price":"536","Img":`${Img}`},
  {Name:"adidas", "Title":"Cartoon Astronaut T-Shirts","Price":"536","Img":`${Img}`},
  {Name:"adidas", "Title":"Cartoon Astronaut T-Shirts","Price":"536","Img":`${Img}`},
  {Name:"adidas", "Title":"Cartoon Astronaut T-Shirts","Price":"536","Img":`${Img}`},
  {Name:"adidas", "Title":"Cartoon Astronaut T-Shirts","Price":"536","Img":`${Img}`},
]
  return (
    <div>
      <Front/>
      <Feature/>
      <section className='section-p1 text-align-center'>
        <h2>Featured Products</h2>
          <p>Summer Collection New Morden Design</p>

        <div className='pro-container'>
          {data.map((product,i)=><ProductCart key={i} product={product}/>)}  
        </div>
      
    </section>
      <Banner/>
      <section className='section-p1 text-align-center'>
      <h2>New Arrivals</h2>
      <p>Summer Collection New Morden Design</p>
        <div className='pro-container'>
        {data.map((product,i)=><ProductCart key={i} product={product}/>)}  
        </div>
    </section>
      <SmallBanner/>
      <TextBanner/>

    </div>
  )
}

