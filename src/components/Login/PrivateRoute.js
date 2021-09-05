import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { adminContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const[admin,setAdmin]= useContext(adminContext)

    return (

        <Route
            {...rest}
            render={({ location }) =>
                (admin.email==='absoft570@gmail.com'&&admin.password==='P@ssword570' )||(localStorage.getItem('email')==='absoft570@gmail.com'&& localStorage.getItem('password')==='P@ssword570')? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;
