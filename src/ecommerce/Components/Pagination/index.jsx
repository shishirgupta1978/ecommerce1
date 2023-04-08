import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
import './Pagination.scss';

export const Pagination = () => {
  return (
    <section id="pagination" className='section-p1'>
    <NavLink>1</NavLink>
    <NavLink>2</NavLink>
    <NavLink> <span><FaLongArrowAltRight/></span></NavLink>

  </section>
  )
}
