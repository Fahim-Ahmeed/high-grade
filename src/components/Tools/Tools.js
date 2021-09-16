import React from 'react'
import './Tools.css';
import Nav from '../Home/Nav/Nav';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Tools() {
  const location = useLocation();
    return (
        <>
        {location.pathname==='/tools'&&  <Nav></Nav>}
     
            <div style={{background:'rgb(45, 29, 75)'}}> 
        
        <div className="py-5">
        <table className="">
        <h2  className="text-white">Our Tools and Equipments</h2>
          <tr> 
            <th>Description</th>
            <th>Quantity</th>
            <th>Details</th>
          </tr>
          <tr>
            <td>Welding machine</td>
            <td>20 Nos</td>
            <td><Link to="/contact"><button className="btn btn-color">Click</button></Link></td>
          </tr>
          <tr>
            <td>Gas Set</td>
            <td>10 Set</td>
            <td><Link to="/contact"><button className="btn btn-color">Click</button></Link></td>
          </tr>
          <tr>
            <td>Argon Welding machine Share Lock</td>
            <td>02 Set</td>
            <td><Link to="/contact"><button className="btn btn-color">Click</button></Link></td>
          </tr>
          <tr>
            <td>Share Lock</td>
            <td>6 Nos</td>
            <td><Link to="/contact"><button className="btn btn-color">Click</button></Link></td>
          </tr>
          <tr>
            <td>Chain Pulley</td>
            <td>11 Nos</td>
            <td><Link to="/contact"><button className="btn btn-color">Click</button></Link></td>
          </tr>
          <tr>
            <td>Scaffolding</td>
            <td>03 Nos</td>
            <td><Link to="/contact"><button className="btn btn-color">Click</button></Link></td>
          </tr>
          <tr>
            <td>High speed cutter</td>
            <td>06 Nos</td>
            <td><Link to="/contact"><button className="btn btn-color">Click</button></Link></td>
          </tr>
          <tr>
            <td>Grinding machine</td>
            <td>15 Nos</td>
            <td><Link to="/contact"><button className="btn btn-color">Click</button></Link></td>
          </tr>
          <tr>
            <td>Hammer Drill machine</td>
            <td>05 Nos</td>
            <td><Link to="/contact"><button className="btn btn-color">Click</button></Link></td>
          </tr>
          <tr>
            <td>Drill machine</td>
            <td>13 Nos</td>
            <td><Link to="/contact"><button className="btn btn-color">Click</button></Link></td>
          </tr>
          <tr>
            <td>Pipe Range Sets</td>
            <td>06 Set</td>
            <td><Link to="/contact"><button className="btn btn-color">Click</button></Link></td>
          </tr>
          <tr>
            <td>Chain Range Sets</td>
            <td>08 Set</td>
            <td><Link to="/contact"><button className="btn btn-color">Click</button></Link></td>
          </tr>
          <tr>
            <td>Rings Sets</td>
            <td>08 Set</td>
            <td><Link to="/contact"><button className="btn btn-color">Click</button></Link></td>
          </tr>
          <tr>
            <td>Socket Range</td>
            <td>04 Set</td>
            <td><Link to="/contact"><button className="btn btn-color">Click</button></Link></td>
          </tr>
          <tr>
            <td>Power Screw gun</td>
            <td>02 Set</td>
            <td><Link to="/contact"><button className="btn btn-color">Click</button></Link></td>
          </tr>
          <tr>
            <td>Adjustable Range</td>
            <td>12 Set</td>
            <td><Link to="/contact"><button className="btn btn-color">Click</button></Link></td>
          </tr>
          <tr>
            <td>Thread cutter machine</td>
            <td>03 Nos</td>
            <td><Link to="/contact"><button className="btn btn-color">Click</button></Link></td>
          </tr>
          <tr>
            <td>Table vice</td>
            <td>02 Nos</td>
            <td><Link to="/contact"><button className="btn btn-color">Click</button></Link></td>
          </tr>
          <tr>
            <td>Table Grinder</td>
            <td>02 Set</td>
            <td><Link to="/contact"><button className="btn btn-color">Click</button></Link></td>
          </tr>
          <tr>
            <td>Pipe cutter</td>
            <td>03 Nos</td>
            <td><Link to="/contact"><button className="btn btn-color">Click</button></Link></td>
          </tr>
          <tr>
            <td>Gas cylinders</td>
            <td>20 Nos</td>
            <td><Link to="/contact"><button className="btn btn-color">Click</button></Link></td>
          </tr>
          <tr>
            <td>Oxygen Bottles</td>
            <td>20 Nos</td>
            <td><Link to="/contact"><button className="btn btn-color">Click</button></Link></td>
          </tr>
          <tr>
            <td>Sheet Vaj Machine</td>
            <td>02 Nos</td>
            <td><Link to="/contact"><button className="btn btn-color">Click</button></Link></td>
          </tr>
          <tr>
            <td>Roller Machine</td>
            <td>01 No</td>
            <td><Link to="/contact"><button className="btn btn-color">Click</button></Link></td>
          </tr>
          <tr>
            <td>Jacketing Group Machine</td>
            <td>02 Nos</td>
            <td><Link to="/contact"><button className="btn btn-color">Click</button></Link></td>
          </tr>
          <tr>
            <td>Sheet Cutter</td>
            <td>03 Nos</td>
            <td><Link to="/contact"><button className="btn btn-color">Click</button></Link></td>
          </tr>
          <tr>
            <td>And different kind of Tools</td>
            <td> </td>
            <td><Link to="/contact"><button className="btn btn-color">Click</button></Link></td>
          </tr> 
        </table>
        </div>
  
        {/* footer */}
        {
          location.pathname==='/tools'&&<Footer></Footer>
        }
        
      </div>
      </>
    )
}

export default Tools
