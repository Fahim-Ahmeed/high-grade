import  { useEffect,useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './HighGrade.css';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typical from 'react-typical'

const HighGrade = () => {
  const[members,setMembers]=useState([]);
  const allImages=()=>{
    fetch('https://secret-spire-68459.herokuapp.com/getGoverningMembers')
    .then(response => response.json())
    .then(data => {
        if (data) {
            setMembers(data)
        }
    })
  }
 
    useEffect(() => {
      allImages()
        AOS.init({
          duration : 1000
        });
      }, []);



      
    return (
        <section className="quality pb-5">
            <h1 className="text-center text-success pt-5 pb-5 high">High  Grade
            <br />
            <span>Group</span>
            </h1>
            <h4 className="text-center text-white  high">
            <Typical
                    steps={['We believe in Quality Safety & timeliness',2000]}
                    loop={Infinity}
                    wrapper="p"
            />
            </h4> 
           
            <div className="container col-sm-6 col-md-6 col-lg-4 col-xl-4">
                <Carousel  autoPlay={true} infiniteLoop showThumbs={false} interval="2000"
                dynamicHeight
                
                >
                  {
                       members.map(member => 
                      <div className=" " key={member._id}>
                      <img src={member.imageLink} className="img-fluid img-thumbnail" alt="" />
                      <p  className="legend">{member.tittle}</p>
                 
                  </div>
                       )
                  }
                  </Carousel>
            </div>
            </section>
    );
};

export default HighGrade;