import React from 'react'
import './Contact.css';

function Contact() {
    return (
        <div className="contact">
            <div className="form-box">
                <h1 className="text-white text-center mb-5">Contact</h1>
                <form action="">
                    <input name="name" type="text" placeholder="Your Name" required /> <br /><br />
                    <input name="email" type="text" placeholder="Your Email" required /> <br /><br />
                    <input name="number" type="text" placeholder="Your Number" required /> <br /><br />
                    <textarea rows="10" cols="70" placeholder="Your Message">

                    </textarea> <br /><br />
                    <input type="submit" className="btn btn-primary" />
                    
                </form>
            </div>
        </div>
    )
}

export default Contact
