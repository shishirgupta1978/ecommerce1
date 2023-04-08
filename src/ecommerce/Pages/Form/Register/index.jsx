import React from 'react'
import { NavLink, Navigate } from 'react-router-dom'
import { FaEnvelope, FaMap, FaTimes, FaTimesCircle } from 'react-icons/fa'
import {RiLockPasswordFill} from 'react-icons/ri'
export const Register = () => {
  return (
<div className='form-section'>
<div className="form-box">
            <form action="">
                <h2>Register</h2>
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
                <div className="inputbox">
                <span className='icon'>
                  <RiLockPasswordFill/></span>
                    <input type="password" required/>
                    <label for="">Confirm Password</label>
                </div>
                <button>Sign Up</button>
            </form>
        </div></div>
  )
}

