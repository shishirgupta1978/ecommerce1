import React from 'react'
import { NavLink } from 'react-router-dom'
import {HeroImage2,Product2} from '../../Components'
import { FaLongArrowAltRight } from 'react-icons/fa'

export const Shop = () => {
  return (
    <div>
      <HeroImage2/>
      <Product2/>
      <section id="pagination" className='section-p1'>
        <NavLink>1</NavLink>
        <NavLink>2</NavLink>
        <NavLink> <span><FaLongArrowAltRight/></span></NavLink>

      </section>

    </div>
  )
}

