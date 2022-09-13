import { Link } from "react-router-dom";

import Arrowblack from '../assets/images/arrow-black.png';
import Phonewhite from '../assets/images/call-white.png';

const Calltoactionpage = () => {
    return(
        <div className="pagecalaction001">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="calltext01  pagecalaction01">
                            <h5>We are all Set to Craft an eCommerce Strategic Roadmap for your business. Are you ready to trust us?</h5>
                            <h6>If yes, do not wait anymore and connect with our experts today. </h6>
                            <Link to="/contact-us" className="yellowbtn">Get in Touch <img src={Arrowblack} alt="Arrowblack" /></Link>
                            <a href="tel:97143321900 "><img src={Phonewhite} alt="Phonewhite" /> +971 4332 1900</a>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Calltoactionpage;