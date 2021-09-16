import React, { useEffect, useState } from "react";
import Nav from "../../../Home/Nav/Nav";
import SideNav from "../../SideNav/SideNav";
import Photos from "../Photos";
import loadings from "../../../../images/loading.gif"

const AllWorkPhotos = () => {
    const[images,setImages]=useState([]);
    const allImages=()=>{
      fetch('https://secret-spire-68459.herokuapp.com/getWorkPhotos')
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
    fetch(`https://secret-spire-68459.herokuapp.com/deleteWorkPhoto/${id}`, {
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
        <Photos></Photos>
        <div>
             <h2 className="text-center text-success mb-5">Your Photos</h2>
        <div  className="row">
            
            {
               images.length===0?<img className="d-flex justify-content-center" src={loadings} alt="" />:
               images.map(image => 
                <div className="col-md-4" key={image._id}>
                <img src={image.imageLink} className="img-fluid" alt="" />
                <button className="btn btn-danger" onClick={() => deletePhoto(image._id)}>Delete</button>
            </div>
                )
            }
           
        </div> 
        </div>
        </>
    );
};

export default AllWorkPhotos;