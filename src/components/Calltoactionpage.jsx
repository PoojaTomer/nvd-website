import React, { useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom";

import axios from 'axios';
import REGX from '../constants/Regx';
import { useNavigate } from 'react-router-dom';
import Whiteclode from "../assets/images/innerclodbg.png";
import Arrowblack from '../assets/images/arrow-black.png';
import Phonewhite from '../assets/images/call-white.png';
import Crown from "../assets/images/crown.png";
import Talkower from "../assets/images/talkour.png";
import Handright from "../assets/images/handright.png";
import ReCAPTCHA from "react-google-recaptcha";

const Calltoactionpage = (props) => {
    const navigate = useNavigate();
    const reCaptcha = useRef();
    const captchaRef = useRef(null)
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
    }, []);

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
        <div className="calactionpage">
            <div className="calactionpageclod"><img src={Whiteclode} alt="Whiteclode" /></div>
            <div className="nameplate"><img src={Talkower} alt="Talkower" /></div>
            <div className="handrightimg"><img src={Handright} alt="Handright" /></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="callform01">
                        <form 
                            onSubmit={(e) => submitHandler(e)}
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
                                            <option value="Search Engine Optimization">Search Engine Optimization</option>
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
                                    <li><textarea placeholder="Message" value={GetAQuoteForm.message} onChange={e => setGetAQuoteForm({
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
                                    <li><button disabled={GetAQuoteForm.processing}>Submit</button></li>


                                </ul>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="calltext01 callinrtxt">
                            <h3>{props.Title ? props.Title :<>
                                Experience the Magic of Marketing and Understand the Science of Growth in Sales with our Marketing Services </>}</h3>
                                <p>
                                {
                                    props.subTitle ?props.subTitle :<>Connect with our experts to get a quote for your business today. </>
                                }
                                </p>
                            <Link to="/contact-us" className="yellowbtn">Get in Touch <img src={Arrowblack} alt="Arrowblack" /></Link>
                            <a href="tel:971547064859 "><img src={Phonewhite} alt="Phonewhite" /> +971 5470 64859</a>
                        </div>
                        <div className="crowncall01"><img src={Crown} alt="Crown" /></div>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calltoactionpage;