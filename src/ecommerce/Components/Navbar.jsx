import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'
import logo from '../assets/react.svg'

const Navbar = () => {
    const [click,setClick] = useState(false);
    const handleClick=()=> setClick(!click)
    const [color,setColor]=useState(false)
    const changeColor=()=>{
        if(window.scrollY >= 100){
            setColor(true);
        }
        else{
            setColor(false);
        }
    }

 window.addEventListener("scroll",changeColor);
  return (
    <section id="header">
      <NavLink to="/"><img src={logo} className='logo' alt="logo"/></NavLink>
      <div>
        <ul id="navbar">
        <li><NavLink to="/ecommerce/home">Home</NavLink></li>
        <li><NavLink to="/ecommerce/shop">Shop</NavLink></li>
        <li><NavLink to="/ecommerce/blog">Blog</NavLink></li>
        <li><NavLink to="/ecommerce/about">About</NavLink></li>
        <li><NavLink to="/ecommerce/contact">Contact</NavLink></li>
       <li><NavLink to="/"><FaShoppingCart/></NavLink></li>
          
        </ul>
      </div>
    </section>
  )
}


export default Navbar
