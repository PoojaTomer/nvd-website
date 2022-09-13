import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import Calltoactionpage from "./components/Calltoactionpage";
import Portfoliogint from './assets/images/portfolio-giant.png';
import Portfoliococo from './assets/images/portfolio-coco.png';
import Portfolioiskon from './assets/images/portfolio-iskon.png';
import Portfolionursing from './assets/images/portfolio-nursing.png';
import Portfoliopenson from './assets/images/portfolio-penson.png';
import Arrow from './assets/images/arrow.png';
import Websiteicon from "./assets/images/website-icon.png";
import Seoicon from "./assets/images/seo-icon.png";
import Smoicon from "./assets/images/smo-icon.png";
import Paidadsicon from "./assets/images/pais-ads.png";
import Brandingicon from "./assets/images/branding-icon.png";

const Portfolio = () =>{
    return(
        <div className="serchengne01">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Portfolio</title>
                <link rel="canonical" href="https://www.newvisiondigital.co/portfolio" />
                <meta name="keywords" content="Portfolio"></meta>
                <meta name="description" content="Portfolio" />
            </Helmet>
            <div className="bredcum001">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Portfolio</h1>
                            <p><Link to='/'>Home</Link>  Portfolio</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio01">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="portfolio01hed">
                                <h3>Case Studies</h3>
                                <p>We’ve helped thousands of businesses become your favourite brands. We’re all about getting results, which is why we let our numbers speak for themselves.</p>
                                <p>Here’s just a taste of what we have achieved for our clients. If you’re ready to join them, <Link to="/contact-us"> Get in touch with us today. </Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="portfloisec01">
                        <div className="row">
                            <div className="col-md-6"><img src={Portfoliogint} alt="Portfoliogint" /></div>
                            <div className="col-md-6">
                                <h3>Giant Migration</h3>
                                <ul>
                                    <li><img src={Websiteicon} alt="Websiteicon" /><span>Website</span></li>
                                    <li><img src={Seoicon} alt="Seoicon" /><span>SEO</span></li>
                                    <li><img src={Smoicon} alt="Smoicon" /><span>SMO</span></li>
                                    <li><img src={Paidadsicon} alt="Paidadsicon" /><span>Paid Ads</span></li>
                                    <li><img src={Brandingicon} alt="Brandingicon" /><span>Branding</span></li>
                                </ul>
                                <p>Giant Migration is an immigration company catering to the diverse immigration needs of people from across the world. We incorporated their vision into our strategies and developed an incredibly informative and directive website. </p>
                                <Link to="/giant-migration">Read More <img src={Arrow} alt="arow" /></Link>
                            </div>
                        </div>
                        { /* <div className="row">                            
                            <div className="col-md-6">
                                <h3>Coco Earth</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
                                <Link to="/website-development">Read More <img src={Arrow} alt="arow" /></Link>
                            </div>
                            <div className="col-md-6"><img src={Portfoliococo} alt="Portfoliococo" /></div>
                        </div>
                        <div className="row">
                            <div className="col-md-6"><img src={Portfolioiskon} alt="Portfolioiskon" /></div>
                            <div className="col-md-6">
                                <h3>ISKCON Temple, Delhi</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
                                <Link to="/website-development">Read More <img src={Arrow} alt="arow" /></Link>
                            </div>
                        </div>
                        <div className="row">                            
                            <div className="col-md-6">
                                <h3>Nursing Next Live</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
                                <Link to="/website-development">Read More <img src={Arrow} alt="arow" /></Link>
                            </div>  
                            <div className="col-md-6"><img src={Portfolionursing} alt="Portfolionursing" /></div>
                        </div>
                        <div className="row">
                            <div className="col-md-6"><img src={Portfoliopenson} alt="Portfoliopenson" /></div>
                            <div className="col-md-6">
                                <h3>Benson IVF</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
                                <Link to="/website-development">Read More <img src={Arrow} alt="arow" /></Link>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <Calltoactionpage />
        </div>
    )
}

export default Portfolio;