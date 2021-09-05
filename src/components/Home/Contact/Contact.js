import React from 'react'
import './Contact.css';
import Nav from '../Nav/Nav';
import emailjs from 'emailjs-com';
import { useLocation } from 'react-router-dom';
import{ init } from 'emailjs-com';
init("user_lthgKyrBw7XvYFK7TO084");


function Contact() {
    const location = useLocation();
    const sendEmail =(e)=>{
        e.preventDefault();
    
        emailjs.sendForm('service_7no0wxy', 'template_w5pfwkk', e.target,'user_lthgKyrBw7XvYFK7TO084')
          .then((result) => {
              console.log(result.text);
              alert('your message sending successfully')
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }
    return (
        <>
        {location.pathname==='/contact'?
        <><Nav /><div className="contact">
                    <div className="form-box">
                        <h1 className="text-white text-center mb-5">Contact</h1>
                        <form action="" onSubmit={sendEmail}>
                            <input name="name" type="text" placeholder="Your Name" required /> <br /><br />
                            <input name="email" type="text" placeholder="Your Email" required /> <br /><br />
                            <input name="number" type="text" placeholder="Your Number" required /> <br /><br />
                            <textarea name="message"  rows="10" cols="70" placeholder="Your Message">
                            </textarea> <br /><br />
                            <input type="submit" className="btn btn-primary" />

                        </form>
                    </div>
                </div></>
        : <div className="contact">
        <div className="form-box">
            <h1 className="text-white text-center mb-5">Contact</h1>
            <form action=""  onSubmit={sendEmail}>
                <input name="name" type="text" placeholder="Your Name" required /> <br /><br />
                <input name="email" type="text" placeholder="Your Email" required /> <br /><br />
                <input name="number" type="text" placeholder="Your Number" required /> <br /><br />
                <textarea name="message" rows="10" cols="70" placeholder="Your Message">

                </textarea> <br /><br />
                <input type="submit" className="btn btn-primary" />
                
            </form>
        </div>
    </div>}
        
        </>
    )
}

export default Contact
