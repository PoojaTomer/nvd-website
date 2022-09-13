import React from "react";
import Ouraction from "../assets/images/our-accotion.png";
import Client01 from "../assets/images/client01.png";
import Client02 from "../assets/images/client02.png";
import Client03 from "../assets/images/client03.png";
import Client04 from "../assets/images/client04.png";
import Client05 from "../assets/images/client05.png";
import Client06 from "../assets/images/client06.png";
import Client07 from "../assets/images/client07.png";
import Client08 from "../assets/images/client08.png";
import Client09 from "../assets/images/client09.png";
import Client010 from "../assets/images/client010.png";
import Client011 from "../assets/images/client011.png";
import Client012 from "../assets/images/client012.png";
import Client013 from "../assets/images/client013.png";
import Client014 from "../assets/images/client014.png";
import Client015 from "../assets/images/client015.png";
import Client016 from "../assets/images/client016.png";
import Client017 from "../assets/images/client017.png";
import Client018 from "../assets/images/client018.png";
import Loadingicon from "../assets/images/loading-icon.png";
import Rocket from "../assets/images/roccket.png";
import Handshake from "../assets/images/handshake.png";
import Fly from "../assets/images/plan.png";
import Cheese from "../assets/images/chase.png";
import Mapicon from "../assets/images/mapicon.png";
import Chaseone from "../assets/images/chase01.gif";
import Handhsakeone from "../assets/images/handshake-one.gif";

const Clients = () =>{
    return(
        <div className="clients01">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="heading02">
                            <img src={Ouraction} alt="Ouraction" />
                            <h3>Success Stories Crafted on Global Forefront for</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="rocket01"><img src={Rocket} alt="Rocket" /></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 col-xs-6"><div className="clitbox01"><img src={Client01} alt="Client01" /></div></div>
                    <div className="col-md-2 col-xs-6"><div className="clitbox01"><img src={Client02} alt="Client01" /></div></div>
                    <div className="col-md-2 col-xs-6"><div className="clitbox01"><img src={Client03} alt="Client01" /></div></div>
                    <div className="col-md-2 col-xs-6"><div className="clitbox01"><img src={Client04} alt="Client01" /></div></div>
                    <div className="col-md-2 col-xs-6"><div className="clitbox01"><img src={Client05} alt="Client01" /></div></div>
                    <div className="col-md-2 col-xs-6"><div className="clitbox01"><img src={Client06} alt="Client01" /></div></div>
                    <div className="col-md-2 col-xs-6"><div className="clitbox01"><img src={Client07} alt="Client01" /></div></div>
                    <div className="col-md-2 col-xs-6"><div className="clitbox01"><img src={Client08} alt="Client01" /></div></div>
                    <div className="col-md-2 col-xs-6"><div className="clitbox01"><img src={Client09} alt="Client01" /></div></div>
                    <div className="col-md-2 col-xs-6"><div className="clitbox01"><img src={Client010} alt="Client01" /></div></div>
                    <div className="col-md-2 col-xs-6"><div className="clitbox01"><img src={Client011} alt="Client01" /></div></div>
                    <div className="col-md-2 col-xs-6"><div className="clitbox01"><img src={Client012} alt="Client01" /></div></div>
                    <div className="col-md-2 col-xs-6"><div className="clitbox01"><img src={Client013} alt="Client01" /></div></div>
                    <div className="col-md-2 col-xs-6"><div className="clitbox01"><img src={Client014} alt="Client01" /></div></div>
                    <div className="col-md-2 col-xs-6"><div className="clitbox01"><img src={Client015} alt="Client01" /></div></div>
                    <div className="col-md-2 col-xs-6"><div className="clitbox01"><img src={Client016} alt="Client01" /></div></div>
                    <div className="col-md-2 col-xs-6"><div className="clitbox01"><img src={Client017} alt="Client01" /></div></div>
                    <div className="col-md-2 col-xs-6"><div className="clitbox01"><img src={Client018} alt="Client01" /></div></div>
                </div>
                <div className="row">
                    <div className="col-md-12"><div className="loading-icon"><img src={Loadingicon} alt="Loadingicon" /></div></div>
                </div>
            </div>
            <div className="handshake"><img src={Handhsakeone} alt="Handhsakeone" /></div>
            <div className="fly"><img src={Fly} alt="Fly" /></div>
            <div className="chese"><img src={Chaseone} alt="Chaseone" /></div>
            <div className="map"><img src={Mapicon} alt="Mapicon" /></div>
        </div>
    )
}


export default Clients;