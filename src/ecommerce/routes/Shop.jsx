import React from 'react'
import { NavLink } from 'react-router-dom'
import Banner from '../Components/Banner'
import Feature from '../Components/Feature'
import HeroImage2 from '../Components/HeroImage2'
import NewsLetter from '../Components/NewsLetter'
import Product2 from '../Components/Product2'
import SmallBanner from '../Components/SmallBanner'
import TextBanner from '../Components/TextBanner'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Shop = () => {
  return (
    <div>
      <HeroImage2/>
      <Product2/>
      <section id="pagination" className='section-p1'>
        <NavLink>1</NavLink>
        <NavLink>2</NavLink>
        <NavLink> <span><FaLongArrowAltRight/></span></NavLink>

      </section>
      <NewsLetter/>

    </div>
  )
}

export default Shop
