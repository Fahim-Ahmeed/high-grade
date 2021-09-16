import React from 'react';
import Nav from '../../../Nav/Nav';
import Slider from '../../../Slider/Slider';
import Typical from 'react-typical';
import { Link } from 'react-router-dom';
import Tools from '../../../../Tools/Tools';
import Service from '../../../../Service/Service';
import Supply from '../../../../Supply/Supply';
import Footer from '../../../../Footer/Footer';


const ErectionEngineering = () => {
    return (
        <div>
            <Nav></Nav>
           <div className="mt-5">
           <h4 className="text-center text-Success  high">
            <Typical
                    steps={['We believe in Quality Safety & timeliness',2000]}
                    loop={Infinity}
                    wrapper="p"
            />
            </h4>
                <Slider></Slider>
         


                <section className="quality pb-5">
                <h4 className=" text-center text-white  high pt-5">Introduction</h4>
            <div className="my-row pb-5">
                
          
               
                 
                
                         
                        <div data-aos="fade-right" className="card" style={{width: '18rem'}}> 
                            <div className="card-body">
                                <h4 className="text-primary">Vision & Mission</h4>
                                <p>we are committed to taking pride in our work and producing a quality service that meets or exceeds each owner's expectations by constructing our work right the first time. If it can be measured, it can be improved upon; this is how our Quality.... </p>
                            </div>
                        </div> 
                       
                  
                 
                        <div data-aos="fade-right" className="card" style={{width: '18rem'}}> 
                            <div className="card-body">
                                <h4 className="text-primary">Commitment</h4>
                               
                                <p>HIGH GRADE Erection & Engineering isn't just about building. We set out to improve the world we all live in; both through the projects we undertake and the way we approach them. Our Corporate Culture embraces a strong commitment to the environment. Our employees are essential to our efforts. Their leadership and approach to our work facilitates meeting our commitments and fulfilling our Company vision. With a Corporate Environmental Director and a designated Environmental Representative on each project, we cover the bases at both management and project levels</p>
                            </div>
                        </div>
                 
                   
                        <div data-aos="zoom-in" className="card" style={{width: '18rem'}}> 
                            <div className="card-body">
                                <h4 className="text-primary">About us</h4>
                                <p>we are committed to taking pride in our work and producing a quality service that meets or exceeds each owner's expectations by constructing our work right the first time. If it can be measured, it can be improved upon; this is how our Quality.....</p>
                                
                            </div>
                        </div>  
                     
            </div>


             
        </section>
           </div>
            <Tools></Tools>
            <Service></Service>
            <Supply></Supply>
            <Footer></Footer>
        </div>
    );
};

export default ErectionEngineering;