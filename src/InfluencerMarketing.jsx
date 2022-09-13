import React from "react";
import { Link } from "react-router-dom";
import Influencer1 from "./assets/images/influncer1.jpg";
import PhotoFrame from "./assets/images/photoframe.png";
import Skyblue from "./assets/images/skyblue.png"
import Influencer2 from "./assets/images/influncer2.jpg";
import Influencer3 from "./assets/images/influncer3.jpg";
import Influencer4 from "./assets/images/influncer4.jpg";
import Influencer5 from "./assets/images/influncer5.jpg";
import Influencer6 from "./assets/images/influncer6.jpg";
import Influencer7 from "./assets/images/influncer7.jpg";
import Influencer8 from "./assets/images/influncer8.jpg";
import Arrowblack from './assets/images/arrow-black.png';
import Phonewhite from './assets/images/call-white.png';
import Arrow from './assets/images/arrow.png';
import Helmet from "react-helmet";
import GetAQuoteButton from "./components/GetAQuoteButton";


const InfluencerMarketing = () =>{
    return(
        <div className="serchengne01">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Influencer Marketings</title>
                <link rel="canonical" href="https://www.newvisiondigital.co/social-media-marketing" />
                <meta name="keywords" content="social media advertising agency, social media advertising agency Dubai, social media marketing agency, best social media marketing agency Dubai, social media marketing company, social media marketing company Dubai"></meta>
                <meta name="description" content="Looking for the best social media agency in UAE for social media marketing services? Connect with New Vision Digital, a leading social media company in Dubai, for all your social media services." />
            </Helmet>
            <div className="bredcum001">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Influencer Marketing</h1>
                            <p><Link to='/'>Our Services</Link> Influencer Marketing</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="socialmeia01">
                <div className="photframe"><img src={PhotoFrame} alt="PhotoFrame" /></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12"><h3>Take your Influencer Marketing up a Notch With<br/>New Vision Digital</h3></div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="socialmeia01txt">
                                <p>The last couple of years saw a dramatic change in the social media industry- particularly in the relationship between businesses and influencers. What’s more - as an increasing number of businesses are focussing on creating long term collaborations with influencers that can provide them with straightforward Returns On Investment.</p>
                                <p>To help you connect and work with influencers, we at New Vision Digital offer phenomenal influencer marketing services. We’ll fuel the most effective marketing campaign that will pace the growth of your business and drive more revenue.</p>
                                {/* <div className="ser-quote">
                                <a href="javascript:void();">Get a Quote <img src={Arrow} alt="arow" /></a>
                                </div> */}
                                <GetAQuoteButton />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="socialmeia01img"><img src={Influencer1} alt="Influencer1" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="seosection02 skybluebg">
                <div className="seosection02img"><img src={Skyblue} alt="Skyblue" /></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3>Customer Attention, Engagement and Growth All at One Place</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <ul>
                                <li>Get maximum reach on your social media handles by collaborating with niche-specific influencers</li>
                                <li>Boost your brand’s image and value across diverse channels through exemplary influencer marketing strategies</li>
                                <li>Unlock and engage your audience with unique marketing campaigns</li>
                                
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <li>Reach new audiences for your brand by leveraging the influencers’ social media followings through unique and creative content</li>
                                <li>Obtain customer and influencer insights through campaign reports for enhancing your products and services.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="seosection03 inf-sec3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3>From Managing your Relationships with Influencers to Delivering a Report Here’s How We Do It</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Influencer Relationship Management</h4>
                            <p>Over the past few years, our team of experts have managed to form relationships with numerous influencers across diverse niches. We’ll assist you to manage your relations with content creators that have an established presence on social media platforms such as Instagram, Snapchat, Youtube and Twitter.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="stertyimg"><img src={Influencer2} alt="Influencer2" /></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="stertyimg"><img src={Influencer3} alt="Influencer3" /></div>
                        </div>
                        <div className="col-md-6">
                            <h4>Creative Strategies</h4>
                            <p>Our team is filled with creative minds that make sure to influence the mind of your audience, draw them towards your brand, make them act, and leave a lasting impression.</p>
                        </div>                        
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Content Strategizing & Creation for Social Media</h4>
                            <p>We’ll strategise and create unique and eye-catching content that aligns with your campaign’s structure, content and requirements.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="stertyimg"><img src={Influencer4} alt="Influencer4" /></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="stertyimg"><img src={Influencer5} alt="Influencer5" /></div>
                        </div>
                        <div className="col-md-6">
                            <h4>Coverage of Influencer’s Events</h4>
                            <p>Our team will put extended efforts to create brand awareness and exposure through connecting you with the influencers that fit your goal and business.</p>
                        </div>                        
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Select Influencers from Our Analytics</h4>
                            <p>Select the ideal influencers from our analytics that fit your campaign. We’ll analyse and identify the right influencers as per your niche and present the analytics for your perusal.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="stertyimg"><img src={Influencer6} alt="Influencer6" /></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="stertyimg"><img src={Influencer7} alt="Influencer7" /></div>
                        </div>
                        <div className="col-md-6">
                            <h4>Content Distribution</h4>
                            <p>We’ll use the biggest networks in your industry to distribute your influencer content and reach out to millions of people.</p>
                        </div>                        
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Accurate Reporting</h4>
                            <p>Our team is equipped to deliver accurate and customised reports of metrics that suit your brand’s goals. Moreover, we’ll also provide consumer and influencer insights that can help you improve your product or services.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="stertyimg"><img src={Influencer8} alt="Influencer8" /></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="pagecalaction001">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="calltext01  pagecalaction01">
                            <h5>Trust, Connect, Grow your Brand with Us</h5>
                            <h6>Reach out to our experts to help your brand scale heights today.</h6>
                            <Link to="/contact-us" className="yellowbtn">Get in Touch <img src={Arrowblack} alt="Arrowblack" /></Link>
                            <a href="tel:97143321900 "><img src={Phonewhite} alt="Phonewhite" /> +971 4332 1900</a>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
            
        </div>
    )
}

export default InfluencerMarketing;