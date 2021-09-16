import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import Nav from '../../../Home/Nav/Nav';
import SideNav from '../../SideNav/SideNav';
import AddPhotos from '../AddPhotos';


const WorkPhotos = () => {
    const[message,setMessage]=useState(null);
  const[imageName,setImageName]=useState(null)
  const { register, handleSubmit} = useForm(); 
  const [imageURL, setIMageURL] = useState(null);
    
   const onSubmit=(event) => {
    console.log("image upload");
     const imageDetails ={
       imageLink: imageURL
     };
     fetch('https://secret-spire-68459.herokuapp.com/addWorkPhotos', {
      method: 'POST', 
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(imageDetails)
    })
    .then(res => res.json())
    .then(data => {
      if(data){
        setImageName(null);
        setMessage(null);
       alert('image successfully uploaded')
      }
    })

   }
    const handleImageUpload = event => {
      setImageName(event.target.files[0].name)
        const imageData = new FormData();
        imageData.set('key', '20ee534ec022d950affa1ad4da921bd9');
        imageData.append('image', event.target.files[0]);
       
        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
        .then(function (response) {
          setIMageURL(response.data.data.display_url);
          console.log(99, response)
          setMessage(true);
        })
        .catch(function (error) {
          console.log(error);
        });
    
      }
    return (
        <>
        <Nav></Nav>
        <SideNav></SideNav>
        <AddPhotos></AddPhotos>
        <h2 className="text-center text-success mb-5">ADD Work Photos</h2>
             <div className="d-flex justify-content-center">
            <form onSubmit={handleSubmit(onSubmit)} className="myForm" > 
              <div className="col-md-6">
                                    
                                    <label htmlFor="uploadImg" className='upload-file-btn text-center'>
                                    <input onChange={handleImageUpload} className='upload-file-inp' type="file" name="file" id="uploadImg" />
                                      <FontAwesomeIcon icon={faCloudUploadAlt} /> {
                                        imageName?imageName:'Select image'
                                      }
                                      </label>
                                </div>
                                <div className="col-md-6">
                                  {
                                    message&&<p className="text-success mt-5">Your file is ready ,now you can click Upload button</p>
                                  }
                                <input type="submit" value="Upload" className="btn btn-success mt-3 px-4" /> 
                                </div>
            </form>
        </div>
        </>
    );
};

export default WorkPhotos;