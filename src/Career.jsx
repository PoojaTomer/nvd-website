import React, { useState } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import Arrow from './assets/images/arrow.png';
import Bulb from './assets/images/bulb.png';
import Teamicon from './assets/images/team.png';
import Speekman from './assets/images/horn-man.png';
import Flexible from './assets/images/flexible01.png';
import Carertemone from './assets/images/carer-team01.png';
import Carertemtwo from './assets/images/carer-team02.png';
import Activityone from './assets/images/adventure-pic01.png';
import Activitytwo from './assets/images/adventure-pic02.png';
import Activitythree from './assets/images/adventure-pic03.png';
import Activityfour from './assets/images/adventure-pic04.png';
import Officepicone from './assets/images/office-funcation1.jpg';
import Officepictwo from './assets/images/office-funcation2.jpg';
import Officepicthree from './assets/images/office-funcation3.jpg';
import Officepicfour from './assets/images/office-funcation4.jpg';
import Activitypione from './assets/images/activity-pic001.jpg';
import Activitypitwo from './assets/images/activity-pic002.jpg';
import Activitypithree from './assets/images/activity-pic003.jpg';
import Activitypifour from './assets/images/activity-pic004.jpg';
import Outingpicone from './assets/images/outing-pic01.jpg';
import Outingpictwo from './assets/images/outing-pic02.jpg';
import Outingpicthree from './assets/images/outing-pic03.jpg';
import Outingpicfour from './assets/images/outing-pic04.jpg';
import Outingpicfive from './assets/images/outing-pic05.jpg';
import Celebrationone from './assets/images/celebrations-pic01.jpg';
import Celebrationtwo from './assets/images/celebrations-pic02.jpg';
import Celebrationthree from './assets/images/celebrations-pic03.jpg';
import Celebrationfour from './assets/images/celebrations-pic04.jpg';
import { Collapse } from 'antd';
import { Tabs } from 'antd';
import { Image } from 'antd';
import 'antd/dist/antd.css';  
import Careerform from "./components/CareerForm";

const { Panel } = Collapse;
const { TabPane } = Tabs;


