import React, { useEffect, useState } from "react";
import './Slider.css';
import img1 from "../../../images/slide1.jpg";
import img2 from "../../../images/slide2.jpg";
import img3 from "../../../images/slide3.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function Slider() {
  const[images,setImages]=useState([]);
  const allImages=()=>{
    fetch('https://secret-spire-68459.herokuapp.com/getWorkPhotos')
    .then(response => response.json())
    .then(data => {
        if (data) {
            setImages(data)
            console.log(images)
        }
    })
  }
 
useEffect(() => {
  allImages()
 


}, [])



const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
  return (
    // <>
    // </>
    <Carousel 
    swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={1000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={500}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    deviceType={["tablet", "mobile"]}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
>
        
{
  images.length > 0
  
  ?
  images.map(
    image => 
    <div key={image._id}>
   <img className="d-block w-100" src={image.imageLink} alt="First slide" />
    </div>
    
 
  )
  :
  <div>
    <img src={img1} alt="" />
  </div>
}
         
  </Carousel>
  );
}

export default Slider;
