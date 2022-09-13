import { Link } from "react-router-dom";
import Menucross from '../assets/images/menu-cross.png';
const MegaMenu = (props) => {

  return (
    <div className="mega-menu-part">
      
      <div className={`mega-munu-sec ${props.isShow ? "show" : ""}`}>
        <div className="mega-menu">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="mega-list mega-list-1">
                  <div className="mega-list-in">
                    <h3>Digital Marketing</h3>
                    <ul>

                      <li><Link onClick={() => {props.toogleBtn(false); props.updateMenu(false);}} to='/search-engine-optimization'>Search Engine Optimization</Link></li>
                      <li><Link onClick={() => {props.toogleBtn(false); props.updateMenu(false);}} to='/social-media-marketing'>Social Media Marketing</Link></li>
                      <li><Link onClick={() => {props.toogleBtn(false); props.updateMenu(false);}} to='/influencer-marketing'>Influencer Marketing</Link></li>
                      <li><Link onClick={() => {props.toogleBtn(false); props.updateMenu(false);}} to='/online-reputation-management'>Online Reputation Marketing</Link></li>
                      <li><Link onClick={() => {props.toogleBtn(false); props.updateMenu(false);}} to='/email-marketing'>Email Marketing</Link></li>
                      <li><Link onClick={() => {props.toogleBtn(false); props.updateMenu(false);}} to='/ecommerce-marketplace-management'>Ecommerce Marketplace Management</Link></li>
                    </ul>
                  </div>
                  <div className="mega-list-in sub-mega-list">
                    <h4>Paid Ads</h4>
                    <ul>
                      <li><Link onClick={() => {props.toogleBtn(false); props.updateMenu(false);}} to='/pay-per-click'>PPC</Link></li>
                      <li><Link onClick={() => {props.toogleBtn(false); props.updateMenu(false);}} to='/social-advertising'>Social Media Ads</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="mega-list mega-list-2">
                  <div className="mega-list-in">
                    <h3>Design & Development</h3>
                    <ul>
                      <li><Link onClick={() => {props.toogleBtn(false); props.updateMenu(false);}} to='/wordpress-development'>Wordpress Development</Link></li>
                      <li><Link onClick={() => {props.toogleBtn(false); props.updateMenu(false);}} to='/magento-development'>Magento Development</Link></li>
                      <li><Link onClick={() => {props.toogleBtn(false); props.updateMenu(false);}} to='/shopify-development'>Shopify Development</Link></li>
                      <li><Link onClick={() => {props.toogleBtn(false); props.updateMenu(false);}} to='/'>React Development</Link></li>
                      <li><Link onClick={() => {props.toogleBtn(false); props.updateMenu(false);}} to='/php-development'>PHP Development</Link></li>
                      <li><Link onClick={() => {props.toogleBtn(false); props.updateMenu(false);}} to='/mobile-apps-development'>Mobile App Development</Link></li>
                    </ul>
                  </div>
                  <div className="mega-list-in sub-mega-list">
                    <h4>Design</h4>
                    <ul>
                      <li><Link onClick={() => {props.toogleBtn(false); props.updateMenu(false);}} to='/website-design'>Web Design</Link></li>
                      <li><Link onClick={() => {props.toogleBtn(false); props.updateMenu(false);}} to='/'>Logo Design</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="mega-list mega-list-3">
                  <div className="mega-list-in">
                    <h3>Business Consulting</h3>
                    <ul>
                      <li><Link onClick={() => {props.toogleBtn(false); props.updateMenu(false);}} to='/'>Business Setup</Link></li>
                      <li><Link onClick={() => {props.toogleBtn(false); props.updateMenu(false);}} to='/'>Accounting & Auditing</Link></li>
                      <li><Link onClick={() => {props.toogleBtn(false); props.updateMenu(false);}} to='/'>CFO Service</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="mega-list mega-list-4">
                  <div className="mega-list-in">
                    <h3>IT & CRM</h3>
                    <ul>
                      <li><Link onClick={() => {props.toogleBtn(false); props.updateMenu(false);}} to='/'>Zoho Consulting</Link></li>
                      <li><Link onClick={() => {props.toogleBtn(false); props.updateMenu(false);}} to='/'>Cloud Services</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="close-menu-icon">
          <button className="remove" onClick={()=>props.toogleBtn(false)}><img src={Menucross} alt="Menucross" /></button>
        </div>
      </div>
    </div>
  )
}

export default MegaMenu;