const Career = () =>{
    const [visible, setVisible] = useState(false);
    return(
        <div className="serchengne01">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Career</title>
                <link rel="canonical" href="https://www.newvisiondigital.co/career" />
                <meta name="keywords" content="Career"></meta>
                <meta name="description" content="Career" />
            </Helmet>
            <div className="bredcum001">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Career</h1>
                            <p><Link to='/'>Home</Link>  Career</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="truenpashion">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <img src={Bulb} alt="Bulb" className="buldimg" />
                            <h3>If you have a zing for the Digital world, <br /> We have a job for you!</h3>
                            <p>At New Vision Digital, you're more than simply another cog in the wheel; you're part of a family that cherishes your unique perspective and contributions to the organisation. Amazing individuals are needed to join our high-performing team. We are looking for self-motivated professionals who are team-oriented and appreciate a healthy work-life balance. </p>
                            <a href="javascript:void(0)" onClick={() => setVisible(true)}>Apply Here <img src={Arrow} alt="arow" /></a><br /><br /><br />
                        </div>
                    </div>
                </div>
                <div className="teamimgicon"><img src={Teamicon} alt="Teamicon" /></div>
                <div className="spekman"><img src={Speekman} alt="Speekman" /></div>
            </div>
            <div className="readycloud carerclud">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6"><div className="readycloudimg"><img src={Flexible} alt="Flexible" /></div></div>
                        <div className="col-md-6">
                            <div className="readyrexrt">
                                <h3>Wondering if you are a good fit?</h3>
                                <h4>Do you aspire to be the best in your niche? These are the qualities we're searching for in a professional:</h4>
                                <ul>
                                    <li>A proactive approach towards work.</li>
                                    <li>Believes in collaborative working if and when necessary.</li>
                                    <li>Can work well with deadlines.</li>
                                    <li>Brings ideas to the table.</li>
                                </ul>
                                <a href="javascript:void(0)" onClick={() => setVisible(true)}>Join Our Team <img src={Arrow} alt="arow" /></a>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
            <div className="openpostion01">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="openpostion01hed">
                                <h3>What are we hiring for?</h3>
                                <h4>Join our mission</h4>
                                <p>To provide industry-leading digital marketing services to clients while growing both personally and professionally.</p>
                            </div>    
                            <div className="openpostion01acordin">
                                <Collapse accordion defaultActiveKey={['1']}>
                                    <Panel header="Social Media Executive" key="1">
                                        <div className="acodrintext">
                                            <h5>Job Description</h5>
                                            <ul className="ulcarer01">
                                                <li>1. Planning, creating and managing Social Media handles for the clients.</li>
                                                <li>2. Attending Client meetings to understand the clients requirements. </li>
                                                <li>3. Preparing Monthly Calendars.</li>
                                                <li>4. Conceptualizing and writing the content and copies. </li>
                                                <li>5. Briefing the designers for the graphics and ensuring that they are as per clients expectations.</li>
                                                <li>6. Planning and implementing Contests and other things except the regular posts for Social Media.</li> 
                                                <li>7. Boosting Posts as per target audience.</li>
                                                <li>8. Building and Monitoring online reviews and reputation.</li>
                                                <li>9. Managing the Likes, shares, engagement and followers of the clients.</li>
                                                <li>10. Preparing & updating a Brand manuals of each client that has the dos and donts of the clients. </li>
                                                <li>11. Monitoring trends in social media tools, applications, channels, design and strategy. </li>
                                                <li>12. Compiling reports for management showing results.</li>
                                            </ul>
                                        </div>
                                    </Panel>
                                    <Panel header="PPC Executive" key="2">
                                        <div className="acodrintext">
                                            <h5>Job Description</h5>
                                            <p>Plan, optimize, implement and manage paid campaigns for a variety of clients on Facebook, Instagram and Google.</p>
                                            <p>Ensure PPC campaigns are up and optimized according to brief and best practice guidelines.</p>
                                            <p>Develop near and long-time paid campaign strategies.</p>
                                            <p>Manage medium to large-sized PPC budgets.</p>
                                            <p>Work with the content team to ensure landing pages are effectively optimized for all PPC campaigns to ensure maximum ROI and conversion is possible.</p>
                                            <p>Perform keyword research and manage all bid management for your clients.</p>
                                            <p>Work with the PPC Manager to ensure all paid search activity falls in line with the larger search marketing and digital marketing strategy.</p>
                                            <p>Keep up to date with the latest industry trends.</p>
                                            <p>Analyze activity and performance of all paid campaigns and report findings back to the PPC Manager and subsequent clients.</p>
                                            <p>Help to define PPCs strategies for a host of clients.</p>
                                        </div>
                                    </Panel>
                                    <Panel header="Content Writer" key="3">
                                        <div className="acodrintext">
                                            <h5>Job Description</h5>
                                            <p>Responsible to take care of complete web content service which includes articles, blogs and product descriptions.</p>
                                            <p>Content development for brochures, posters, and marketing, meta descriptions, product branding.</p>
                                            <p>Should have diverse understanding of different niches with an appetite to adapt and learn.</p>
                                            <p>Obtain understanding of clients briefs and deliver upon it within promised deadline;
                                            Should be well versed with international content tones and grammar.</p>
                                            <p>Ensure work is delivered on time and is well executed.</p>
                                        </div>
                                    </Panel>
                                    <Panel header="Social Media Manager" key="4">
                                        <div className="acodrintext">
                                            <h5>Job Description</h5>
                                            <ul  className="ulcarer01">
                                                <li>1. Planning, creating and managing Social Media handles for the clients.</li>
                                                <li>2. Attending Client meetings to understand the clients requirements. </li>
                                                <li>3. Preparing Communication Plan for the new clients with support of the team.</li>
                                                <li>4. Preparing Monthly Calendars.</li>
                                                <li>5. Conceptualizing and writing the content and copies. </li>
                                                <li>6. Briefing the designers for the graphics and ensuring that they are as per clients expectations.</li>
                                                <li>7. Planning and implementing Contests and other things except the regular posts for Social Media. </li>
                                                <li>8. Reviewing the final docket and getting it approved.</li> 
                                                <li>9. Boosting Posts as per target audience.</li>
                                                <li>10. Building and Monitoring online reviews and reputation.</li>
                                                <li>11. Managing the Likes, shares, engagement and followers of the clients.</li>
                                                <li>12. Preparing & updating a Brand manuals of each client that has the dos and donts of the clients. </li>
                                                <li>13. Monitoring trends in social media tools, applications, channels, design and strategy. </li>
                                                <li>14. Compiling reports for management showing results.</li>
                                                <li>15. Team management and advance planning.</li>
                                            </ul>
                                        </div>
                                    </Panel>
                                    <Panel header="SEO Executive" key="5">
                                        <div className="acodrintext">
                                            <h5>Job Description</h5>
                                            <ul  className="ulcarer01">
                                                <li>1. Performing ongoing keyword research including discovery and expansion of keyword opportunities.</li>
                                                <li>2. Optimize website content, landing pages, and paid search copy to ensure high-quality scores and low bounces.</li>
                                                <li>3. Researching and implementing content recommendations for organic SEO success.</li>
                                                <li>4. Stay up to date with the latest Google algorithm changes as well as SEO and digital marketing trends and best practices.</li>
                                                <li>5. Monitor and evaluate search results and performance across major search channels to improve rankings and understand SEO strategy performance.</li>
                                                <li>6. Develop and implement link-building campaigns.</li>
                                                <li>7. Performing ongoing keyword discovery, expansion and optimization.</li>
                                                <li>8. Researching and implementing search engine optimization recommendations.</li>
                                                <li>9. Researching and analyzing competitor links and onsite strategies.</li>
                                                <li>10. Working with the development team to ensure SEO best practices are properly implemented on newly developed code.</li>
                                                <li>11. Recommending changes to website architecture, content, linking and other factors to improve SEO positions for target keywords.</li>
                                            </ul>
                                        </div>
                                    </Panel>
                                </Collapse>
                                <a href="javascript:void(0)" onClick={() => setVisible(true)}>Apply Here <img src={Arrow} alt="arow" /></a>
                            </div>                        
                        </div>
                    </div>
                </div>
            </div>
            <div className="carerteam01">
                <div className="carerteam01img01"><img src={Carertemone} alt="Carertemone" /></div>
                <div className="carerteam01img02"><img src={Carertemtwo} alt="Carertemtwo" /></div>
            </div>
            <div className="letswork">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="letsworkhed">
                                <h3>Offline fun that Keeps us going!</h3>
                                <p>Client calls, team huddles, deadlines, creative thinking, and coming up with new ideas can be exhausting. Occasionally, to keep us all sane, we like to step out to happy hours, elope someplace beautiful, or plan some fun activity in-house.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="letsworktab">
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Office Function" key="1">
                            <Image.PreviewGroup>
                                <Image src={Officepicone} alt="Officepicone" />
                                <Image src={Officepictwo} alt="Officepictwo" />
                                <Image src={Officepicthree} alt="Officepicthree" />
                                <Image src={Officepicfour} alt="Officepicfour" />
                            </Image.PreviewGroup>
                        </TabPane>
                        <TabPane tab="Activity" key="2">
                            <Image.PreviewGroup>
                                <Image src={Activitypione} alt="Activitypione" />
                                <Image src={Activitypitwo} alt="Officepictwo" />
                                <Image src={Activitypithree} alt="Activitypithree" />
                                <Image src={Activitypifour} alt="Activitypifour" />
                            </Image.PreviewGroup>
                        </TabPane>
                        <TabPane tab="Office Trip" key="3">
                            <Image.PreviewGroup>
                                <Image src={Activityone} alt="Activityone" />
                                <Image src={Activitytwo} alt="Activitytwo" />
                                <Image src={Activitythree} alt="Activitythree" />
                                <Image src={Activityfour} alt="Activityfour" />
                            </Image.PreviewGroup>
                        </TabPane>
                        <TabPane tab="Outing" key="4">
                            <Image.PreviewGroup>
                                <Image src={Outingpicone} alt="Outingpicone" />
                                <Image src={Outingpictwo} alt="Outingpictwo" />
                                <Image src={Outingpicthree} alt="Outingpicthree" />
                                <Image src={Outingpicfour} alt="Outingpicfour" />
                                <Image src={Outingpicfive} alt="Outingpicfive" />
                            </Image.PreviewGroup>
                        </TabPane>
                        <TabPane tab="Celebrations" key="5">
                            <Image.PreviewGroup>
                                <Image src={Celebrationone} alt="Celebrationone" />
                                <Image src={Celebrationtwo} alt="Celebrationtwo" />
                                <Image src={Celebrationthree} alt="Celebrationthree" />
                                <Image src={Celebrationfour} alt="Celebrationfour" />
                            </Image.PreviewGroup>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
            
            <Careerform 
                isModalVisible={visible} 
                setVisible = {setVisible}
            />
        </div>
    )
}

export default Career;