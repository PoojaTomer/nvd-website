import React from "react";
import { Link } from "react-router-dom";
import Heading01 from "../assets/images/heading01.png";
import Clondbar from "../assets/images/abtcloudbar.png"
import Handcloud from "../assets/images/abt-bulb.png";
import Arrow from '../assets/images/arrow.png';
import Idea from "../assets/images/idea-icon.png";
import HelloBoy from "../assets/images/abt-boy.png";
import Arrowdown from "../assets/images/arrow-down.png";
import Bulblght from "../assets/images/bulblight.gif";
import Helloiamge from "../assets/images/hello-boy01.gif";

const Unique = () =>{
    return(
        <div className="abtuniue01">
                <div className="abtcloud"><img src={Clondbar} alt="Clondbar" /></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heding01"><img src={Heading01} alt="Heading01" /></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                            <div className="handleft"><img src={Bulblght} alt="Bulblght" /></div>
                        </div>
                        <div className="col-md-5">
                            <div className="handright martop01">
                                <h3>Millions of End Goals Reached, Numerous Success Stories Crafted!</h3>
                                <p>As the top digital marketing firm in Dubai with years of expertise in the global market, we are here to set new record-high sales and revenue for your business. Our competent and dedicated marketing specialists back every campaign, making us a firm driven by tested methods. We are committed to breaking new sales records while keeping your bank intact.</p>
                                {/* <Link to="/">Read More <img src={Arrow} alt="arow" /></Link> */}
                                <div className="img1"><img src={Arrowdown} alt="Arrowdown" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="idea001"><img src={Idea} alt="Idea" /></div>
                        </div>
                        <div className="col-md-6">
                            <div className="handright">
                                <h3>Skyrocket your sales</h3>
                                <p>Website designing to promotion on Social Media, our in-house experts cater to all your business demands with excellence.</p>
                                <Link to="/contact-us">One step closer! <img src={Arrow} alt="arow" /></Link>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="helloboy"><img src={Helloiamge} alt="Helloiamge" /></div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Unique;