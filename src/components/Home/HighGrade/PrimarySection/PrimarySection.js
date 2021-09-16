import React,{ useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import'./PrimarySection.css'
import { Link } from 'react-router-dom';

const PrimarySection = () => {
    useEffect(() => {
        AOS.init({
          duration : 1000
        });
      }, []);
    return (
        <div className="container-fluid quality">
            <div className="row d-flex justify-content-center">
              <div data-aos="fade-right" className="col-md-3 card m-2 " >
                            <div className="card-body">
                                <h4 className="text-primary">Erection &engineering</h4>
                                <p>we are committed to taking pride in our work and producing a quality service that meets or exceeds each owner's expectations by constructing our work right the first time. If it can be measured, it can be improved upon; this is how our Quality.... </p>
                            </div>
                            <Link to="/erection&engineering">
                                <button className="btn btn-primary my-btn">See More</button>
                                </Link>
              </div>
              <div data-aos="zoom-in" className="col-md-3 card m-2"  >
              <div className="card-body">
                                <h4 className="text-primary">Fashion &Fabrics</h4>
                                <p>we are committed to taking pride in our work and producing a quality service that meets or exceeds each owner's expectations by constructing our work right the first time. If it can be measured, it can be improved upon; this is how our Quality.... </p>
                            </div>
                            <Link to="/fashion&fabrics">
                                <button className="btn btn-primary my-btn">See More</button>
                                </Link>
              </div>
              <div data-aos="fade-right" className="col-md-3 m-2 card "  >
              <div className="card-body">
                                <h4 className="text-primary">HardWare &Tools</h4>
                                <p>we are committed to taking pride in our work and producing a quality service that meets or exceeds each owner's expectations by constructing our work right the first time. If it can be measured, it can be improved upon; this is how our Quality.... </p>
                            </div>
                            <Link to="/hardware&tools">
                                <button className="btn btn-primary my-btn">See More</button>
                                </Link>
              </div>
            </div>
        </div>
    );
};

export default PrimarySection;