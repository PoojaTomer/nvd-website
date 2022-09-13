import React from "react";
import { Link } from "react-router-dom";
import PhotoFrame from "./assets/images/photoframe.png";
import PPCAdvertisment from "./assets/images/ppc-advertisment.png";
import Googleicon from "./assets/images/google-icon.png";
import Facebookicon from "./assets/images/facebook-icon.png";
import Linkdinicon from "./assets/images/linkdin-icon.png";
import Instagramicon from "./assets/images/instagram-icon.png";
import Paidpower from "./assets/images/paid-power.png";
import Asfportfolio from "./assets/images/asf-potfolio.png";
import Isoknportfolio from "./assets/images/iskon-portfolio.png";
import Ayodhyaportfoilo from "./assets/images/ayodhya-portfolio.png";
import Greensloud from "./assets/images/green-cloud.png";
import Calltoactionpage from "./components/Calltoactionpage";
import Helmet from "react-helmet";

const PaidAdvertising = () =>{
    return(
        <div className="serchengne01">
            <Helmet>
                <meta charSet="utf-8" />
                <title>PPC Advertising Agency Dubai | PPC Services in Dubai | New Vision Digital</title>
                <link rel="canonical" href="https://www.newvisiondigital.co/paid-advertising" />
                <meta name="keywords" content="Best paid marketing services , Best paid marketing services dubai, Top Paid marketing agencies in dubai, pay per click advertising services, PPC services in dubai"></meta>
                <meta name="description" content="Drive quality leads and customers to your website with New Vision Digital’s PPC services in Dubai. We are the top PPC advertising agency in Dubai extending the finest quality PPC Advertising in Dubai" />
            </Helmet>
            <div className="bredcum001">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Paid Advertising</h1>
                            <p><Link to='/'>Our Services</Link>  Paid Advertising</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="socialmeia01">
                <div className="photframe"><img src={PhotoFrame} alt="PhotoFrame" /></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12"><h3>Skyrocket Your Sales Like Never Before With <br />PPC Campaigns by New Vision Digital</h3></div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="socialmeia01txt">
                                <p>New Vision Digital extends exceptional Pay-per-click (PPC) campaigns to help businesses promote products and services online. Drive quality leads and customers to your website with strategically formulated, optimised, and ROI-focussed campaigns that guarantee online marketing success. Avail of our PPC services to knead your growth graph today. </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="socialmeia01img"><img src={PPCAdvertisment} alt="PPCAdvertisment" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="paidadvetis01">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3>Find Creativity, Technology, Finesse <br />All at One Place.</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="socailbox05">
                                <img src={Googleicon} alt="Googleicon" />
                                <h4>Google Ads</h4>
                                <p>Pay to play search Ads, Display Ads, and shopping ads on Google Search and Maps for more clicks to your website or calls to your business.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="socailbox05">
                                <img src={Facebookicon} alt="Facebookicon" />
                                <h4>Facebook Ads</h4>
                                <p>Gain more visibility to your core website content-all with a creative Facebook ad for your product or service.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="socailbox05">
                                <img src={Linkdinicon} alt="Linkdinicon" />
                                <h4>Linkedin Ads</h4>
                                <p>Expand your network in the professional world and maximise B2B growth with Linkedin ads for your brand.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="socailbox05">
                                <img src={Instagramicon} alt="Instagramicon" />
                                <h4>Instagram Ads</h4>
                                <p>Get going with the latest trends and reach new customers by elevating your brand with Instagram ads.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="paidpower">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3>Prowess the Power of <br />Advertising to Breakthrough <br />All the Noise</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={Paidpower} alt="Paidpower" />
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <li>Bridge the gap between what you want to say and what your customers want to hear with our detailed keyword research</li>
                                <li>Optimise landing pages in terms of content and design for better leads & conversions</li>
                                <li>Drive conversions to website and bucks to your bank account with our 100 percent successful campaigns</li>
                                <li>Settle on the best ad copy with A/B testing</li>
                                <li>Highlight brand’s key strengths and attract customers to websites with compelling Ad copies </li>
                                <li>Apply art with technology, content with credibility and vision with reasoning to craft creatives that help your brand scale heights.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ourportfolio">
                <div className="ourportfolioslod"><img src={Greensloud} alt="Greensloud" /></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12"><h3>Our Portfolio</h3></div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="porfoilobox">
                                <div className="porfoiloboximg"><img src={Asfportfolio} alt="Asfportfolio" /></div>
                                <div className="porfoiloboxbtn"><Link to="/">View Website</Link></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="porfoilobox">
                                <div className="porfoiloboximg"><img src={Isoknportfolio} alt="Isoknportfolio" /></div>
                                <div className="porfoiloboxbtn"><Link to="/">View Website</Link></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="porfoilobox">
                                <div className="porfoiloboximg"><img src={Ayodhyaportfoilo} alt="Ayodhyaportfoilo" /></div>
                                <div className="porfoiloboxbtn"><Link to="/">View Website</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Calltoactionpage />
        </div>
    )
}

export default PaidAdvertising;