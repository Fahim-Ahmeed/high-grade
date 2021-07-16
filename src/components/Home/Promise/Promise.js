import React, { useEffect } from 'react'
import './Promise.css';
import pic1 from '../../../images/slide1.jpg';
import pic2 from '../../../images/slide2.jpg';
import pic3 from '../../../images/slide3.jpg';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typical from 'react-typical'

function Quality() {

    useEffect(() => {
        AOS.init({
          duration : 1000
        });
      }, []);

    return (  
        <section className="quality pb-5">

            <h2 className="text-center text-white pt-5">
            <Typical
                    steps={['Our Promise', 2000, 'Our Agreement', 2000]}
                    loop={Infinity}
                    wrapper="p"
            />

            </h2>
            <div className="my-row pb-5">
                

                {/* col 1 */}
                 
                
                         
                        <div data-aos="fade-right" className="card" style={{width: '18rem'}}> 
                            <img className="card-img-top" src={pic1} alt="" />
                            <div className="card-body">
                                <h4 className="text-primary">Quality</h4>
                                <p>we are committed to taking pride in our work and producing a quality service that meets or exceeds each owner's expectations by constructing our work right the first time. If it can be measured, it can be improved upon; this is how our Quality.... </p>
                            </div>
                            <Link to="/detail"><button className="btn btn-primary my-btn">See More</button></Link>
                        </div> 
                       
                  
                 

                {/* col 2 */}
                 
                   
                        <div data-aos="zoom-in" className="card" style={{width: '18rem'}}> 
                            <img className="card-img-top" src={pic2} alt="" />
                            <div className="card-body">
                                <h4 className="text-primary">Commitment</h4>
                                <p>HIGH GRADE Erection & Engineering isn't just about building. We set out to improve the world we all live in; both through the projects we undertake and the way we approach them. Our Corporate Culture embraces a strong...</p>
                            </div>
                            <Link to="/detail"><button className="btn btn-primary my-btn">See More</button></Link>
                        </div> 
                   
                

                {/* col 3 */}
                
                   
                        <div data-aos="fade-left" className="card" style={{width: '18rem'}}> 
                            <img className="card-img-top" src={pic3} alt="" />
                            <div className="card-body">
                                <h4 className="text-primary">Safety</h4>
                                <p>Our outstanding safety record just got better we finished 2019 with ZERO OSHA Recordable and Zero Lost-Time incidents. This achievement. reflects our dedication to building a culture of safety. From the CEO to employees at every job site....</p>
                            </div>
                            <Link to="/detail"><button className="btn btn-primary my-btn">See More</button></Link>
                        </div> 
                    
                
            </div>


             
        </section>
    )
}

export default Quality
