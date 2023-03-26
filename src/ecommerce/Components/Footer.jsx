import React from 'react'
import {FaHome,FaYoutube,FaLinkedin,FaMailBulk,FaPhone,FaFacebook,FaTwitter} from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import logo from '../assets/react.svg'
import payment from '../assets/payment.png'
import googlepay from '../assets/googlepay.jpg'
import appstore from '../assets/appstore.png'
const Footer = () => {
  return (
    <footer className='section-p1'>
        
        <div className='col'>
            <h4>Contact</h4>
            <p><strong>Address:</strong> 123, Raj Nagar Extension, Delhi - 110003 </p>
            <p><strong>Phone:</strong> 8989898988,8087879799 </p>
            <p><strong>Hours:</strong> 10:00 - 18:00 Mon - Sat </p>
        </div>
        <div className='col'>
            <h4>About Us</h4>
            <NavLink to="/">Delivery Information</NavLink>
            <NavLink to="/">Privacy Policy</NavLink>
            <NavLink to="/">Terms & Conditions</NavLink>
            <NavLink to="/">Contact Us</NavLink>
            </div>
            <div className='col'>
            <h4>Follow Us</h4>
            <NavLink to="/"><FaFacebook size={13}/> Facebook</NavLink>
            <NavLink to="/"> <FaTwitter size={13}/> Twitter </NavLink>
            <NavLink to="/"><FaLinkedin size={13}/> LinkedIn</NavLink>
            <NavLink to="/"><FaYoutube size={13} /> YouTube</NavLink>
            </div>
 
            <div className='col'>
            <h4>My Account</h4>
            <NavLink to="/">Sign In</NavLink>
            <NavLink to="/">View Cart</NavLink>
            <NavLink to="/">My Wishlist</NavLink>
            <NavLink to="/">Track My Order</NavLink>
            <NavLink to="/">Help</NavLink>
            </div>
            <div className='col install'>
                <h4>Install Apps</h4>
               <div className='row'>
                <img src={appstore} alt=""/>
                <img src={googlepay} alt=""/>
               </div>
               <img src={payment} alt=""/>


            </div>
      <div className='copyright'><p>@ 2023, All Rights Reserved</p></div>
    </footer>
  )
}

export default Footer
