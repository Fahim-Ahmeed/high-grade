import React from 'react';
import './AddPhotos.css'
import Nav from '../../Home/Nav/Nav';
import SideNav from '../SideNav/SideNav';
import { NavLink,useLocation} from 'react-router-dom';


const AddPhotos = () => {
    const location = useLocation();
    return (
        <>
        {(location.pathname==='/addphotos')&&
         <>
         <Nav></Nav>
         <SideNav></SideNav>
         </>
        }
       
        <aside className='col-md-2 sideNav text-center p-0'>
        <div className="container ">
                <ul className='list-unstyled text-left ml-4 mt-4'>
                    </ul>
                    <NavLink to="/addworkPhotos"
                        
                        activeStyle={{
                            fontWeight: "bold",
                            paddingBottom: '0px',
                            borderBottom: '3px solid #7AB259',
                            textDecoration: 'none',
                            color: '#009444'
                        }}>
                             <li className='mb-3' >
                           Add Work Photos
                        </li>
                            </NavLink>

                            <NavLink to="/addGoverningMembers"
                                        activeStyle={{
                                        fontWeight: "bold",
                                        paddingBottom: '0px',
                                        borderBottom: '3px solid #7AB259',
                                        textDecoration: 'none',
                                        color: '#009444'
                                    }}>
                                         <li className='mb-3' >
                                        Add Governing  Members
                                    </li>
                                        </NavLink>
                    </div>
            </aside>
       
        </>
    );
};

export default AddPhotos;