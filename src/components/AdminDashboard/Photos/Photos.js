import React, { useEffect, useState } from "react";
import Nav from '../../Home/Nav/Nav';
import SideNav from '../SideNav/SideNav';

const Photos = () => {
    const[images,setImages]=useState([]);
    const allImages=()=>{
      fetch('https://secret-spire-68459.herokuapp.com/getPhotos')
      .then(response => response.json())
      .then(data => {
          if (data) {
              setImages(data)
          }
      })
    }
   
  useEffect(() => {
    allImages()
   
  
  
  }, [])

  const deletePhoto = (id) => {
    fetch(`https://secret-spire-68459.herokuapp.com/deletePhoto/${id}`, {
        method: 'DELETE',
    })
        .then(result => {
            if (result) {
                allImages()
            }
        })
}
    return (
        <>
        <Nav></Nav>
        <SideNav></SideNav>
        <h2 className="text-center text-success mb-5">Your Photos</h2>
        <div  className="row">
            
            {
                images.map(image => 
                    <div className="col-md-4">
                    <img src={image.imageLink} className="img-fluid" alt="" />
                    <button className="btn btn-danger" onClick={() => deletePhoto(image._id)}>Delete</button>
                </div>
                    )
            }
           
        </div>
        </>
    );
};

export default Photos;