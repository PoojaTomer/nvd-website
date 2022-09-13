import React, { useEffect, useState } from "react";
import Ratingstar from "../assets/images/rating-star.png";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const HomeTestimonial = () =>{

    const [loaded,setLoaded] = useState(false);
    useEffect(()=>{
        setLoaded(true);
        return ()=>{
            setLoaded(false);
        }
    },[])
    
    const responsive = {
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }


    return(
        <div className="testimonial">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3>Our Testimonials</h3>                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="homtestoslider">
                            {loaded?
                            <OwlCarousel className='owl-theme' loop margin={10} items={2} responsive={responsive} autoplay>
                                <div className='item'>
                                    <div className="testibox01">
                                        <p>"It’s been a delight to work with New Vision Digital. Their intelligence, professionalism, and strategy to generate traffic and profitable leads have worked well for our brand."</p>
                                        <h4>Mr. Pankaj Agarwal <span>Director, Bikanervala Foods Pvt Ltd, Dubai</span><strong><img src={Ratingstar} alt="Ratingstar" /><img src={Ratingstar} alt="Ratingstar" /><img src={Ratingstar} alt="Ratingstar" /><img src={Ratingstar} alt="Ratingstar" /><img src={Ratingstar} alt="Ratingstar" /></strong></h4>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className="testibox01">
                                        <p>"New Vision Digital delivers lucrative results, works swiftly, and understands the bigger picture. The diligent team helped guide our web strategy and drive in the results for us. We are fortunate to consider them our long-term digital partners."</p>
                                        <h4>Mr. Nirbhay Kataria <span>Founder & CEO - Giant Migration.</span><strong><img src={Ratingstar} alt="Ratingstar" /><img src={Ratingstar} alt="Ratingstar" /><img src={Ratingstar} alt="Ratingstar" /><img src={Ratingstar} alt="Ratingstar" /><img src={Ratingstar} alt="Ratingstar" /></strong></h4>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className="testibox01">
                                        <p>"Great job by the team at New Vision Digital! They had ideas and suggestions that have benefited my business. I’m happy with our Google Presence and look forward to a long and fruitful relationship with NVD."</p>
                                        <h4>Mr. Basant Chawla <span>Owner, Fun n Food Village.</span><strong><img src={Ratingstar} alt="Ratingstar" /><img src={Ratingstar} alt="Ratingstar" /><img src={Ratingstar} alt="Ratingstar" /><img src={Ratingstar} alt="Ratingstar" /><img src={Ratingstar} alt="Ratingstar" /></strong></h4>
                                    </div>
                                </div>
                            </OwlCarousel>                            
                                :""
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeTestimonial;