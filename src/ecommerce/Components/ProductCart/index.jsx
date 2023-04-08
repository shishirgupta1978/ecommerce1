import React from 'react'
import './ProductCart.scss'
import { FaStar,FaShoppingCart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export const ProductCart = (props) => {
  return (
    <div className='pro'>
                <img src={props.product.Img} alt=''/>
                <div className='des'>
                    <span>{props.product.Name}</span>
                    <h5>{props.product.Title}</h5>
                    <div className='star'>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>

                    </div>
                    <h4>Rs. {props.product.Price}</h4>
                </div>
                <NavLink><span className='cart'><FaShoppingCart/></span></NavLink>
            </div>
  )
}

