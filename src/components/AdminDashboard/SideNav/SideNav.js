import React, { useContext } from 'react';
import './SideNav.css'
import { NavLink,useHistory} from 'react-router-dom';
import Nav from '../../Home/Nav/Nav';
import {adminContext} from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUserPlus, faHdd, faShoppingCart, faCommentDots,faSignInAlt} from '@fortawesome/free-solid-svg-icons'


const SideNav = () => {
    const[admin,setAdmin]=useContext(adminContext);
    const history = useHistory()
    const signOut=()=>{
        setAdmin({})
        localStorage.removeItem('email')
        localStorage.removeItem('password')
        history.push('/')
        console.log('dhurbal')
    }
    return (
     
        <aside className='col-md-2 sideNav text-center p-0'>
                <div className="container">
                <ul className='list-unstyled text-left ml-4 mt-4'>
                    </ul>
                    <NavLink to="/addphotos"
                        
                                    activeStyle={{
                                        fontWeight: "bold",
                                        paddingBottom: '0px',
                                        borderBottom: '3px solid #7AB259',
                                        textDecoration: 'none',
                                        color: '#009444'
                                    }}>
                                         <li className='mb-3' >
                                        Add Photos
                                    </li>
                                        </NavLink>
                                        <NavLink to="/photos"
                                        activeStyle={{
                                        fontWeight: "bold",
                                        paddingBottom: '0px',
                                        borderBottom: '3px solid #7AB259',
                                        textDecoration: 'none',
                                        color: '#009444'
                                    }}>
                                         <li className='mb-3' >
                                        Photos
                                    </li>
                                        </NavLink>
                                        {/* <NavLink> */}
                                        <li className='mb-3 logout'onClick={signOut} >
                                    <FontAwesomeIcon className='mr-2 '  style={{ fontSize: '18px' }} icon={faSignInAlt} /> <span>Sign out</span>
                                </li>
                                {/* </NavLink> */}
                </div>
            
            </aside>
        
    )
};

export default SideNav;