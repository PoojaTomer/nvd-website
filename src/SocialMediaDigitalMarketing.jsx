import React from "react";
import { Link } from "react-router-dom";
import Socialrightimg from "./assets/images/socailright.png";
import PhotoFrame from "./assets/images/photoframe.png";
import Skyblue from "./assets/images/skyblue.png"
import Calltoactionpage from "./components/Calltoactionpage";
import Greensloud from "./assets/images/green-cloud.png";
import Campainsocial from "./assets/images/campainone.png";
import Production from "./assets/images/production.png";
import Drivecontent from "./assets/images/dynamicwrite.png";
import Undertand from "./assets/images/unstandwhat.png";
import Socialpostone from "./assets/images/social-post-one.png";
import Socialposttwo from "./assets/images/social-post-tow.png";
import Socialpostthree from "./assets/images/social-post-thre.png";
import Socialpostfour from "./assets/images/social-post-four.png";
import Helmet from "react-helmet";
import GetAQuoteButton from "./components/GetAQuoteButton";


const SocialMediaDigitalMarketing = () =>{
    return(
        <div className="serchengne01">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Social Media Marketing Services | Social Media Marketing Agency Dubai | New Vision Digital</title>
                <link rel="canonical" href="https://www.newvisiondigital.co/social-media-marketing" />
                <meta name="keywords" content="social media advertising agency, social media advertising agency Dubai, social media marketing agency, best social media marketing agency Dubai, social media marketing company, social media marketing company Dubai"></meta>
                <meta name="description" content="Looking for the best social media agency in UAE for social media marketing services? Connect with New Vision Digital, a leading social media company in Dubai, for all your social media services." />
            </Helmet>
            <div className="bredcum001">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Social Media Marketing</h1>
                            <p><Link to='/'>Our Services</Link>  Social Media Marketing</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="socialmeia01">
                <div className="photframe"><img src={PhotoFrame} alt="PhotoFrame" /></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12"><h3>Think, Explore, <br />And Meet Your Brand’s Digital Life With  <br />New Vision Digital</h3></div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="socialmeia01txt">
                                <p>In today’s world, every second person is glued to the screens of their desktops and smartphones almost every day, looking for stuff online. In the midst of this digitalisation, social media has paved its way to becoming the biggest gateway for expanding business by promoting services. Yet, a lot of businesses find it challenging to keep up with these rapidly changing trends. So if these apps stress you out as well, worry not! At New Vision Digital, once we make commitments, we ensure fulfiling all our promises to the clients. Our team will give you the relief you deserve from the stress of managing your social media accounts. </p>
                                <p>New Vision Digital offers competitive services to assist brands in driving ROI from social media.. Get your brand the votes of confidence from social media networks such as Facebook, Instagram, and Linkedin with our organic approach. Connect with us to get started today. </p>
                            </div>
                            <GetAQuoteButton /><br /><br/>
                        </div>
                        <div className="col-md-6">
                            <div className="socialmeia01img"><img src={Socialrightimg} alt="Socialrightimg" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="seosection02 skybluebg">
                <div className="seosection02img"><img src={Skyblue} alt="Skyblue" /></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3>Discover All the Social Media Noise With Our Marketing</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <ul>
                                <li>Set up the right social media platforms for your brand that will fuel its growth.</li>
                                <li>Crisp, unique and value-first content- that guarantees the success of your campaign.</li>
                                <li>We don’t post just for the sake of posting. With our creative posts, we’ll make sure you reach new audiences and boost your leads</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <li>Zeroing to your target market that actually turns into customers.</li>
                                <li>Growing engagement on social media channels by focussing on key performance indicators such as likes, comments and actual sales.</li>
                                <li>Influencer marketing that worth your time and penny.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="seosection03">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3>Organise, Optimise, And Analyse <br />We’ll Do it All For you!</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Set a Campaign:</h4>
                            <p>Get a clear picture of your target market and how your content will draw them to your website through our extensive keyword research and engagement campaigns. Our marketing genies will assist in setting realistic goals and tailor a strategy that fits your purpose. </p>
                        </div>
                        <div className="col-md-6">
                            <div className="stertyimg"><img src={Campainsocial} alt="Campainsocial" /></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="stertyimg"><img src={Production} alt="Production" /></div>
                        </div>
                        <div className="col-md-6">
                            <h4>Production of Content: </h4>
                            <p>Are you bored of reading the same content across distinct websites? Don’t worry! We don’t bite. We create scroll-stopping content that edges out the competition. Get customised content that conveys your message and targets the customer market.</p>
                        </div>                        
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Deliver dramatic results:</h4>
                            <p>Make the best use of our marketing skills by fusing the right content for your social media channels with our organic approach and get ROI-driven results. </p>
                        </div>
                        <div className="col-md-6">
                            <div className="stertyimg"><img src={Drivecontent} alt="Drivecontent" /></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="stertyimg"><img src={Undertand} alt="Undertand" /></div>
                        </div>
                        <div className="col-md-6">
                            <h4>Understand what works best for you</h4>
                            <p>A social media campaign without analysis of data and strategy refinement is like tea without sugar. We’ll analyse and refine our strategies as and when required.</p>
                        </div>                        
                    </div>
                </div>
            </div>
            <div className="ourportfolio socialpor01">
                <div className="ourportfolioslod"><img src={Greensloud} alt="Greensloud" /></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12"><h3>Our Portfolio</h3></div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="porfoilobox">
                                <div className="porfoiloboximg"><img src={Socialpostone} alt="Socialpostone" /></div>
                                {/* <div className="porfoiloboxbtn"><Link to="/">View Post</Link></div> */}
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="porfoilobox">
                                <div className="porfoiloboximg"><img src={Socialposttwo} alt="Socialposttwo" /></div>
                                
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="porfoilobox">
                                <div className="porfoiloboximg"><img src={Socialpostthree} alt="Socialpostthree" /></div>
                              
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="porfoilobox">
                                <div className="porfoiloboximg"><img src={Socialpostfour} alt="Socialpostfour" /></div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Calltoactionpage Title="" subTitle="" />
        </div>
    )
}

export default SocialMediaDigitalMarketing;