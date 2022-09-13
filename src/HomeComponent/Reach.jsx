import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from 'antd';
import "../assets/css/style.css";
import Arrow from '../assets/images/arrow.png';
import Reachicon from "../assets/images/reachicon.png";
import Crown from "../assets/images/crown.png";
import PhotoFrame from "../assets/images/photoframe.png";
import Reachout from "../assets/images/reachright.png";
import GetAQuote from "../components/GetAQuote";
import Reachiocnone from "../assets/images/reachicon-one.gif";


const Reach = (props) =>{

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

    return(
        <div className="reachsell">
            <div className="crown"><img src={Crown} alt="Crown" /></div>
            <div className="photframe"><img src={PhotoFrame} alt="PhotoFrame" /></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="reachselltxt">
                            <h3>Advertise<span>!</span> Attract<span>!</span> Acquire<span>!</span> Encore<span>!</span></h3>
                            <p>We believe in easing digital marketing for your business without complicating the process.</p>
                            <a href="javascript:void();" onClick={showModal}>Get a Quote <img src={Arrow} alt="arow" /></a>
                        </div>
                        <div className="reachselimg"><img src={Reachiocnone} alt="Reachiocnone" /></div>
                    </div>
                </div>
            </div>
            <div className="reachout"><img src={Reachout} alt="Reachout" /></div>
            <GetAQuote isModalVisible={isModalVisible} handleOk ={handleOk} handleCancel={handleCancel}  {...props}/>
        </div>
    )
}

export default Reach;