import React from 'react'
import HeroImage2 from '../Components/HeroImage2'
import { NavLink } from 'react-router-dom'
import NewsLetter from '../Components/NewsLetter'
import { FaLongArrowAltRight } from 'react-icons/fa'
import Img1 from "../assets/hero3.jpg"
import Feature from '../Components/Feature'

const About = () => {
  return (
    <>
    <HeroImage2 heading="ABOUT" text="I'm a friendly Back-End Developer"/>
    <section id="about-head" className='section-p1'>
      <img src={Img1} alt=""/>
      <div>
        <h2>Who We Are?</h2>
        <p>sdfjsdf sdkf dsfj sdfj lsdfj dslfj dlsfj sdfj dlsfj dlfj dfj sdfj dsfj dlf </p>
        <abbr title="">Create stunning images with as much or as little control as you like thanks to a choice of Basic and Creative modes.</abbr>
        <br/><br/>
        <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">Create stunning images with as much or as little control as you like thanks to a choice of Basic and Creative modes.</marquee>
      </div>
    </section>
    <section id="about-app" className='section-p1'>
    <h1>Download Our <NavLink>App</NavLink></h1>
    <div className='video'>
      <video autoPlay muted loop src=""></video>
    </div>

    </section>
    <Feature/>
    <NewsLetter/>
 
    </>
  )
}


export default About