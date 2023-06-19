import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Dropdown, Button } from 'antd';
import 'antd/dist/antd.css';
import "../assets/css/style.css";
import Logo from "../assets/images/logo.png";
import Indiaflug from "../assets/images/india_fleg01.png";
import Unitedsteflug from "../assets/images/usflag.png";
import Arrow from '../assets/images/arrow.png';
import Email from '../assets/images/email.png';
import Phone from '../assets/images/call.png';
import Menucross from '../assets/images/menu-cross.png';
import MegaMenu from './MegaMenu';
import GetAQuote from './GetAQuote';



const Header = (props) => {

  const location = useLocation();

  const path = location.pathname;
  
  

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





  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/search-engine-optimization">Search Engine Optimization</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/social-media-marketing">Social Media Marketing</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/paid-advertising">Paid Advertising</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/social-advertising">Social Advertising</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/website-development">Website Design & Development</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/mobile-apps-development">Mobile Apps Development</Link>
      </Menu.Item>
    </Menu>
  );



  return (
    <div id="headerPanel">
      <div className={path === '/' ? "header01" : "header01 headerbg"}>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="logo01"><Link to="/"><img src={Logo} alt="Logo" /></Link></div>
            </div>
            <div className="col-md-9">
            <ul className="other-flag">
            <li><a href='https://newvisiondigital.in/' target="_blank"><img src={Indiaflug} alt="India flag" /></a></li>
            <li><a href='https://www.newvisiondigital.co/' target="_blank"><img src={Unitedsteflug} alt="Uae flag" className="usa-flag" /></a></li>
          </ul>
              <div className="manutop01">
                <a href="tel:0547064859"><img src={Phone} alt="Phone" /> 0547064859</a> <a href="mailto:hello@newvisiondigital.co"><img src={Email} alt="Email" /> hello@newvisiondigital.co</a></div>
              <div className="menulinks">

                <div onClick={props.updateMenu}  id="bars">
                  <div id="bar1" className="bar1"></div>
                  <div id="bar2" className="bar2"></div>
                  <div id="bar3" className="bar3"></div>
                </div>


                <div className="getquote"><a href="javascript:void();" onClick={showModal}>Get a Quote <img src={Arrow} alt="arow" /></a></div>
                <div className={`mobile-show ${props.mobileMenu ? "menu-show" : ""}`}>
                  <button className="remove" onClick={()=>props.updateMenu(false)}><img src={Menucross} alt="Menucross" /></button>
                <ul>
                  <li><Link onClick={()=>props.updateMenu(false)} to="/">Home</Link></li>
                  <li><Link onClick={()=>props.updateMenu(false)} to="/about-us">About us</Link></li>
                  <li>
                    <button onClick={()=>props.toogleBtn(true)}>Our Services</button>
                  </li>
                  {/*<li><Dropdown overlay={menu} placement="bottomLeft">
                                        <Button>Our Services</Button>
                                    </Dropdown></li>*/}
                  <li><Link onClick={()=>props.updateMenu(false)} to="/portfolio">Portfolio</Link></li>
                  <li><Link onClick={()=>props.updateMenu(false)} to="/career">Career</Link></li>
                  <li><a href="https://www.newvisiondigital.co/blog/">Blog</a></li>
                  <li><Link onClick={()=>props.updateMenu(false)} to="/contact-us">Contact Us</Link></li>
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GetAQuote isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} {...props} />
     


    </div>
  )
}

export default Header;
