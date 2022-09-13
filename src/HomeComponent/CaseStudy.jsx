import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";
import Arrow from '../assets/images/arrow.png';
import ProjectOne from "../assets/images/project01.png";
import VictryIcon from "../assets/images/case-victry.png";
import Perpelcloud from "../assets/images/perpel-cloud-bar.png";
import CaseCloud from "../assets/images/case-cloud.png";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Websiteicon from "../assets/images/website-icon.png";
import Seoicon from "../assets/images/seo-icon.png";
import Smoicon from "../assets/images/smo-icon.png";
import Paidadsicon from "../assets/images/pais-ads.png";
import Brandingicon from "../assets/images/branding-icon.png";
import Achivemnticonone from "../assets/images/achivement-icon01.png";
import Achivemnticontwo from "../assets/images/achivement-icon02.png";
import Achivemnticonthree from "../assets/images/achivement-icon03.png";
import Achivemnticonfour from "../assets/images/achivement-icon04.png";
import Gientportfolio from "../assets/images/giant-portfolio.png";


const CaseStudy = () =>{

    const [loaded,setLoaded] = useState(false);
    useEffect(()=>{
        setLoaded(true);
        return ()=>{
            setLoaded(false);
        }
    },[])

    const responsive = {
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
    

    return(
        <div className="casestudy newcasestuy">
           <div className="casestudyclod"><img src={Perpelcloud} alt="Perpelcloud" /></div>
              {/*<div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="casesudyleft">
                            <h3>Case Study</h3>
                            <p>From micro-steps to macro impact. Read how we have helped businesses.
                            </p>
                            <Link to="/">Read More <img src={Arrow} alt="arow" /></Link>
                        </div>
                    </div>
                    <div className="col-md-8"><div className="casesudyright"><img src={ProjectOne} alt="ProjectOne" /></div></div>
                </div>
            </div>
    <div className="casevicrty"><img src={VictryIcon} alt="VictryIcon" /></div> */}
            <div className="newslidercase">
                <h3>Our Case Study</h3>
                <div className="container">
                {loaded?
                    <OwlCarousel className='owl-theme' loop margin={10} items={2} responsive={responsive} dots={false} nav={true} autoPlay={true}>
                        <div className='item'>
                            <div className="newcasebox01">
                                <div className="newcasebox01left"><img src={Gientportfolio} alt="Gientportfolio" /></div>
                                <div className="newcasebox01right">
                                    <h4>Giant Migration</h4>
                                    <ul>
                                        <li><img src={Websiteicon} alt="Websiteicon" /><span>Website</span></li>
                                        <li><img src={Seoicon} alt="Seoicon" /><span>SEO</span></li>
                                        <li><img src={Smoicon} alt="Smoicon" /><span>SMO</span></li>
                                        <li><img src={Paidadsicon} alt="Paidadsicon" /><span>Paid Ads</span></li>
                                        <li><img src={Brandingicon} alt="Brandingicon" /><span>Branding</span></li>
                                    </ul>
                                    <p>Giant Migration is an immigration company catering to the diverse immigration needs of people from across the world. We incorporated their vision into our strategies and developed an incredibly informative and directive website. </p>
                                </div>
                                <div className="newcasebox01full">
                                    <h5>Achievements</h5>
                                    <ul>
                                        <li>
                                            <img src={Achivemnticonone} alt="Achivemnticonone" />
                                            <p><span>6000+</span>Conversions through paid channels (Social + Google)</p>
                                        </li>
                                        <li>
                                            <img src={Achivemnticontwo} alt="Achivemnticontwo" />
                                            <p><span>191.20%</span>increment in overall website traffic</p>
                                        </li>
                                        <li>
                                            <img src={Achivemnticonthree} alt="Achivemnticonthree" />
                                            <p><span>76k</span>Social Engagement</p>
                                        </li>
                                        <li>
                                            <img src={Achivemnticonfour} alt="Achivemnticonfour" />
                                            <p><span>10+</span>top keywords ranking on 1st page of Google SERP</p>
                                        </li>
                                    </ul>
                                    {/* <div className="newcasebox01fullbtn"><Link to="/">View Case Study <img src={Arrow} alt="Arrow" /></Link></div> */}
                                </div>
                            </div>
                        </div>                        
                    </OwlCarousel>
                    :""
                }
                </div>
            </div>
        </div>
    )
}

export default CaseStudy;