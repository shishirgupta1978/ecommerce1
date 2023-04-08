import React from 'react'
import { NavLink } from 'react-router-dom'
import {PageHeader,ProductCart} from '../../Components'
import { FaLongArrowAltRight } from 'react-icons/fa'
import {shopImg, buy1Img as Img} from "../../assets"

export const Shop = () => {

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

      <PageHeader heading="Shop with Us" text="Get top discount up to 70%" image={shopImg}/>
      <section className='section-p1 text-align-center'>
        <div className='pro-container'>
          {data.map((product,i)=><ProductCart key={i} product={product}/>)}  
        </div>
      
    </section>
      

      
      <section id="pagination" className='section-p1'>
        <NavLink>1</NavLink>
        <NavLink>2</NavLink>
        <NavLink> <span><FaLongArrowAltRight/></span></NavLink>

      </section>

    </div>
  )
}

