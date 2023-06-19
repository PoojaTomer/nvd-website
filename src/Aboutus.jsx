import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import PhotoFrame from "./assets/images/photoframe.png";
import Sumitsir from "./assets/images/sumit-sir.png";
import Manali from "./assets/images/manali.png";
import Vikrant from "./assets/images/vikrant.png";
import Gitanjali from "./assets/images/gitanjali.png";
import Jyoti from "./assets/images/jyoti.png";
import Aboutteam from "./assets/images/abttem-1.png";
import Pawanji from "./assets/images/pawanji.png"

const Aboutus = () =>{

    return(
        <div className="serchengne01">
            <div className="bredcum001">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>About us</h1>
                            <p><Link to='/'>Home</Link>  About us</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="socialmeia01">
                <div className="photframe"><img src={PhotoFrame} alt="PhotoFrame" /></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="socialmeia01img"><img src={Aboutteam} alt="Aboutteam" /></div>                            
                        </div>
                    </div>
                </div>
            </div>

            <div className='exploretext'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h3>Explore New Vision Digital</h3>
                            <p>New Vision Digital is committed to delivering compelling, tailor-made solutions to meet your needs and budget. We promise to assist you in taking advantage of digital marketing opportunities across channels in real-time. Our enthusiastic and passionate team of over 100 people is devoted to finding new and inventive ways to maximise returns, all while securing customers and driving brand loyalty. </p>
                            <p>We pride ourselves on being amongst the top agencies that are end-to-end providers of digital marketing services. So whether you are searching for a turnkey strategy, a website that drives sales, or a campaign that fuels growth, trust us to find the right way for turning bucks to your business. </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="abutbox01">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="abutbox01hed">
                                <h3>Meet the Leaders</h3>
                                <p>With over 10 years of experience, we have got a well-seasoned team at the helm.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row teammeet01">
                        <div className="col-md-6"><div className="profiepic"><img src={Sumitsir} alt="Sumitsir" /><span>S</span></div></div>
                        <div className="col-md-6">
                            <div className="profietxt">
                                <h4>Sumit Tayal <span>Founder & CEO</span></h4>
                                <p>The man behind the success of New Vision Digital as a digital marketing agency, Sumit Tayal, is a born leader. With his analytical bend of mind and in-depth knowledge of business operations, he makes sure to deliver results that elevate brands. As the powerhouse of ideas and the backbone of NVD, Mr Sumit comes up with innovative and result-driven approaches that deliver measured benefits to clients.</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row teammeet01">
                        <div className="col-md-6"><div className="profiepic"><img src={Pawanji} alt="Pawanji" /><span>P</span></div></div>
                        <div className="col-md-6">
                            <div className="profietxt">
                                <h4>Pawan Gupta <span>Director of Finance</span></h4>
                                <p>A competent and result-oriented professional, Mr. Pawan Gupta has over 24 years of rich and insightful experience in overall financial operations. With his exceptional skills and in-depth understanding of all phases of business and financial activity, he makes sure to put his best foot forward in all projects that come across him.  </p>
                            </div>
                        </div>
                    </div> */}
                    <div className="row teammeet01">
                        <div className="col-md-6"><div className="profiepic"><img src={Manali} alt="Manali" /><span>M</span></div></div>
                        <div className="col-md-6">
                            <div className="profietxt">
                                <h4>Manali Gill <span>Sr. Business Development Manager</span></h4>
                                <p>As the core business developer, Manali will be the primary point of contact between NVD and you. Being an enthusiastic, energetic, and people person, she brings energy to the development process and aims towards the company’s uprising growth. She has a positive and inquisitive attitude for every project that comes our way and ensures the client needs are duly met. </p>
                            </div>
                        </div>
                    </div>
                    <div className="row teammeet01">
                        <div className="col-md-6"><div className="profiepic"><img src={Vikrant} alt="Vikrant" /><span>V</span></div></div>
                        <div className="col-md-6">
                            <div className="profietxt">
                                <h4>Vikrant Pratap <span>Technical Head</span></h4>
                                <p>Vikrant is a “powerhouse” of ideas playing a key role as Technical Head in NVD. He is excellent in ensuring client needs are met and contributes to developing solutions. He strengthens delivery capabilities with his incessant energy. When not working, he loves to party and believes in “Work Hard, Party Harder!” </p>
                            </div>
                        </div>
                    </div>
                    <div className="row teammeet01">
                        <div className="col-md-6"><div className="profiepic"><img src={Gitanjali} alt="Gitanjali" /><span>G</span></div></div>
                        <div className="col-md-6">
                            <div className="profietxt">
                                <h4>Gitanjali Chauhan<span>Business Development and Accounts Manager</span></h4>
                                <p>As our global business development and accounts manager, Gitanjali will be the bridge between NVD and you. As a born leader who understands every crucial detail of how a task is performed, she always brings the best to the table. Being a cheerful, bubbly, and people-person, she knows how to craft a solution for every situation that comes her way.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row teammeet01">
                        <div className="col-md-6"><div className="profiepic"><img src={Jyoti} alt="Jyoti" /><span>J</span></div></div>
                        <div className="col-md-6">
                            <div className="profietxt">
                                <h4>Jyoti Motwani <span>Account Manager</span></h4>
                                <p>As the hands-on Account manager, Jyoti is a keen learner who likes to deep dive into all the projects she works on. She believes in building long-lasting professional relationships with our clients and works on getting the job done with finesse. When not firefighting at work, you can find her enjoying a cup of hot cocoa and calm music alongside her anchoring sessions on Sunday. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutus;