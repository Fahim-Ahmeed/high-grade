import React from "react";
import Nav from '../../Home/Nav/Nav';
import SideNav from '../SideNav/SideNav';
import { NavLink,useLocation} from 'react-router-dom';

const Photos = () => {
    const location = useLocation();
    return (
        <>
          {(location.pathname==='/photos')&&
         <>
         <Nav></Nav>
         <SideNav></SideNav>
         </>
        }
        <aside className='col-md-2 sideNav text-center p-0'>
        <div className="container ">
                <ul className='list-unstyled text-left ml-4 mt-4'>
                    </ul>
                    <NavLink to="/workPhotos"
                        
                        activeStyle={{
                            fontWeight: "bold",
                            paddingBottom: '0px',
                            borderBottom: '3px solid #7AB259',
                            textDecoration: 'none',
                            color: '#009444'
                        }}>
                             <li className='mb-3' >
                         Work Photos
                        </li>
                            </NavLink>

                            <NavLink to="/GoverningMembers"
                                        activeStyle={{
                                        fontWeight: "bold",
                                        paddingBottom: '0px',
                                        borderBottom: '3px solid #7AB259',
                                        textDecoration: 'none',
                                        color: '#009444'
                                    }}>
                                         <li className='mb-3' >
                                         Governing  Members
                                    </li>
                                        </NavLink>
                    </div>
            </aside>
        {/* <h2 className="text-center text-success mb-5">Your Photos</h2>
        <div  className="row">
            
            {
                images.map(image => 
                    <div className="col-md-4">
                    <img src={image.imageLink} className="img-fluid" alt="" />
                    <button className="btn btn-danger" onClick={() => deletePhoto(image._id)}>Delete</button>
                </div>
                    )
            }
           
        </div> */}
        </>
    );
};

export default Photos;