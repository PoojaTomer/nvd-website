import React from "react";
import { Link } from "react-router-dom";
import Blogone from "../assets/images/blog01.jpg";
import Blogtwo from "../assets/images/blog02.jpg";
import Blogthree from "../assets/images/blog03.jpg";
import Arrow from '../assets/images/arrow.png';


const Homeblog = () =>{
    return(
        <div className="homeblog">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3>Our Blog</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="blogbox01">
                            <img src={Blogone} alt="Blogone" />
                            <h4>Quora Marketing Strategy- Grow and Build Your Brand Successfully.</h4>
                            <p>The Internet is aging like a fine wine, with new techn ologies, smart applications, and convenience-enhancing websites springing up from time to time.</p>
                            <Link to="/">Read More <img src={Arrow} alt="arow" /></Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="blogbox01">
                            <img src={Blogtwo} alt="Blogone" />
                            <h4>Quora Marketing Strategy- Grow and Build Your Brand Successfully.</h4>
                            <p>The Internet is aging like a fine wine, with new techn ologies, smart applications, and convenience-enhancing websites springing up from time to time.</p>
                            <Link to="/">Read More <img src={Arrow} alt="arow" /></Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="blogbox01">
                            <img src={Blogthree} alt="Blogone" />
                            <h4>Quora Marketing Strategy- Grow and Build Your Brand Successfully.</h4>
                            <p>The Internet is aging like a fine wine, with new techn ologies, smart applications, and convenience-enhancing websites springing up from time to time.</p>
                            <Link to="/">Read More <img src={Arrow} alt="arow" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homeblog;