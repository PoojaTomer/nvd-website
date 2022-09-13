import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Banner from "./HomeComponent/Banner";
import Unique from "./HomeComponent/Unique";
import Clients from "./HomeComponent/Clients";
import Services from "./HomeComponent/Services";
import CaseStudy from "./HomeComponent/CaseStudy";
import Reach from "./HomeComponent/Reach";
import HomeTestimonial from "./HomeComponent/HomeTestimonial";
import CalltoAction from "./HomeComponent/CalltoAction";
import {Helmet} from "react-helmet";


const Home = (props) =>{
   
   console.log(props);

    return(
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>New Vision Digital - The Best Digital Marketing Agency in Dubai | SEO and Social Media Marketing Agency in Dubai, UAE</title>
                <link rel="canonical" href="https://www.newvisiondigital.co/" />
                <meta name="keywords" content="digital marketing agency, digital marketing company, digital marketing agency Dubai, digital marketing company Dubai, best digital marketing company Dubai, Best digital marketing company Dubai, digital marketing services Dubai, digital agency Dubai "></meta>
                <meta name="description" content="Want to grow your online presence with the best digital marketing agency in Dubai? Connect with New Vision Digital, a leading digital marketing company in Dubai for the finest digital marketing services." />
            </Helmet>
            <Banner toogleBtn={props.toogleBtn} megaMenuShow={props.megaMenuShow}/>
            <Unique />
            <Clients />
            <Services />
            <CaseStudy />
            <Reach />
            <HomeTestimonial />
            <CalltoAction />
        </div>
    )
}

export default Home;
