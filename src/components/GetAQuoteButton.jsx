import React, {useState} from "react"
import GetAQuote from "./GetAQuote";
import Arrow from '../assets/images/arrow.png';


export default function GetAQuoteButton (props) {
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
    return (
        <>
        <div className="ser-quote">
        <a href="javascript:void();" onClick={showModal}>{props.Title ? props.Title:"Get a Quote" }<img src={Arrow} alt="arow" /></a>
        </div>
        <GetAQuote isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} {...props} />
        </>
    )
}