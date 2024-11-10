import React from 'react'
import { IoMail } from "react-icons/io5";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import '../app/styles/Contact.css';

const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
      <div className='contact-grid md:grid-cols-2'>
        <div className='contact-space'>
            <h2 className='contact-heading' data-aos="zoom-in-down">Get in touch</h2>
            <p className='contact-text' data-aos="zoom-in-down">
                Drop me a mail, give me a call,or send me a message by submitting the form.
            </p>
            <div className='contact-flex' data-aos="zoom-in-down">
                 <IoMail size={30}/> scurbgaming94@gmail.com
            </div>
            <div className='contact-flex' data-aos="zoom-in-down">
            <BsFillTelephonePlusFill size={30} /> +92 3232863811
            </div>
        </div>
        <div className='contact-space'>
            <div className='form' data-aos="zoom-in-down">
              
                <label htmlFor="name">Name</label>
                <input type="text"  className='input-field'id='name' />
                
            </div>
            <div className='form' data-aos="zoom-in-down">
            <label htmlFor="email">Email</label>
            <input type="text"  className='input-field' id='Email' />
            </div>
            <div className='form' data-aos="zoom-in-down">
              
                <label htmlFor="msg">Message</label>
                <textarea   className='textarea-field'id='msg' rows={8}>
                </textarea>
                
            </div>
            <button className='button' data-aos="zoom-in-down">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
