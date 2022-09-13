import React from "react";
import { Link } from "react-router-dom";
import Headingservice from "../assets/images/heading03.png";
import Arrow from '../assets/images/arrow.png';
import WebsiteSerive from "../assets/images/website-service.jpg";
import SocialService from "../assets/images/social-service.png";
import SeoService from "../assets/images/seo-service.png";
import PaiadsService from "../assets/images/paid-ads-services.png";
import MobileappService from "../assets/images/mobile-application-service.png";
import Crwonleft from "../assets/images/crown-left.png";
import Cameraright from "../assets/images/camara.png";
import Heartleft from "../assets/images/heart.png";
import Pictureright from "../assets/images/photoframe.png";
import Mapright from "../assets/images/map-arrow.png";
import Crownleftone from "../assets/images/crownleft.gif";
import Websiteservceone from "../assets/images/website-service-one.gif";
import Socailserviceone from "../assets/images/social-service-one.gif";
import Seoserivceone from "../assets/images/seo-service-one.gif";
import Paidadsone from "../assets/images/paid-ads-services-one.gif";
import Mobileappdevelopment from "../assets/images/mobile-application-service.gif";


const Services = () =>{
    return(
        <div className="services01" id="services">
            <div className="crownleft"><img src={Crownleftone} alt="Crownleftone" /></div>
            <div className="cameraright"><img src={Cameraright} alt="Cameraright" /></div>
            <div className="heartleft"><img src={Heartleft} alt="Heartleft" /></div>
            <div className="pictureright"><img src={Pictureright} alt="Pictureright" /></div>
            <div className="mapright"><img src={Mapright} alt="Mapright" /></div>
            <div className="cameraleft"><img src={Cameraright} alt="Cameraright" /></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="serheding01">
                            <img src={Headingservice} alt="Headingservice" />
                            <h3>Creatively Led, Strategically Driven!!!</h3>
                            <p>Our digital marketing wizards have the know-how to take your company to new heights.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="homserve01">
                            <h3>Website <br />Design & Development</h3>
                            <p>Your presence in the digital realm is highly dependent on the performance of your website. We bring website design and development solutions catered towards your success.</p>
                            <Link to="/website-development">Read More <img src={Arrow} alt="arow" /></Link>
                        </div>
                    </div>
                    <div className="col-md-4"><div className="homserve01img"><img src={Websiteservceone} alt="Websiteservceone" /></div></div>
                </div>
                <div className="row">
                    <div className="col-md-4"><div className="homserve01img"><img src={Socailserviceone} alt="Socailserviceone" /></div></div>
                    <div className="col-md-8">
                        <div className="homserve01">
                            <h3>Social Media Optimization <br />& Marketing</h3>
                            <p>Be present where the world is. We help you make a mark on social media platforms where your target audience is currently scrolling through your competitor’s feed.</p>
                            <Link to="/social-media-marketing">Read More <img src={Arrow} alt="arow" /></Link>
                        </div>
                    </div>                    
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="homserve01">
                            <h3>Search Engine Optimization</h3>
                            <p>A beautiful website that lacks optimization is as good as Digital security safe without a key. To open the door of opportunities you need the key of Search Engine Optimization.  </p>
                            <Link to="/search-engine-optimization">Read More <img src={Arrow} alt="arow" /></Link>
                        </div>
                    </div>
                    <div className="col-md-4"><div className="homserve01img"><img src={Seoserivceone} alt="Seoserivceone" /></div></div>
                </div>
                <div className="row">
                    <div className="col-md-4"><div className="homserve01img"><img src={Paidadsone} alt="Paidadsone" /></div></div>
                    <div className="col-md-8">
                        <div className="homserve01">
                            <h3>Paid Ads</h3>
                            <p>Want to beat your competition and ditch the queue? Paid ads are your answer. Appear on social media platforms of your target audience, thereby improving your brand visibility. </p>
                            <Link to="/paid-advertising">Read More <img src={Arrow} alt="arow" /></Link>
                        </div>
                    </div>                    
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="homserve01">
                            <h3>Mobile app development</h3>
                            <p>One-stop solution for all your digital marketing needs. From mobile app development to Profile optimization and more, our expert strategy will take your brand sales to the roof. </p>
                            <Link to="/mobile-apps-development">Read More <img src={Arrow} alt="arow" /></Link>
                        </div>
                    </div>
                    <div className="col-md-4"><div className="homserve01img"><img src={Mobileappdevelopment} alt="Mobileappdevelopment" /></div></div>
                </div>
            </div>
        </div>
    )
}

export default Services;