import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import {FaBars,FaTimes,FaShoppingCart} from 'react-icons/fa'
import {logoImg} from '../../assets'
import './Header.scss'


export const Header = () => {




    const [click,setClick] = useState(false);
    const handleClick=()=> setClick(!click)

  return (
    <section id="header">
      <NavLink to="/"><div className='brand-logo'><img src={logoImg} className='logo-img' alt="logo"/> <span>Eshopify</span></div></NavLink>
      
      <div>
        <ul id="navbar" className={click ? "active":""} >
        <li><NavLink to="/ecommerce/home">Home</NavLink></li>
        <li><NavLink to="/ecommerce/shop">Shop</NavLink></li>
        <li><NavLink to="/ecommerce/blog">Blog</NavLink></li>
        <li><NavLink to="/ecommerce/about">About</NavLink></li>
        <li><NavLink to="/ecommerce/contact">Contact</NavLink></li>
       <li id="lg-bag"><NavLink to="/ecommerce/cart"><FaShoppingCart/></NavLink></li>
       <NavLink id="close" onClick={()=>{setClick(false)}}><FaTimes/></NavLink>
       
        </ul>
        
      </div>
      <div id="mobile">
        <NavLink to="/ecommerce/cart"><FaShoppingCart/></NavLink>
        <NavLink id="bar" onClick={()=>{setClick(true)}}> <FaBars /></NavLink>
      </div>

    </section>
  )
}


