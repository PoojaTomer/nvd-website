import React, { useState } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import 'antd/dist/antd.css';  
import Arrow from './assets/images/arrow.png';

const ThankYou = () =>{
    const [visible, setVisible] = useState(false);
    return(
        <div className="serchengne01">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Thank you</title>
                <link rel="canonical" href="https://www.newvisiondigital.co/thank-you" />
                <meta name="keywords" content="Career"></meta>
                <meta name="description" content="Career" />
            </Helmet>
            <div className="bredcum001">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Thank you</h1>
                            <p><Link to='/'>Home</Link>  Thank You</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="truenpashion">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Thank you</h4>
                            <p>Thank you for your information. We will get in touch with you soon.</p> 
                            <div className="homserve01">
                            <Link to="/">Visit Website <img src={Arrow} alt="arow" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default ThankYou;