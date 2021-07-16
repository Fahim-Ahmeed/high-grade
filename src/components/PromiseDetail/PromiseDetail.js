import React from 'react'
import './PromiseDetail.css';
import Nav from '../Home/Nav/Nav';
import Footer from '../Footer/Footer';

function PromiseDetail() {
    return (
        <div>
        <Nav></Nav>
            <section className="detail-container">
                <h1 className="text-center pb-5">Our Promise</h1>
                <div className="our-quality pb-5">
                    <h2 className="text-primary">Quality</h2>
                    <p>we are committed to taking pride in our work and producing a quality service that meets or exceeds each owner's expectations by constructing our work right the first time. If it can be measured, it can be improved upon; this is how our Quality Program is communicated to our Project Teams. HIGH GRADE Erection & Engineering takes a proactive approach in Quality from the corporate level through the field personnel. Our individual project leaders, the Head Engineers/Operations Managers, ensure that from the outset Quality is addressed in the company's training programs, and that continual monitoring and maintenance of the Quality Program are performed at each project location.</p>
                </div>

                <div className="our-quality pb-5">
                    <h2 className="text-primary">Commitment</h2>
                    <p>HIGH GRADE Erection & Engineering isn't just about building. We set out to improve the world we all live in; both through the projects we undertake and the way we approach them. Our Corporate Culture embraces a strong commitment to the environment. Our employees are essential to our efforts. Their leadership and approach to our work facilitates meeting our commitments and fulfilling our Company vision. With a Corporate Environmental Director and a designated Environmental Representative on each project, we cover the bases at both management and project levels</p>
                </div>

                <div className="our-quality pb-5">
                    <h2 className="text-primary">Safety</h2>
                    <p>Our outstanding safety record just got better we finished 2019 with ZERO OSHA Recordable and Zero Lost-Time incidents. This achievement. reflects our dedication to building a culture of safety. From the CEO to employees at every job site, safety awareness is an integral component in any endeavor we undertake. At HIGH GRADE Erection & Engineering. staff members and service partners share a willingness to uphold high safety standards, which helps us provide the safest and healthiest work environment possible.</p>
                </div>
            </section>
        <Footer></Footer>
        </div>
        
    )
}

export default PromiseDetail
