import React from 'react'
import {Img1} from '../../assets'

export const Form = () => {
  return (
    <section id="form-details" className='section-p1'>
        <form>
          <span>LEAVE A MESSAGE</span>
          <h2>We love to hear from you</h2>
           
            <input type="text" placeholder='Your Name'></input>
            <input type="email" placeholder='E-mail'></input>
            <input type="text" placeholder='Subject'></input>
            <textarea rows="6" placeholder='Your message'/>

            <button className='normal'>Submit</button>
        </form>
        <div className='people'>
          <div>
            <img src={Img1} alt=""/>
            <p><span>Ram kumar</span> Senior Manager <br/> ter odf df sdf sdf lsdflsdf jlsdfj sdfj lsdfj sdfj sdf<br/>80980808080<br/>abc@gmail.com</p>
          </div>
          <div>
            <img src={Img1} alt=""/>
            <p><span>Ram kumar</span> Senior Manager <br/> ter odf df sdf sdf lsdflsdf jlsdfj sdfj lsdfj sdfj sdf<br/>abc@gmail.com</p>
          </div>

          <div>
            <img src={Img1} alt=""/>
            <p><span>Ram kumar</span> Senior Manager <br/> ter odf df sdf sdf lsdflsdf jlsdfj sdfj lsdfj sdfj sdf<br/>abc@gmail.com</p>
          </div>

        </div>
      
    </section>
  )
}

