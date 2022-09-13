import React, {useState} from "react";
import { Link } from "react-router-dom";
import Seoheading from "./assets/images/seo-heading.png";
import Seoimage from "./assets/images/seoimage.png";
import Seobluebar from "./assets/images/blue-cloud.png";
import Seocircle from "./assets/images/seo-circle.png";
import Stargire from "./assets/images/statirgey01.png";
import Personile from "./assets/images/personile01.png";
import Optimize from "./assets/images/optimize.png";
import Analiyse from "./assets/images/analize.png";
import Asfportfolio from "./assets/images/asf-potfolio.png";
import Isoknportfolio from "./assets/images/iskon-portfolio.png";
import Ayodhyaportfoilo from "./assets/images/ayodhya-portfolio.png";
import Greensloud from "./assets/images/green-cloud.png";
import Arrow from './assets/images/arrow.png';
import Calltoactionpage from "./components/Calltoactionpage";
import Helmet from "react-helmet";
import GetAQuote from "./components/GetAQuote";
import GetAQuoteButton from "./components/GetAQuoteButton";


const SearchEngineOptimization = (props) =>{
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    return( 
        <div className="serchengne01">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Best SEO Company in Dubai | SEO Agency in UAE - New Vision Digital</title>
                <link rel="canonical" href="https://www.newvisiondigital.co/search-engine-optimization" />
                <meta name="keywords" content="best seo services, search engine optimization agency, best seo services in dubai, best seo agency dubai, search engine optimization company in dubai, search engine optimization agency in dubai, SEO services provider in dubai "></meta>
                <meta name="description" content="Increase your visibility on search engines with SEO services in Dubai. We are a leading SEO agency in Dubai, extending a plethora of impeccable SEO services for businesses." />
            </Helmet>
            <div className="bredcum001">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Search Engine Optimization</h1>
                            <p><Link to='/'>Our Services</Link>  SEO</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="seosection01">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="serheding01">
                                <img src={Seoheading} alt="Seoheading" />
                                <h3>Let our SEO Gurus Escort <br />your Website to the top of SERPs</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <p>New Vision Digital provides result oriented SEO services to help businesses improve their website’s visibility and increase its traffic organically. Get the exposure your brand needs and watch your website climb the ladder to the coveted spot on the SERPs.</p>
                            <p>Reach out to us to avail our professional services for SEO today. </p>
                            {/* <div className="ser-quote">
                            <a href="javascript:void();" onClick={showModal}>Get a Quote <img src={Arrow} alt="arow" /></a>
                            </div> */}
                            <GetAQuoteButton />
                        </div>
                        <div className="col-md-6">
                            <div className="seoright001"><img src={Seoimage} alt="Seoimage" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="seosection02">
                <div className="seosection02img"><img src={Seobluebar} alt="Seobluebar" /></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3>Entrust us to Outrank Your Competitors, <br />Impress the SEO Robots And Soon-to-be Customers</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="seosection02img2"><img src={Seocircle} alt="Seocircle" /></div>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <li>Create content on-site and off-site that drives traffic and leads your website to save a spot on the top of page 1 on SERPs.</li>
                                <li>Strategies and campaigns that don’t go south.</li>
                                <li>Remain up to date for campaigns with paid tools such as SEMrush and Google Analytics.</li>
                                <li>Prioritise and plan as you like. We keep you in the loop and take feedback on things you wish to focus more on.</li>
                                <li>Have your own SEO team that does the smart work to achieve what you desire.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="seosection03">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3>Drive More Traffic, <br />Build More Leads And Bring More Revenue. <br />New Vision Digital Helps Businesses to </h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Strategise:</h4>
                            <p>We’ll map out an effective plan in depth keyword research keeping in mind your audience & niche. Our team will map the plan with your pages and work towards implementing it. List down all that you want us to deliver, and we will identify the best possible solutions to make your website visible on top pages of SERPs.  </p>
                        </div>
                        <div className="col-md-6">
                            <div className="stertyimg"><img src={Stargire} alt="Stargire" /></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="stertyimg"><img src={Personile} alt="Personile" /></div>
                        </div>
                        <div className="col-md-6">
                            <h4>Personalise: </h4>
                            <p>We produce results that help our clients steal the limelight and shine bright in the digital world. Our exceptionally talented content writers produce refreshing content for on-site ( web pages, web blogs and more) with the best technical approach and off-page ( articles, blogs, press releases, classifieds and more) with high-ranking keywords. We assure a positive experience and better ROI with our content and services.</p>
                        </div>                        
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Optimise:</h4>
                            <p>Once we set up a strategy, we use a holistic digital approach to optimise the website for driving traffic, converting leads, getting top ranks and bringing revenue for the brand.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="stertyimg"><img src={Optimize} alt="Optimize" /></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="stertyimg"><img src={Analiyse} alt="Analiyse" /></div>
                        </div>
                        <div className="col-md-6">
                            <h4>Analyse:</h4>
                            <p>To get an overview of your website’s health and performance after optimisation, we conduct a comprehensive website analysis which includes-</p>
                            <ul>
                                <li>Domain analysis</li>
                                <li>Traffic analysis</li>
                                <li>On-page analysis</li>
                                <li>Off-page analysis</li>
                                <li>User interface analysis</li>
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

export default SearchEngineOptimization;