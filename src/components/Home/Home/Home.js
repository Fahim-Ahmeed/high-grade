import React from 'react'
import Nav from '../Nav/Nav'
import Slider from '../Slider/Slider'
import Footer from '../../Footer/Footer';
import Contact from '../Contact/Contact';
import Promise from '../Promise/Promise';
import Service from'../../Service/Service';
import HighGrade from '../HighGrade/HighGrade';

function Home() {
    return (
        <div className="">
           <Nav></Nav> 
           <HighGrade/>
           <Slider></Slider>
           <Promise></Promise>
           <Service></Service>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    )
}

export default Home
