import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import PhotoFrame from "./assets/images/photoframe.png";
import Ecommercicon from "./assets/images/ecommerce-new01.png";
import Amazom from "./assets/images/amazon-icon.png";
import Flipkart from "./assets/images/flipkart-icon.png";
import Myntra from "./assets/images/myntra-icon.png";   
import eBay from "./assets/images/ebay-icon.png";
import Meesho  from "./assets/images/meesho-icon.png";
import Paytm from "./assets/images/paytm-icon.png";
import Snapdeal from "./assets/images/snapdeal-icon.png";
import IndiaMART from "./assets/images/indiamart-icon.png"; 
import Arrow from './assets/images/arrow.png';
import Ecom1 from './assets/images/e-com1.jpg';
import Ecom2 from './assets/images/e-com2.jpg';
import Ecom3 from './assets/images/e-com3.jpg';
import Ecom4 from './assets/images/e-com4.jpg';
import Ecom5 from './assets/images/e-com5.jpg';
import Ecom6 from './assets/images/e-com6.jpg';

import Prodcutdatfeed from "./assets/images/product-data-feed.png";
import Pagecallaction from "./components/Pagecallaction";
import GetAQuoteButton from "./components/GetAQuoteButton";


const Ecomercemangent = () =>{
    return(
        <div className="serchengne01">
            <Helmet>
                <meta charSet="utf-8" />
                <title>eCommerce Marketplace management</title>
                <link rel="canonical" href="https://www.newvisiondigital.co/ecommerce-marketplace-management" />
                <meta name="keywords" content="eCommerce Marketplace management"></meta>
                <meta name="description" content="eCommerce Marketplace management" />
            </Helmet>
            <div className="bredcum001">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>eCommerce Marketplace Management</h1>
                            <p><Link to='/'>Home</Link>  eCommerce Marketplace Management</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="socialmeia01">
                <div className="photframe"><img src={PhotoFrame} alt="PhotoFrame" /></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12"><h3>Manage your Marketplace Presence Seamlessly <br />With New Vision Digital </h3></div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="socialmeia01img"><img src={Ecommercicon} alt="Ecommercicon" /></div>
                        </div>
                        <div className="col-md-6">
                            <div className="socialmeia01txt">
                                <p>New Vision Digital offers state-of-the-art eCommerce management services to accelerate your brand’s growth on marketplaces such as Amazon, eBay, Flipkart and more. We draw expertise in offering impeccable solutions for marketplace listing services to ensure your business’ growth and scalability. </p>
                                <p>From day-to-day marketplace optimisation to ASIN management, our team is skilled at executing a strategy that assures a raise in your revenues. Reach out to us to get started.</p>
                                <GetAQuoteButton />
                            </div>
                        </div>                        
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="socialmeia01txt soccaladstxt01">
                                <h3>Count on us to Take your E-commerce Business to Profitable terms </h3>
                            </div>
                            <div className="ecomerceul01">
                                <ul>
                                    <li>
                                        <p><strong>Data-Driven Approach -</strong> Prowess the power of data and hard information to drive your business on the path to success. </p>
                                    </li>
                                    <li>
                                        <p><strong>Accelerate your sales -</strong> Simplify your strategic decisions and experience steady growth in revenues through our collection and analysis skills.  </p>
                                    </li>
                                    <li>
                                        <p><strong>Achieve Operational Excellence -</strong> With speed, accuracy, and transparency in our services, we ensure delivering optimum-quality results across all channels and platforms.  </p>
                                    </li>
                                </ul>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
            <div className="paidadvetis01">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="paidadvrtxt">
                                <h3>Grow Your Marketplace Presence on <br />E-commerce platforms such as</h3>
                            </div>
                            <div className="onlineplatform">
                                <ul>
                                    <li><img src={Amazom} alt="Amazom" /></li>
                                    <li><img src={Flipkart} alt="Flipkart" /></li>
                                    <li><img src={Myntra} alt="Myntra" /></li>
                                    <li><img src={eBay} alt="eBay" /></li>
                                    <li><img src={Meesho } alt="Meesho " /></li>
                                    <li><img src={Paytm} alt="Paytm" /></li>
                                    <li><img src={Snapdeal} alt="Snapdeal" /></li>
                                    <li><img src={IndiaMART} alt="IndiaMART" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="seosection03 nopading">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3>Our Suite of Marketplace Listing Services Include</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Product Data Feed Capturing:</h4>
                            <p>We comprise a team of highly-seasoned professionals who will gather data from various sources, such as PDF documents, web, and physical catalogues. Thereafter, the data gathered will be modified as per the product feed particulars of the chosen marketplaces.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="stertyimg"><img src={Ecom1} alt="Prodcutdatfeed" /></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="stertyimg"><img src={Ecom2} alt="Prodcutdatfeed" /></div>
                        </div>
                        <div className="col-md-6">
                            <h4>Product Data Entry:</h4>
                            <p>While entering the data into the product information section, our experts pay immense attention that all-important subtleties including brand, item type, particulars, cost, and much more are entered accurately. Our team works conscientiously to ensure the inventory listings are flawless. </p>
                        </div>                        
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Categorisation of Products:</h4>
                            <p>We categorise the entire range of products into relevant categories to make them quickly accessible and searchable for the customers. Classification of products into diverse categories ensures no room for confusion and easier accessibility of products for the customers.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="stertyimg"><img src={Ecom3} alt="Prodcutdatfeed" /></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="stertyimg"><img src={Ecom4} alt="Prodcutdatfeed" /></div>
                        </div>
                        <div className="col-md-6">
                            <h4>Product Data Optimisation:</h4>
                            <p>A business just doesn’t scale by merely uploading the products. You need to put forth efforts to make those items noticeable to customers. Connect with us to allow our experts to upgrade your postings organically with meta content and successful product depictions.  </p>
                        </div>                        
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Product Photo Enhancement:</h4>
                            <p>A product photo creates an image of the brand in the eyes of a customer and can affect the sale of goods. Therefore, to ensure product images do not impact your sales, we review if they match the quality norms and then upload them. In case the images need to be fixed, our image editors take the command and do the needful.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="stertyimg"><img src={Ecom5} alt="Prodcutdatfeed" /></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="stertyimg"><img src={Ecom6} alt="Prodcutdatfeed" /></div>
                        </div>
                        <div className="col-md-6">
                            <h4>Sponsored Ads:</h4>
                            <p>A sponsored Ad helps you have an edge over your competitors through a sponsored spot on marketplace listings. No matter your budget, our experts will help you manage bids on marketplace listings through the right sponsored spots- leading to an increase in revenue. </p>
                        </div>                        
                    </div>
                </div>
            </div>
            <Pagecallaction />
            
        </div>
    )
}

export default Ecomercemangent;