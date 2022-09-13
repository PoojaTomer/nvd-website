import React from "react";
import { Link } from "react-router-dom";
import Star from "../assets/images/star.png";
import Arrowblack from '../assets/images/arrow-black.png';  
import Phonewhite from '../assets/images/call-white.png';  
import Callboy from "../assets/images/thinking.png"



const CalltoAction = () =>{
    return(
        <div className="callaction">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="calltext01">
                            <h3><img src={Star} alt="Star" /> Is It Website Design <span>You’re Looking For?</span></h3>
                            <Link to="/contact-us" className="yellowbtn">Get in Touch <img src={Arrowblack} alt="Arrowblack" /></Link>
                            <a href="tel:971547064859"><img src={Phonewhite} alt="Phonewhite" /> +971 5470 64859</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="calltext02">
                            <p>Digital marketing is a powerful tool for growing your company. To speak with one of our seasoned digital strategists, please get in touch with us. With our help, your marketing will be more effective. We promise a new marketing strategy that will outperform your present marketing plan.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12"><div className="callboy01"><img src={Callboy} alt="Callboy" /> </div></div>
                </div>
            </div>
        </div>
    )
}

export default CalltoAction;