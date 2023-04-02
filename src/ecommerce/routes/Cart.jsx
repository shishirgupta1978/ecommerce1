import React from 'react'
import HeroImage2 from '../Components/HeroImage2'
import NewsLetter from '../Components/NewsLetter'
import { FaEnvelope, FaMap, FaTimes, FaTimesCircle } from 'react-icons/fa'
import Form from '../Components/Form'
import { NavLink } from 'react-router-dom'
import Img1 from "../assets/home1.jpg"


const Cart = () => {
  return (
    <div>
        
         <HeroImage2 heading="Contact Us" text="Feedback and Suggestions"/>
         <section id="cart" className='section-p1'>
            <table width="100%">
                <thead>
                    <tr><th>Remove</th><th>Image</th><th>Product</th><th>Price</th><th>Quantity</th><th>Subtotol</th></tr>
                </thead>
                <tbody>
                <tr><td><NavLink><FaTimesCircle/></NavLink></td><td><img src={Img1} alt="img"/></td><td>Product Name</td><td>Rs. 132.00</td><td><input type="number" value="1"/></td><td>Rs. 2020.00</td></tr>
                <tr><td><NavLink><FaTimesCircle/></NavLink></td><td><img src={Img1} alt="img"/></td><td>Product Name</td><td>Rs. 132.00</td><td><input type="number" value="1"/></td><td>Rs. 2020.00</td></tr>
                <tr><td><NavLink><FaTimesCircle/></NavLink></td><td><img src={Img1} alt="img"/></td><td>Product Name</td><td>Rs. 132.00</td><td><input type="number" value="1"/></td><td>Rs. 2020.00</td></tr>
                </tbody>
            </table>


         </section>
         <section id="cart-add" className='section-p1'>
            <div id="coupon">
                <h3>Apply Coupon</h3>
                <input type='text' placeholder='Enter Your Coupon'/>
                <button className='normal'>Apply</button>
            </div>
            <div id="subtotal">
                <h3>Cart Totals</h3>
                <table>
                    <tr><td>Cart Subtotal</td><td>Rs. 160.00</td></tr>
                    <tr><td>Shipping</td><td>Rs. 60.00</td></tr>
                    <tr><td><strong>Total</strong></td><td><strong>Rs. 220.00</strong></td></tr>
 

                </table>
                <button className='normal'>Proceed to Checkout</button>
            </div>

         </section>
        <NewsLetter/>

      
    </div>
  )
}


export default Cart
