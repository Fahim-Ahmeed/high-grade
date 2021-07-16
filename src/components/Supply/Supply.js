import React from 'react'
import './Supply.css';
import Nav from '../Home/Nav/Nav';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

function Supply() {
    return (
<>
      <Nav></Nav>
            <div style={{background:'rgb(45, 29, 75)'}}> 
        
        <div className="py-5">
        <table className="">
        <h2  className="text-white">Our Supply</h2>
          <tr> 
            <th>Name</th>
            <th>Details</th> 
          </tr>
          <tr>
            <td>S.S Square & Round Tank</td>
            <td><Link to="/about"><button className="btn btn-color">Click</button></Link></td> 
          </tr>
          <tr>
            <td>Exhaust Control Damper</td>
            <td><Link to="/about"><button className="btn btn-color">Click</button></Link></td> 
          </tr>
          <tr>
            <td>Trolley</td>
            <td><Link to="/about"><button className="btn btn-color">Click</button></Link></td> 
          </tr>
          <tr>
            <td>Cooling Tower</td>
            <td><Link to="/about"><button className="btn btn-color">Click</button></Link></td> 
          </tr>
          <tr>
            <td>Rockwool insulation</td>
            <td><Link to="/about"><button className="btn btn-color">Click</button></Link></td> 
          </tr>
          <tr>
            <td>Submersible Pump with boring & Installation</td>
            <td><Link to="/about"><button className="btn btn-color">Click</button></Link></td> 
          </tr>
          <tr>
            <td>Fire Hydrant's accessories</td>
            <td><Link to="/about"><button className="btn btn-color">Click</button></Link></td> 
          </tr>
          <tr>
            <td>Gas Filter</td>
            <td><Link to="/about"><button className="btn btn-color">Click</button></Link></td> 
          </tr>
          <tr>
            <td>All Kinds of Piping Items</td>
            <td><Link to="/about"><button className="btn btn-color">Click</button></Link></td> 
          </tr>
           
        </table>
        </div>
  
        {/* footer */}
        <Footer></Footer>
      </div>
      </>
    )
}

export default Supply
