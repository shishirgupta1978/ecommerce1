import React from 'react'
import { NavLink } from 'react-router-dom'
import {PageHeader,Product2} from '../../Components'
import { FaLongArrowAltRight } from 'react-icons/fa'
import {Img1} from "../../assets"

export const Shop = () => {
  return (
    <div>

      <PageHeader heading="Shop with Us" text="Get top discount up to 70%" image={Img1}/>
      <PageHeader />
      <Product2/>
      <section id="pagination" className='section-p1'>
        <NavLink>1</NavLink>
        <NavLink>2</NavLink>
        <NavLink> <span><FaLongArrowAltRight/></span></NavLink>

      </section>

    </div>
  )
}

