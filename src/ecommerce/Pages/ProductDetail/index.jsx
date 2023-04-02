import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {Img1 as img1,Img2 as Img } from "../../assets"
import { FaStar,FaShoppingCart } from 'react-icons/fa'



export const ProductDetail = () => {
  const [mainImage,setMainImage]=useState(Img)


  return (
    <>
        <section id="prodetails" className='section-p1'>
        <div className='single-pro-image'>
        <img src={mainImage} width="100%" id="MainImg" alt=""/>
        <div className='small-img-group'>
            <div className="small-img-col" onClick={()=>{setMainImage(img1)}}>
            <img src={img1} width="100%" className='small-img' alt=""/>
            </div>
            <div className="small-img-col"  onClick={()=>{setMainImage(Img)}}>
            <img src={img1} width="100%" className='small-img' alt=""/>
            </div>
            <div className="small-img-col"   onClick={()=>{setMainImage(img1)}}>
            <img src={img1} width="100%" className='small-img' alt=""/>
            </div>
            <div className="small-img-col"   onClick={()=>{setMainImage(Img)}}>
            <img src={img1} width="100%" className='small-img' alt=""/>
            </div>

        </div>

        </div>
        <div
         className='single-pro-details'>
            <h6>Home/T-Shirt</h6>
            <h4>Men's Fashion T Shirt</h4>
            <h2>$124</h2>
            <select>
                <option>Select Size</option>
                <option>XL</option>
                <option>XXL</option>
                <option>Small</option>
                <option>Large</option>
            </select>
            <input type='number' value="1"/>
            <button className='normal'>Add To Cart</button>
            <h4>Product Details</h4>
            <span> dfo df fd df dlfjldsfj lsdfjl dflj dlfj dfjd lfjsdlfj sdf dfjsdlfj dfj dfj dsfj df</span>
         </div>
       

        </section>

        <section id="product1" className='section-p1'>
        <h2>Featured Products</h2>
        <p>Summer Collection New Morden Design</p>
        <div className='pro-container'>
            <div className='pro'>
                <img src={Img} alt=''/>
                <div className='des'>
                    <span>adidas</span>
                    <h5>Cartoon Astronaut T-Shirts</h5>
                    <div className='star'>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>

                    </div>
                    <h4>Rs. 578</h4>
                </div>
                <NavLink><span className='cart'><FaShoppingCart/></span></NavLink>
            </div>
            <div className='pro'>
                <img src={Img} alt=''/>
                <div className='des'>
                    <span>adidas</span>
                    <h5>Cartoon Astronaut T-Shirts</h5>
                    <div className='star'>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>

                    </div>
                    <h4>Rs. 578</h4>
                </div>
                <NavLink><span className='cart'><FaShoppingCart/></span></NavLink>
            </div>
            <div className='pro'>
                <img src={Img} alt=''/>
                <div className='des'>
                    <span>adidas</span>
                    <h5>Cartoon Astronaut T-Shirts</h5>
                    <div className='star'>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>

                    </div>
                    <h4>Rs. 578</h4>
                </div>
                <NavLink><span className='cart'><FaShoppingCart/></span></NavLink>
            </div>
            <div className='pro'>
                <img src={Img} alt=''/>
                <div className='des'>
                    <span>adidas</span>
                    <h5>Cartoon Astronaut T-Shirts</h5>
                    <div className='star'>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>

                    </div>
                    <h4>Rs. 578</h4>
                </div>
                <NavLink><span className='cart'><FaShoppingCart/></span></NavLink>
            </div>
            
        </div>
      
    </section>
      <NewsLetter/>

    </>
  )
}



