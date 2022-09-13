import React from "react";
import { Link } from "react-router-dom";
import Arrow from '../assets/images/arrow.png';
import Sun from '../assets/images/sun.png'

const Banner = (props) =>{
    return(        
        <div className="dubaibanner">                               
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sun01"><img src={Sun} alt="arow" /></div>
                        <div className="banrtext">
                            <h3>a new vision for your brand awaits you!</h3>
                            <h4>A Marketing Agency driven <br />by Results</h4>
                            <Link to="/contact-us">Quick Enquiry <img src={Arrow} alt="arow" /></Link>
                            <Link to="" onClick={()=>props.toogleBtn(true)}>View Services <img src={Arrow} alt="arow" /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bancloud">
                <div id="clouds">
                    <div className="cloud x1"></div>
                    <div className="cloud x2"></div>
                    <div className="cloud x3"></div>
                    <div className="cloud x4"></div>
                    <div className="cloud x5"></div>
                </div>
            </div>   
        </div>
    )
}

export default Banner;