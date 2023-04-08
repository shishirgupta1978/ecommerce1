import React from 'react'
import {PageHeader} from '../../Components'
import { NavLink } from 'react-router-dom'
import { FaLongArrowAltRight } from 'react-icons/fa'
import {blogImg,buy1Img} from "../../assets"
import './Blog.scss'
import { Pagination } from '../../Components'

export const Blog = () => {
  const blogs=[{Title:"This is Title","Date":"13/01","Description":"Thi is despfrefdf dfl ."},{Title:"This is Title","Date":"13/01","Description":"Thi is despfrefdf dfl ."}]
  return (
    <>
    <PageHeader heading="Blogs" text="I'm a friendly Back-End Developer" image={blogImg}/>
      <section id="blog">
        {blogs.map((blog,i)=>
                    <div key={i} className='blog-box'>
                    <div className='blog-img'>
                        <img src={buy1Img} alt=""/>
                    </div>
                    <div className='blog-details'>
                        <h4>{blog.Title}</h4>
                        <p>{blog.Description} </p>
                        <NavLink to="/">CONTINUE READING</NavLink>
                    </div>
                    <h1>{blog.Date}</h1>
                </div>
        


        )}
      </section>
      <Pagination/>

    </>
  )
}

