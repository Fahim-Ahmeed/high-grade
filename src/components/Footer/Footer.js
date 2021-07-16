import React from 'react'
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="row p-5">
                <div className="col-md-4"> 
                    <div>
                        <h3>Address</h3>
                        <p><span className="font-weight-bold">Head Office :</span> Anowara Complex <br /> 3rd Floor, Mawna Chowrasta, Sreepur, Gazipur</p>
                        <p><span className="font-weight-bold">Workshop :</span> Dhaka Mymensingh Road, <br /> M.C. Bazar, Sreepur, Gazipur</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div>
                        <h3>Contact</h3>
                        <p><span className="font-weight-bold">E-mail :</span> highgrade.eng71@gmail.com</p>
                        <p><span className="font-weight-bold">Cell :</span> 01828-861130,<br /> 018374-14267</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div>
                        <h3>Helpful Link</h3>
                        <p><span className="font-weight-bold">E-mail :</span> highgrade.eng71@gmail.com</p>
                        <p><span className="font-weight-bold">Cell :</span> 01828-861130,<br /> 018374-14267</p>
                    </div>
                </div>
            </div>
            <p style={{fontSize:'16px'}} className="text-center">High Grade <span className="text-danger">©</span> CopyRight {(new Date()).getFullYear()} || All Right Reserved.</p>
        </div>
    )
}

export default Footer
