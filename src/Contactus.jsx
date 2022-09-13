import React, { useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import REGX from './constants/Regx';
import { useNavigate } from 'react-router-dom';
import Headicon from "./assets/images/head-office.png";
import Phoneicon from "./assets/images/phone-icon.png";
import Emailicon from "./assets/images/email-icon.png";
import Clockicon from "./assets/images/clock-icon.png";
import Addressone from "./assets/images/address01.png";
import Addresstwo from "./assets/images/address02.png";
import Addressthree from "./assets/images/address03.png";
import Addressfour from "./assets/images/address04.png";
import Addressfive from "./assets/images/address05.png";
import Laptopboy from "./assets/images/laptopboy.png";
import Talkexpart from "./assets/images/talkouright.png";

const Contactus = (props) => {
    const navigate = useNavigate();
      const captchaRef = useRef(null)
    let captcha;
  
    const reCaptcha = useRef();
    const [GetAQuoteForm, setGetAQuoteForm] = useState({
        processing: false,
        fullName: "",
        fullNameError: "",
        email: "",
        emailError: "",
        mobile: "",
        mobileError: "",
        services: "-1",
        servicesError: "",
        message: "",
        messageError: ""
    });

    useEffect(() => {
        setGetAQuoteForm({
            processing: false,
            fullName: "",
            fullNameError: "",
            email: "",
            emailError: "",
            mobile: "",
            mobileError: "",
            services: "-1",
            servicesError: "",
            message: "",
            messageError: ""
        });
    }, [props.isModalVisible]);

    const submitHandler = (e) => {
        e.preventDefault();
        const token = captchaRef.current.getValue();
        captchaRef.current.reset();
        let errorFound = false;

        setGetAQuoteForm({
            ...GetAQuoteForm,
            processing: true
        });

        let GetAQuoteFormField = { ...GetAQuoteForm };

        if (GetAQuoteFormField.fullName === "") {
            errorFound = true;
            GetAQuoteFormField.fullNameError = "this field is required";
        } else if (!REGX.FULLNAME.test(GetAQuoteFormField.fullName)) {
            errorFound = true;
            GetAQuoteFormField.fullNameError = "alphabatic only";
        } else {
            GetAQuoteFormField.fullNameError = "";
        }
        if (GetAQuoteFormField.email === "") {
            errorFound = true;
            GetAQuoteFormField.emailError = "this field is required";
        } else if (!REGX.EMAIL.test(GetAQuoteFormField.email)) {
            errorFound = true;
            GetAQuoteFormField.emailError = "enter valid email";
        } else {
            GetAQuoteFormField.emailError = "";
        }
        if (GetAQuoteFormField.mobile === "") {
            errorFound = true;
            GetAQuoteFormField.mobileError = "this field is required";
        } else if (!REGX.MOBILE_NUMBER.test(GetAQuoteFormField.mobile)) {
            errorFound = true;
            GetAQuoteFormField.mobileError = "enter valid phone number";
        } else {
            GetAQuoteFormField.mobileError = "";
        }
        if (GetAQuoteFormField.services === "-1") {
            errorFound = true;
            GetAQuoteFormField.servicesError = "this field is required";
        } else {
            GetAQuoteFormField.servicesError = "";
        }

        if (GetAQuoteFormField.message === "") {
            errorFound = true;
            GetAQuoteFormField.messageError = "this field is required";
        } else {
            GetAQuoteFormField.messageError = "";
        }

        if (errorFound) {
            setGetAQuoteForm({
                ...GetAQuoteFormField,
                processing: false
            });

        } else {
            let formData = new FormData();
            formData.append("fullName", GetAQuoteFormField.fullName);
            formData.append("email", GetAQuoteFormField.email);

            formData.append("mobile", GetAQuoteFormField.mobile);
            formData.append("services", GetAQuoteFormField.services);
            formData.append("message", GetAQuoteFormField.message);
            formData.append("submit-form", "submit-form");

            axios({
                url: `https://www.newvisiondigital.co/sendemail.php`,
                method: "post",
                responseType: 'json',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                if (response.data.status === "success") {
                    setGetAQuoteForm({
                        processing: false,
                        fullName: "",
                        fullNameError: "",
                        email: "",
                        emailError: "",
                        mobile: "",
                        mobileError: "",
                        services: "-1",
                        servicesError: "",
                        message: "",
                        messageError: ""
                    });
                    // props.handleCancel();
                    navigate("/thank-you");
                } else {
                    alert(response.data.message);
                }
                // alert("success");
            }, error => {
                console.log("error", error);
                alert("error");
            });



        }


    }
    return (
        <div className="serchengne01">
            <div className="bredcum001">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Contact Us</h1>
                            <p><Link to='/'>Home</Link>  Contact Us</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='contadresbox'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h3>Get In Touch</h3>
                            <ul>
                                <li><img src={Addressone} alt="Addressone" /></li>
                                <li><img src={Addresstwo} alt="Addresstwo" /></li>
                                <li><img src={Addressthree} alt="Addressthree" /></li>
                                <li><img src={Addressfour} alt="Addressfour" /></li>
                                <li><img src={Addressfive} alt="Addressfive" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contfomr01">
                <div className="container">
                    <div className="row">
                        { /* <div className="col-md-6">
                            <div className="conttextleft">
                                <h3>Get In Touch</h3>
                                <ul>
                                    <li>
                                        <img src={Headicon} alt="Headicon" />
                                        <h5>Main Head Office</h5>
                                        <p>Dubai Burj Downtown, <br />Suite 506A, Saaha Offices D, <br />Old Town Island, Dubai, AE</p>
                                    </li>
                                    <li>
                                        <img src={Phoneicon} alt="Phoneicon" />
                                        <h5>Phone Number</h5>
                                        <p>+971 569977333</p>
                                    </li>
                                    <li>
                                        <img src={Emailicon} alt="Emailicon" />
                                        <h5>Email Address</h5>
                                        <p>hello@newvisiondigital.co</p>
                                    </li>
                                    <li>
                                        <img src={Clockicon} alt="Clockicon" />
                                        <h5>Working Hours</h5>
                                        <p><span>Mon-Fri :</span> 9:00 am : 6:00pm <br /><span>Sat :</span> 9:30 am to 4:30 pm</p>
                                    </li>
                                </ul>
                            </div>
                        </div> */ }
                        <div className="col-md-12">
                            <h3>Send A Message</h3>
                            <form 
                            onSubmit={(e) => submitHandler(e)}
                         
                            //  onSubmit={(e) => {
                            //     console.log("aaaaa" + captcha.execute());
                            //     if (captcha.execute() === "") {
                            //       e.preventDefault();
                            //       alert(
                            //         "Please click <I'm not a robot> before sending the form"
                            //       );
                            //     } else {
                            //         submitHandler(e);
                            //     }
                            //   }}
                            >
                                <ul>
                                    <li><input type="text" placeholder="Name" value={GetAQuoteForm.fullName} onChange={e => setGetAQuoteForm({
                                        ...GetAQuoteForm,
                                        fullName: e.target.value,
                                        fullNameError: ""
                                    })}
                                        disabled={GetAQuoteForm.processing}
                                    />
                                        <span className='error'>{GetAQuoteForm.fullNameError}</span>
                                    </li>
                                    <li><input type="text" placeholder="Email Id" value={GetAQuoteForm.email} onChange={e => setGetAQuoteForm({
                                        ...GetAQuoteForm,
                                        email: e.target.value,
                                        emailError: ""
                                    })} disabled={GetAQuoteForm.processing} />
                                        <span className='error'>{GetAQuoteForm.emailError}</span></li>
                                    <li><input type="text" placeholder="Phone No." value={GetAQuoteForm.mobile} onChange={e => setGetAQuoteForm({
                                        ...GetAQuoteForm,
                                        mobile: e.target.value,
                                        mobileError: ""
                                    })} disabled={GetAQuoteForm.processing} />
                                        <span className='error'>{GetAQuoteForm.mobileError}</span></li>
                                    <li>
                                        <select defaultValue={GetAQuoteForm.services} onChange={e => setGetAQuoteForm({
                                            ...GetAQuoteForm,
                                            services: e.target.value,
                                            servicesError: ""
                                        })} disabled={GetAQuoteForm.processing}>
                                            <option value="-1">Select Services</option>
                                            <option value="Social Media Optimization">Social Media Optimization</option>
                                            <option value="Influencer Marketing">Influencer Marketing</option>
                                            <option value="Online Reputation Marketing">Online Reputation Marketing</option>
                                            <option value="Wordpress Development">Email Marketing</option>
                                            <option value="Social Media Marketing">Ecommerce Marketplace Management</option>
                                            <option value="PPC">PPC</option>
                                            <option value="Social Media Ads">Social Media Ads</option>
                                            <option value="Wordpress Development">Wordpress Development</option>
                                            <option value="Magento Development">Magento Development</option>
                                            <option value="Shopify Development">Shopify Development</option>
                                            <option value="React Development">React Development</option>
                                            <option value="PHP Development">PHP Development</option>
                                            <option value="Mobile App Development">Mobile App Development</option>
                                            <option value="Web Design">Web Design</option>
                                            <option value="Logo Design">Logo Design</option>
                                            <option value="Business Setup">Business Setup</option>
                                            <option value="Accounting & Auditing">Accounting & Auditing</option>
                                            <option value="CFO Service">CFO Service</option>
                                            <option value="Zoho Consulting">Zoho Consulting</option>
                                            <option value="Cloud Services">Cloud Services</option>
                                        </select>
                                        <span className='error'>{GetAQuoteForm.servicesError}</span>
                                    </li>
                                    <li><textarea placeholder="Briefly describe your project" value={GetAQuoteForm.message} onChange={e => setGetAQuoteForm({
                                        ...GetAQuoteForm,
                                        message: e.target.value,
                                        messageError: ""
                                    })}
                                        disabled={GetAQuoteForm.processing}
                                    ></textarea>
                                        <span className='error'>{GetAQuoteForm.messageError}</span>
                                    </li>
                                   <li>
                                   <ReCAPTCHA
                                        ref={captchaRef}
                                        sitekey="6LfHgMYgAAAAABzCUIvjl3Y0H5Sp1TGXwnuU_aTZ"
                                        size="invisible"
                                    />
              </li>
                                    <li><button type="submit" disabled={GetAQuoteForm.processing}>Submit</button></li>


                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='laptopboy'><img src={Laptopboy} alt="Laptopboy" /></div>
                <div className='talkexpert'><img src={Talkexpart} alt="Talkexpart" /></div>
            </div>
        </div>
    )
}

export default Contactus;