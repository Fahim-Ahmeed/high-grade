import React from "react";
import './Service.css';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Home/Nav/Nav';

function Service() {
  return (
      <>
      <Nav></Nav>
            <div style={{background:'rgb(45, 29, 75)'}}> 
        
        <div className="py-5">
        <table className="">
        <h2  className="text-white">Our Services</h2>
          <tr> 
            <th>Name</th>
            <th>Get Purchase</th> 
          </tr>
          <tr>
            <td>Generator Pipeline</td>
            <td><Link to="/about"><button className="btn btn-color">Click</button></Link></td> 
          </tr>
          <tr>
            <td>Chiler Pipe Line</td>
            <td><Link to="/about"><button className="btn btn-color ">Click</button></Link></td> 
          </tr>
          <tr>
            <td>Boiler Pipeline</td>
            <td><Link to="/about"><button className="btn btn-color ">Click</button></Link></td> 
          </tr>
          <tr>
            <td>Dyeing Machine's Pipe line</td>
            <td><Link to="/about"><button className="btn btn-color ">Click</button></Link></td> 
          </tr>
          <tr>
            <td>Air compressor Pipeline</td>
            <td><Link to="/about"><button className="btn btn-color ">Click</button></Link></td> 
          </tr>
          <tr>
            <td>Fire Hydrant system</td>
            <td><Link to="/about"><button className="btn btn-color ">Click</button></Link></td> 
          </tr>
          <tr>
            <td>Safety Stair</td>
            <td><Link to="/about"><button className="btn btn-color ">Click</button></Link></td> 
          </tr>
          <tr>
            <td>Round Duct, Square duct & Louver</td>
            <td><Link to="/about"><button className="btn btn-color ">Click</button></Link></td> 
          </tr>
          <tr>
            <td>Monorail Crane</td>
            <td><Link to="/about"><button className="btn btn-color ">Click</button></Link></td> 
          </tr>
          <tr>
            <td>A/C Plant's Pipeline & Door</td>
            <td><Link to="/about"><button className="btn btn-color ">Click</button></Link></td> 
          </tr>
          <tr>
            <td>Steel Building Fabrication &Installation work</td>
            <td><Link to="/about"><button className="btn btn-color ">Click</button></Link></td> 
          </tr>
          <tr>
            <td>Cooling Tower Installation</td>
            <td><Link to="/about"><button className="btn btn-color ">Click</button></Link></td> 
          </tr>
          <tr>
            <td>Insulation & Sheet Jacketing</td>
            <td><Link to="/about"><button className="btn btn-color ">Click</button></Link></td> 
          </tr>
          <tr>
            <td>False Chilling. Platform & Mezzanine Floor</td>
            <td><Link to="/about"><button className="btn btn-color ">Click</button></Link></td> 
          </tr> 
        </table>
        </div>
  
        {/* footer */}
        <Footer></Footer>
      </div>
      </>

  );
}

export default Service;
