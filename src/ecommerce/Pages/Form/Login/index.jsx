import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaEnvelope, FaMap, FaTimes, FaTimesCircle } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'

export const Login = () => {
  return (
<div className='form-section'>
<div className="form-box">
            <form action="">
                <h2>Login</h2>
                <div className="inputbox">
                <span className='icon'><FaEnvelope/></span>
                    <input type="email" required/>
                    <label for="">Email</label>
                </div>
                <div className="inputbox">
                <span className='icon'><RiLockPasswordFill/></span>
                    <input type="password" required/>
                    <label for="">Password</label>
                </div>
                <div className="forget">
                    <label for=""><input type="checkbox"/>Remember Me</label>  <span><NavLink to="/ecommerce/forgetpassword">Forget Password</NavLink></span>
                </div>
                <button>Log in</button>
                <div className="register">
                    <p>Don't have a account? <NavLink to="/ecommerce/register">Register</NavLink></p>
                </div>
            </form>
        </div></div>
  )
}

