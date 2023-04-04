import React from 'react'
import {PageHeader,Form} from '../../Components'
import { FaEnvelope, FaMap } from 'react-icons/fa'
import './Contact.scss'
import { Img1 } from '../../assets'


export const Contact = () => {
  return (
    <div>
        
         <PageHeader heading="Contact Us" text="Feedback and Suggestions" image={Img1}/>
         <section id="contact-details" className='section-p1'>
          <div className='details'>
            <span>GET IN TOUCH</span>
            <h2>Visit one of our agency ocations or contact us today</h2>
            <h3>Head Office</h3>
            <div>
              <li><span><FaMap/></span><p>123, dfj, raj nagar, delhi -110008</p></li>
              <li><span><FaEnvelope/></span><p>123, dfj, raj nagar, delhi -110008</p></li>
              <li><span><FaMap/></span><p>123, dfj, raj nagar, delhi -110008</p></li>
              <li><span><FaMap/></span><p>123, dfj, raj nagar, delhi -110008</p></li>

            </div>
            </div>

            <div className='map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56093.04256617897!2d77.46073050334496!3d28.515208408838433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cebd30cb927b1%3A0x41755b0b1808ea25!2sSurajpur%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201306!5e0!3m2!1sen!2sin!4v1680398449923!5m2!1sen!2sin" width="600" height="450" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

         </section>
         <Form/>

      
    </div>
  )
}

