import React, { useState } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import Intershipimg from "./assets/images/intership-img.png";
import Intershipone from "./assets/images/intership-icon01.png";
import Intershiptwo from "./assets/images/intership-icon02.png";
import Intershipthree from "./assets/images/intership-icon03.png";
import Intershipfour from "./assets/images/intership-icon04.png";
import Intershipfive from "./assets/images/intership-icon05.png";
import Arrow from './assets/images/arrow.png';
import Readyjoin from './assets/images/ready-join.png';
import 'antd/dist/antd.css';  
import Intershipfrom from "./components/IntershipForm";

const Intership = () =>{   
    const [visible, setVisible] = useState(false);
    return(
        <div className="serchengne01">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Internship Opportunities</title>
                <link rel="canonical" href="https://www.newvisiondigital.co/internship" />
                <meta name="keywords" content="Internship Opportunities"></meta>
                <meta name="description" content="Internship Opportunities" />
            </Helmet>
            <div className="bredcum001">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Internship Opportunities</h1>
                            <p><Link to='/'>Home</Link>  Internship Opportunities</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="intershipsection01">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6"><div className="intershipsection01img"><img src={Intershipimg} alt="Intershipimg"/></div></div>
                        <div className="col-md-6">
                            <div className="intershipsection01txt">
                                <h3>Internship Openings</h3>
                                <p>The early bird catches the worm. Here’s, calling early birds who have discovered their love for digital marketing but are struggling to find the right path. We see you and would love to hear from you. Here’s your opportunity to land a digital marketing internship with us. If your energy is infectious, we are ready to be stung by it.</p>

                                <p>With New Vision Digital, you will have the opportunity to work on tasks and receive hands-on experience benefiting you both, professionally and personally. It is a great opportunity for someone who wants to work in an atmosphere where they can put their skills to use while communicating with executives and other teams around the company.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="opernitue">
                                <h4>We have opportunities for you to contribute in areas like:</h4>
                                <ul>
                                    <li><img src={Intershipone} alt="Intershipone" /><p>Social Media Intern </p></li>
                                    <li><img src={Intershiptwo} alt="Intershiptwo" /><p>Content Writer Intern </p></li>
                                    <li><img src={Intershipthree} alt="Intershipthree" /><p>Graphic Designer Intern</p></li>
                                    <li><img src={Intershipfour} alt="Intershipfour" /><p>PPC Intern</p></li>
                                    <li><img src={Intershipfive} alt="Intershipfive" /><p>Digital Marketing Intern</p></li>
                                </ul>
                                <a href="javascript:void(0)" onClick={() => setVisible(true)}>Apply Here <img src={Arrow} alt="arow"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="readycloud">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="readyrexrt">
                                <h3>Do you have it in you? Come Join Us!</h3>
                                <p>Self-driven, motivated, and zealous candidates, ready to make an immediate measurable impact on the world and bring innovative ideas, services, and products to life. We're on the lookout for internet marketing trailblazers with a passion for digital marketing.</p>
                                <a href="javascript:void(0)" onClick={() => setVisible(true)}>Join us today! <img src={Arrow} alt="arow" /></a>
                            </div>
                        </div>
                        <div className="col-md-6"><div className="readycloudimg"><img src={Readyjoin} alt="Readyjoin" /></div></div>
                    </div>
                </div>
            </div>
           <Intershipfrom 
               isModalVisible={visible} 
               setVisible = { setVisible}
           />
        </div>
    )
}

export default Intership;