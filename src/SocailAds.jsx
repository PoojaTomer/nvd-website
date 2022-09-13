import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import PhotoFrame from "./assets/images/photoframe.png";
import Incrsesal from "./assets/images/inrsale01.png";
import Incrsesale2 from "./assets/images/viwers-img01.png";
import pintrest from "./assets/images/pintrest-icon.png";
import Facebookicon from "./assets/images/facebook-icon.png";
import Linkdinicon from "./assets/images/linkdin-icon.png";
import Instagramicon from "./assets/images/instagram-icon.png";
import Youtubeicon from "./assets/images/youtube-icon.png";
import Posticon from "./assets/images/posts-icon.png";
import Higericon from "./assets/images/higer-icon.png";
import Followericon from "./assets/images/follewrs-icon.png";
import Ledsicon from "./assets/images/leads-icon.png";
import Sitback from "./assets/images/sit-back.png";
import Arrowblack from './assets/images/arrow-black.png';
import Phonewhite from './assets/images/call-white.png';
import GetAQuoteButton from "./components/GetAQuoteButton";

const Socialads = () =>{
    return(
        <div className="serchengne01">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Social Media Advertising Company | Social Media Advertising Services Dubai | New Vision Digital</title>
                <link rel="canonical" href="https://www.newvisiondigital.co/social-advertising" />
                <meta name="keywords" content="Social Media Advertising Company, Social Media Advertising Services Dubai, New Vision Digital"></meta>
                <meta name="description" content="Showcase your business on social media platforms with social media advertising. We are the top social media advertising company in Dubai extending a plethora of social media advertising services. " />
            </Helmet>
            <div className="bredcum001">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Social Advertising</h1>
                            <p><Link to='/'>Home</Link>  Social Advertising</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="socialmeia01">
                <div className="photframe"><img src={PhotoFrame} alt="PhotoFrame" /></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12"><h3>Increase Your Sales Exponentially with <br />Social Media Advertising </h3></div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="socialmeia01img"><img src={Incrsesal} alt="Incrsesal" /></div>
                        </div>
                        <div className="col-md-6">
                            <div className="socialmeia01txt">
                                <p>The digital world is brimming with businesses and in this competitive landscape, rising to prominence can only be done with strategic campaigning. New Vision Digital works for a variety of business niches and aims to enhance conversion and retention rates with increased customer acquisition. We know that your brand’s visibility is a top priority for you and this can be maximized immediately with effective social media advertising. Utilizing social media in an intelligent way will provide incredible opportunities for growth, foster leads and transform your viewers into customers!</p>
                            </div>
                        </div>                        
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="socialmeia01txt soccaladstxt01">
                                <h3>Do You Want To Convert Your Viewers Into Customers?</h3>
                                <p>Social Media ads are a blessing when it comes to targeting your audience and creating instant awareness about your brand. You might not know but in the last couple of years, social media ads have gained an edge over other digital marketing methods.So, if you have big goals for your company, NVD can help in harnessing the power of social media for your brand. With effective and engaging ads for Facebook, Instagram, LinkedIn, and other social media platforms, we can extract what you need – higher and faster ROI!</p>
                                <p>With each ad campaign, we target specific audience based on a set criterion. Social ads are also not big on budget as you only get to pay for the number of impressions your ads get. Isn’t that something you would want to invest in?</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="socialmeia01img"><img src={Incrsesale2} alt="Incrsesale2" /></div>
                        </div>
                    </div>
                    <GetAQuoteButton />
                    {/* <div className="row">
                        <div className="col-md-12">
                            <div className="incrsefolower">Increase Your Follower Growth</div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="paidadvetis01">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="paidadvrtxt">
                                <h3>Social Media Platforms Where You Must Advertise</h3>
                                <p>There is a myriad of social media platforms available but which one of them is right for you to display your social media ads? You cannot simply follow the trend and hop on a wagon of social media advertising because it may never deliver profitable results in favour of your business. </p>
                                <p>At New Vision Digital, we help you in determining which social media platforms will suit your business needs. Have a look at the platforms we can help you with: </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="socailbox05" id>
                                <img src={Facebookicon} alt="Facebookicon" />
                                <h4>Facebook Ads</h4>
                                <p>Video ads, poll ads, carousel ads, image ads, and so many options are just waiting for you to micro-target your audience and generate immediate results.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="socailbox05">
                                <img src={Instagramicon} alt="Instagramicon" />
                                <h4>Instagram Ads</h4>
                                <p>Instagram has billions of active users;thus, it offers incredible opportunities for business growth. Through sponsored content and creative ads, your brand can generate great outcomes. </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="socailbox05">
                                <img src={Linkdinicon} alt="Linkdinicon" />
                                <h4>Linkedin Ads</h4>
                                <p>For B2B marketers aiming to maximize the effectiveness of social media advertising, LinkedIn is a top recommendation.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="socailbox05">
                                <img src={pintrest} alt="pintrest" />
                                <h4>Pinterest Ads </h4>
                                <p>The most cost-effective social mediachannel for advertisingto increase goal completion is undoubtedly Pinterest.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div className="socailbox05">
                                <img src={Youtubeicon} alt="Youtubeicon" />
                                <h4>YouTube Ads</h4>
                                <p>Reaching the right customers and people who matter to you is now easy with YouTube ads. </p>
                            </div>
                        </div>     
                        <div className="col-md-3"></div>                   
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="socailbox05">
                                <h4>Double up your Website Conversions </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="seosection03 nopading">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3>How Can Your Brand Benefit from <br />Social Media Advertising?</h3>
                            <p>Paid social media advertising is undoubtedly the best way to monetize from the best social media platforms. Each business wants to boost their conversion rates and social media advertising is perfect for that. Here are some reasons why you need to invest in paid social media campaigns:</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div className="sectin3box01">
                                <img src={Posticon} alt="Posticon" />
                                <h4>Amplifying Organic Posts</h4>
                                <p>If you are working on a limited budget, social media advertising is well-suited for boosting the online reach of your organic posts. </p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div className="sectin3box01">
                                <img src={Followericon} alt="Followericon" />
                                <h4>Gain New Followers</h4>
                                <p>With paid social advertising, reaching to new market segments becomes easier and faster than any other marketing method. </p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div className="sectin3box01">
                                <img src={Higericon} alt="Higericon" />
                                <h4>Generate Higher Website Conversions</h4>
                                <p>Social media ads have the capability to double up the website conversion rates and cuts your marketing costs significantly. </p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div className="sectin3box01">
                                <img src={Ledsicon} alt="Ledsicon" />
                                <h4>Grab Qualified Leads</h4>
                                <p>As per your marketing intent, social media ads can be easily optimized to drive targeted leads and remarketing the failed ones. </p>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
            <div className="social-ad-1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="social-ad-in">
                                <h3>Sit Back and Relax, Let NVD do the Work for You!</h3>
                                <p>Not everyone has the right knowledge and information about the changing algorithms of social media sites and the evolving marketing strategies. But our social media geeks have the perfect strategies up their sleeves to help you get your business skyrocketing in absolutely no time.</p>
                                <p>Right from targeting the appropriate keywords to targeting the right audience and setting realistic goals, NVD tailors strategies that fit your purpose!Throughout our years in the industry, we have worked with several leaders and have driven outstanding results. Organic approach, engaging content and ROI-driven results, if that interests you, then shake our hand.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={Sitback} alt="Sitback" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="pagecalaction001">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="calltext01  pagecalaction01">
                            <h5>Ready to Give Boost to Your Business?</h5>
                            <h6>If yes, then what are you waiting for? Connect with our experts for customized social media ad campaigns.</h6>
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

export default Socialads;