import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import Cityimage from "../assets/images/fotcityimage.jpg";
import Logo from "../assets/images/logo.png";
import Partnerone from "../assets/images/partner01.png";
import Partnertwo from "../assets/images/partner02.jpg";
import Partnerthree from "../assets/images/partner03.png";
import Whatsboy from "../assets/images/whats-chat2.gif";
import Whatsicon from "../assets/images/whats-icon.png";
import Facebook from "../assets/images/facebook.png";
import Instgram from "../assets/images/instagram.png";
import Twitter from "../assets/images/twitter.png";
import Linkdin from "../assets/images/linkdin.png";
import Dubaiflug from "../assets/images/dubai-flag.png";
import Englangflug from "../assets/images/uk_flag01.png";
import Indiaflug from "../assets/images/india_fleg01.png";
import Unitedsteflug from "../assets/images/usflag.png";
import Austaliaflug from "../assets/images/austrliaflug.png";
import Email from '../assets/images/email.png';
import Phone from '../assets/images/call.png';

import { useLocation } from 'react-router-dom';

const Footer = (props) =>{
    const { pathname } = useLocation();
    useEffect(() =>{
        // console.log("pathname",pathname);
        // window.scrollTo(0,0);
        var element = document.getElementById("headerPanel");
        element.scrollIntoView();
        return props.children;
    }, [pathname])
    return(
        <div className="footer01">
            
            <div className="fotwhats">
                <a href="https://web.whatsapp.com/send?phone=971569977333" target="_blank"><img src={Whatsboy} alt="Whatsboy" className="whts01" /></a>
                <a href="https://wa.me/971569977333"  target="_blank"><img src={Whatsicon} alt="Whatsicon" className="whts02" /></a>
            </div>
            <div className="fixedsocail">
                <ul>
                    
                    <li><a href="https://www.facebook.com/newvisiondigitaluae" target="_blank"><img src={Facebook} alt="Facebook" /></a></li>
                    <li><a href="https://www.instagram.com/newvisiondigitaluae/" target="_blank"><img src={Instgram} alt="Instgram" /></a></li>
                    <li><a href="https://twitter.com/Newvisiondigitl" target="_blank"><img src={Twitter} alt="Twitter" /></a></li>
                    <li><a href="https://www.linkedin.com/company/new-vision-digital" target="_blank"><img src={Linkdin} alt="Linkdin" /></a></li>                    
                </ul>
            </div>
            <div className="footertop">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="fotlocation01">
                                <h3>Our Offices</h3>
                                <ul>
                                    <li className="dubai">
                                        <img src={Dubaiflug} alt="Dubaiflug" />
                                        <p><strong>UAE</strong>The Curve Building, <br/>M-46, Mezzanine floor Plot No. 358-574 - Sheikh Zayed Rd, Al Quoz 3, PO Box No. - 391048, Dubai, UAE</p>
                                    </li>
                                    <li className="england">
                                        <img src={Englangflug} alt="Englangflug" /> 
                                        <p><strong>UK</strong>42 Brunswick Terrace, <br/>Hove, East Sussex BN3 <br/>1HA, GB</p>
                                    </li>
                                    <li className="noida">
                                        <img src={Indiaflug} alt="Indiaflug" />
                                        <p><strong>India</strong>Udyog Marg, C 89 c, <br/>2nd Floor, Sector 8, Noida, <br/>Uttar Pradesh 201301, IN</p>
                                    </li>
                                    <li className="unitedtate">
                                        <img src={Unitedsteflug} alt="Unitedsteflug" />
                                        <p><strong>United States</strong>1317 Edgewater Dr, <br/>Suite 897, Orlando, Florida <br/>32804, US</p>
                                    </li>
                                    <li className="australia">
                                        <img src={Austaliaflug} alt="Austaliaflug" />
                                        <p><strong>Australia</strong>83 York St, Suite 109, Level 1, <br/>Sydney, New South Wales <br/>2000, AU</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
            <div className="footerbotm">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="fotcityimage"><img src={Cityimage} alt="Cityimage" /></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="foot001">
                                <Link to="/"><img src={Logo} alt="Logo" /></Link>
                                <p>New Vision Digital is an innovative online marketing agency offering a myriad of integrated web marketing services to business across the world. We pride ourselves in providing cutting edge solutions to our clients.</p>
                                <ul>
                                    <li><img src={Partnerone} alt="Partnerone" /></li>
                                    <li><img src={Partnertwo} alt="Partnertwo" /></li>
                                    <li><img src={Partnerthree} alt="Partnerthree" /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="foot002">
                                <h3>Important Links</h3>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about-us">About Us</Link></li>
                                    <li><button onClick={()=>props.toogleBtn(true)}>Our Services</button></li>
                                    <li><a href="https://www.newvisiondigital.co/blog/">Blog</a></li>
                                    <li><Link to="/contact-us">Contact Us</Link></li>
                                    <li><Link to="/internship">Internship</Link></li>
                                    <li><Link to="/career">Career</Link></li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="foot002">
                                <h3>Our Services</h3>
                                <ul>
                                    <li><Link to="/search-engine-optimization">Search Engine Optimization</Link></li>
                                    <li><Link to="/social-media-marketing">Social Media Marketing</Link></li>
                                    <li><Link to="/paid-advertising">Paid Advertising</Link></li>
                                    <li><Link to="/php-development">PHP Development</Link></li>
                                    <li><Link to="/wordpress-development">Wordpress Development</Link></li>
                                    <li><Link to="/mobile-apps-development">Mobile Apps Development</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="foot002">
                                <h3>Reach Us</h3>
                                <ul>
                                    <li>The Curve Building, M-46, Mezzanine floor Plot No. 358-574 - Sheikh Zayed Rd, Al Quoz 3, PO Box No. - 391048, Dubai, United Arab Emirates</li>
                                    <li><img src={Phone} alt="Phone" /> +971 4332 1900</li>
                                    <li><img src={Email} alt="Email" /> hello@newvisiondigital.co</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
            <div className="fotcopy">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p>© 2022 New Vision Digital</p>
                        </div>
                    </div>
                </div>
            </div>    
            {/* 
                <ScrollToTop showUnder={160}>
                    <span><img src={Scrollicon} alt="Scrollicon" /></span>
                </ScrollToTop>
            */}
        </div>
    )
}

export default Footer;