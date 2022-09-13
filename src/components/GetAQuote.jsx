import React, { useEffect, useState, useRef } from 'react';
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import REGX from '../constants/Regx';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";


const GetAQuote = (props) => {


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
            duration: "-1",
            durationError: "",
            updateOnWhatsapp: "No",
            updateOnWhatsappError: "",
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
        if (GetAQuoteFormField.duration === "-1") {
            errorFound = true;
            GetAQuoteFormField.durationError = "this field is required";
        } else {
            GetAQuoteFormField.durationError = "";
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
            formData.append("duration", GetAQuoteFormField.duration);
            formData.append("updateOnWhatsapp", GetAQuoteFormField.updateOnWhatsapp);
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
                    props.handleCancel();
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
        <Modal className="getform" title="Get a Quote" visible={props.isModalVisible} onOk={() => props.handleOk()} onCancel={() => props.handleCancel()}>
            <div className="getcalform">
                <form 
                onSubmit={(e) => submitHandler(e)}
                // onSubmit={(e) => {
                //     if (window.grecaptcha.getResponse()=== "") {
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
                        <li>
                            <select defaultValue={GetAQuoteForm.duration} onChange={e => setGetAQuoteForm({
                                ...GetAQuoteForm,
                                duration: e.target.value,
                                durationError: ""
                            })} disabled={GetAQuoteForm.processing}>
                                <option value="-1">Duration</option>
                                <option value="1 Month">1 Month</option>
                                <option value="2 Months">2 Months</option>
                                <option value="3 Months">3 Months</option>
                                <option value="More Than 3 Months">More Than 3 Months</option>            
                                </select>
                            <span className='error'>{GetAQuoteForm.durationError}</span>
                        </li>
                        <li>
                            <div className="custom-control custom-switch">
                                <div className="check-whatsapp">
                                <label className="custom-control-label" for="switch1">Get Updates over Whatsapp</label>
                                <input type="checkbox" className="custom-control-input" id="switch1" checked={GetAQuoteForm.updateOnWhatsapp=="Yes"?true:false} value={GetAQuoteForm.updateOnWhatsapp} onClick={e => setGetAQuoteForm({
                                    ...GetAQuoteForm,
                                    updateOnWhatsapp: (e.currentTarget.checked?"Yes":"No"),
                                    updateOnWhatsappError: ""
                                })} disabled={GetAQuoteForm.processing}/>
                                
                                </div>
                            </div>
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
        </Modal>
    )
}



export default GetAQuote;