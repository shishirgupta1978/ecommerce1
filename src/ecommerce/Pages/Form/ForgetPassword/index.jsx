import React from 'react'
import { NavLink, Navigate } from 'react-router-dom'
import { FaEnvelope, FaMap, FaTimes, FaTimesCircle } from 'react-icons/fa'
import {RiLockPasswordFill} from 'react-icons/ri'
export const ForgetPassword = () => {
  return (
<div className='form-section'>
<div className="form-box">
            <form action="">
                <h2>Forget Password</h2>
                <div className="inputbox">
                <span className='icon'><FaEnvelope/></span>
                    <input type="email" required/>
                    <label for="">Email</label>
                </div>
                
                <button style={{marginTop:'110px'}}>Send Email</button>
            </form>
        </div></div>
  )
}

