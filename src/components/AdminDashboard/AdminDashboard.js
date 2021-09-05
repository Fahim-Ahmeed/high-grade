import React from 'react';
import Navbar from'../Home/Nav/Nav';
import SideNav from './SideNav/SideNav';

const AdminDashboard = () => {
    return (
        <div>
            <Navbar/>
            <SideNav></SideNav>
            <section className='ClientDashboard'>
            <div className='row'>
                <div className="col-md-10 p-0">
                    <div className='order-container p-4'>
                       
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default AdminDashboard;