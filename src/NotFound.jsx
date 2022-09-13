import React, { useState } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import 'antd/dist/antd.css';  
import Arrow from './assets/images/arrow.png';

const NotFound = () =>{
    return(
        <div className="serchengne01">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Not Found</title>
                <link rel="canonical" href="https://www.newvisiondigital.co/not-found" />
                <meta name="keywords" content="Career"></meta>
                <meta name="description" content="Career" />
            </Helmet>
            <div className="bredcum001">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Not Found</h1>
                            <p><Link to='/'>Home</Link>  Not Found</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="truenpashion">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3><span>Oop's</span> you are on the wrong way</h3>
                            <p>We are sorry. But the page you are looking for is not available. Still no warries, we will help you further. You can search what's is your  mind or visit homepage to know more about us</p>
                            <div className="homserve01">
                            <Link to="/">Back To Homepage <img src={Arrow} alt="arow" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default NotFound;