import React, { useState } from "react";
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchEngineOptimization from './SearchEngineOptimization';
import SocialMediaDigitalMarketing from './SocialMediaDigitalMarketing';
import WebsiteDevelopment from './WebsiteDevelopment';
import PaidAdvertising from './PaidAdvertising';
import Contactus from './Contactus';
import Mobileapps from './Mobileapps';
import Aboutus from './Aboutus';
import ScrollToTop from './components/ScrollToTop';
import Intership from './Internship';
import Career from './Career';
import Portfolio from './Portfolio';
import Gientmigration from './Giantmigration';
import Socialads from './SocailAds';
import Ecomercemangent from './EcommerceMarketplacemanagement';
import Emailmarketing from './EmailMarketing';
import InfluencerMarketing from './InfluencerMarketing';
import OnlineReputationManagement from './OnlineReputationManagement';
import NvdPpc from './NvdPpc';
import WordpressDevelopment from './WordpressDevelopment';
import MagentoDevelopment from './MagentoDevelopment';
import WebsiteDesign from './WebsiteDesign';
import PhpDevelopment from './PhpDevelopment';
import ShopifyDevelopment from './ShopifyDevelopment';


import ThankYou from './ThankYou';
import NotFound from './NotFound';

import MegaMenu from './components/MegaMenu';

const App = () => {

  const [megaMenuShow, setMegaMenuShow] = useState(false);
  const toogleBtn = (value) => {
    setMegaMenuShow(value);
    console.log("clicked");
  };

  const [mobileMenu, setMobilemenu] = useState(false);

const updateMenu = () => {
    setMobilemenu(!mobileMenu);
    console.log("clicked menu");
  };






  return (
    <BrowserRouter basename="/">
      <Header toogleBtn={toogleBtn} megaMenuShow={megaMenuShow}  mobileMenu={mobileMenu} updateMenu={updateMenu} />
      <MegaMenu isShow={megaMenuShow} toogleBtn={toogleBtn} updateMenu={updateMenu}/>
      <Routes>
        <Route path='/' exact element={<Home toogleBtn={toogleBtn} megaMenuShow={megaMenuShow} />} />
        <Route path='/search-engine-optimization' exact element={<SearchEngineOptimization />} />
        <Route path='/social-media-marketing' exact element={<SocialMediaDigitalMarketing />} />
        <Route path='/website-development' exact element={<WebsiteDevelopment />} />
        <Route path='/paid-advertising' exact element={<PaidAdvertising />} />
        <Route path='/contact-us' exact element={<Contactus />} />
        <Route path='/mobile-apps-development' exact element={<Mobileapps />} />
        <Route path='/about-us' exact element={<Aboutus />} />
        <Route path='/internship' exact element={<Intership />} />
        <Route path='/career' exact element={<Career />} />
        <Route path='/portfolio' exact element={<Portfolio />} />
        <Route path='/giant-migration' exact element={<Gientmigration />} />
        <Route path='/thank-you' exact element={<ThankYou />} />
        <Route path='/social-advertising' exact element={<Socialads />} />
        <Route path='/ecommerce-marketplace-management' exact element={<Ecomercemangent />} />
        <Route path='/email-marketing' exact element={<Emailmarketing />} />
        <Route path='/influencer-marketing' exact element={<InfluencerMarketing />} />
        <Route path='/pay-per-click' exact element={<NvdPpc />} />
        <Route path='/online-reputation-management' exact element={<OnlineReputationManagement />} />
        <Route path='/wordpress-development' exact element={<WordpressDevelopment />} />
        <Route path='/magento-development' exact element={<MagentoDevelopment />} />
        <Route path='/php-development' exact element={<PhpDevelopment />} />
        <Route path='/shopify-development' exact element={<ShopifyDevelopment />} />
        <Route path='/website-design' exact element={<WebsiteDesign />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer  toogleBtn={toogleBtn} megaMenuShow={megaMenuShow}/>
    </BrowserRouter>
  );
}

export default App;
