import React from 'react'
import {PageHeader} from '../../Components'
import { NavLink } from 'react-router-dom'
import { FaLongArrowAltRight } from 'react-icons/fa'
import {Img1} from "../../assets"
import './Blog.scss'

export const Blog = () => {
  return (
    <>
    <PageHeader heading="ABOUT" text="I'm a friendly Back-End Developer" image={Img1}/>
      <section id="blog">
        <div className='blog-box'>
            <div className='blog-img'>
                <img src={Img1} alt=""/>
            </div>
            <div className='blog-details'>
                <h4>The collon</h4>
                <p>df l df dfl df dflj dlfj dlfj dlfj dlf </p>
                <NavLink to="/">CONTINUE READING</NavLink>
            </div>
            <h1>13/01</h1>
        </div>
      </section>
      <section id="pagination" className='section-p1'>
        <NavLink>1</NavLink>
        <NavLink>2</NavLink>
        <NavLink> <span><FaLongArrowAltRight/></span></NavLink>

      </section>


    </>
  )
}

