import React, { useState, useEffect, useRef, Fragment } from 'react';
import { Modal } from 'antd';
import axios from 'axios';
import REGX from '../constants/Regx';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";




const Careerform = ({ isModalVisible, setVisible }) => {


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

    totalExperience: "",
    totalExperienceError: "",
    relevantExperience: "",
    relevantExperienceError: "",
    currentPackage: "",
    currentPackageError: "",

    expectedPackage: "",
    expectedPackageError: "",
    noticePeriod: "",
    noticePeriodError: "",
    resumeUploadFile: null,
    resumeUpload: "",
    resumeUploadError: "",

    message: "",
    messageError: ""
  });

  const inputResumeUploadFile = useRef(null);

  const inputResumeUploadFileChangeHandler = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    let url = reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      let fileTypes = reader.result.split(";");

      if (fileTypes[0] === "data:application/pdf") {
        setGetAQuoteForm({
          ...GetAQuoteForm,
          resumeUploadFile: null,
          resumeUpload: reader.result,
          resumeUploadError: "",
          resumeUploadFileError: ""
        });
      } else {
        setGetAQuoteForm({
          ...GetAQuoteForm,
          resumeUploadFile: null,
          resumeUpload: "",
          resumeUploadError: "",
          resumeUploadFileError: "Only pdf file allowed!"
        });
      }
    }.bind(this);
  }

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
      totalExperience: "",
      totalExperienceError: "",
      relevantExperience: "",
      relevantExperienceError: "",
      currentPackage: "",
      currentPackageError: "",

      expectedPackage: "",
      expectedPackageError: "",
      noticePeriod: "",
      noticePeriodError: "",
      resumeUploadFile: null,
      resumeUpload: "",
      resumeUploadError: "",
      message: "",
      messageError: ""
    });
  }, [isModalVisible]);


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
    }else {
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

    if (GetAQuoteFormField.totalExperience === "") {
      errorFound = true;
      GetAQuoteFormField.totalExperienceError = "this field is required";
    } else {
      GetAQuoteFormField.totalExperienceError = "";
    }

    if (GetAQuoteFormField.relevantExperience === "") {
      errorFound = true;
      GetAQuoteFormField.relevantExperienceError = "this field is required";
    } else {
      GetAQuoteFormField.relevantExperienceError = "";
    }
    if (GetAQuoteFormField.currentPackage === "") {
      errorFound = true;
      GetAQuoteFormField.currentPackageError = "this field is required";
    } else {
      GetAQuoteFormField.currentPackageError = "";
    }

    if (GetAQuoteFormField.expectedPackage === "") {
      errorFound = true;
      GetAQuoteFormField.expectedPackageError = "this field is required";
    } else {
      GetAQuoteFormField.expectedPackageError = "";
    }

    if (GetAQuoteFormField.noticePeriod === "") {
      errorFound = true;
      GetAQuoteFormField.noticePeriodError = "this field is required";
    } else {
      GetAQuoteFormField.noticePeriodError = "";
    }

    if (inputResumeUploadFile.current.files.length === 0) {
      GetAQuoteFormField.resumeUploadFile = null;
      errorFound = true;
      GetAQuoteFormField.resumeUploadFileError = "this field is required";
    } else if (GetAQuoteFormField.resumeUploadFileError.length > 0) {
      errorFound = true;
    } else {
      GetAQuoteFormField.resumeUploadFile = inputResumeUploadFile.current.files[0];
      GetAQuoteFormField.resumeUploadFileError = "";
    }
    console.log("errorFound", errorFound);
    if (errorFound) {
      setGetAQuoteForm({
        ...GetAQuoteFormField,
        processing: false
      });

    } else {
      let formData = new FormData();
      formData.append("subject", "Boost Your Career With Us");
      formData.append("fullName", GetAQuoteFormField.fullName);
      formData.append("email", GetAQuoteFormField.email);

      formData.append("mobile", GetAQuoteFormField.mobile);
      formData.append("services", GetAQuoteFormField.services);
      formData.append("message", GetAQuoteFormField.message);

      formData.append("totalExperience", GetAQuoteFormField.totalExperience);
      formData.append("relevantExperience", GetAQuoteFormField.relevantExperience);
      formData.append("currentPackage", GetAQuoteFormField.currentPackage);
      formData.append("expectedPackage", GetAQuoteFormField.expectedPackage);
      formData.append("noticePeriod", GetAQuoteFormField.noticePeriod);
      formData.append("resume", GetAQuoteFormField.resumeUploadFile);

      formData.append("submit-form", "submit-form");

      axios({
        url: `https://www.newvisiondigital.co/sendcareeremail.php`,
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
          setVisible(false);
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
    <Fragment>
      <Modal
        className='intershpform001'
        visible={isModalVisible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <div className='intrshipform carerform'>
          <h3>Boost Your Career With Us</h3>
          <form 
          onSubmit={(e) => submitHandler(e)}
          // onSubmit={(e) => {
          //   if (window.grecaptcha.getResponse()=== "") {
          //     e.preventDefault();
          //     alert(
          //       "Please click <I'm not a robot> before sending the form"
          //     );
          //   } else {
          //       submitHandler(e);
          //   }
          // }}
          >
            <ul>
              <li><input type="text" placeholder="Name" value={GetAQuoteForm.fullName} onChange={e => setGetAQuoteForm({
                ...GetAQuoteForm,
                fullName: e.target.value,
                fullNameError: ""
              })}
                disabled={GetAQuoteForm.processing}
              />
                <span className='error text-danger'>{GetAQuoteForm.fullNameError}</span>
              </li>
              <li><input type="text" placeholder="Email Id" value={GetAQuoteForm.email} onChange={e => setGetAQuoteForm({
                ...GetAQuoteForm,
                email: e.target.value,
                emailError: ""
              })} disabled={GetAQuoteForm.processing} />
                <span className='error text-danger'>{GetAQuoteForm.emailError}</span></li>
              <li><input type="text" placeholder="Phone No." value={GetAQuoteForm.mobile} onChange={e => setGetAQuoteForm({
                ...GetAQuoteForm,
                mobile: e.target.value,
                mobileError: ""
              })} disabled={GetAQuoteForm.processing} />
                <span className='error text-danger'>{GetAQuoteForm.mobileError}</span></li>
              <li>
                <select defaultValue={GetAQuoteForm.services} onChange={e => setGetAQuoteForm({
                  ...GetAQuoteForm,
                  services: e.target.value,
                  servicesError: ""
                })} disabled={GetAQuoteForm.processing}>
                  <option value="-1">Job Applying For</option>
                  <option value="Social Media Executive">Social Media Executive</option>
                  <option value="PPC Executive">PPC Executive</option>
                  <option value="Content Writer">Content Writer</option>
                  <option value="Social Media Manager">Social Media Manager</option>
                  <option value="SEO Executive">SEO Executive</option>
                  <option value="Business Development Executive">Business Development Executive</option>
                </select>
                <span className='error text-danger'>{GetAQuoteForm.servicesError}</span>
              </li>
              <li>
                <input type="Text" placeholder="Total Experience" value={GetAQuoteForm.totalExperience} onChange={e => setGetAQuoteForm({
                  ...GetAQuoteForm,
                  totalExperience: e.target.value,
                  totalExperienceError: ""
                })} disabled={GetAQuoteForm.processing} />
                <span className='error text-danger'>{GetAQuoteForm.totalExperienceError}</span></li>
              <li>
                <input type="Text" placeholder="Relevant Experience" value={GetAQuoteForm.relevantExperience} onChange={e => setGetAQuoteForm({
                  ...GetAQuoteForm,
                  relevantExperience: e.target.value,
                  relevantExperienceError: ""
                })} disabled={GetAQuoteForm.processing} />
                <span className='error text-danger'>{GetAQuoteForm.relevantExperienceError}</span></li>
              <li>
                <input type="Text" placeholder="Current Package" value={GetAQuoteForm.currentPackage} onChange={e => setGetAQuoteForm({
                  ...GetAQuoteForm,
                  currentPackage: e.target.value,
                  currentPackageError: ""
                })} disabled={GetAQuoteForm.processing} />
                <span className='error text-danger'>{GetAQuoteForm.currentPackageError}</span></li>
              <li><input type="Text" placeholder="Expected package" value={GetAQuoteForm.expectedPackage} onChange={e => setGetAQuoteForm({
                ...GetAQuoteForm,
                expectedPackage: e.target.value,
                expectedPackageError: ""
              })} disabled={GetAQuoteForm.processing} />
                <span className='error text-danger'>{GetAQuoteForm.expectedPackageError}</span></li>
              <li><input type="Text" placeholder="Notice Period" value={GetAQuoteForm.noticePeriod} onChange={e => setGetAQuoteForm({
                ...GetAQuoteForm,
                noticePeriod: e.target.value,
                noticePeriodError: ""
              })} disabled={GetAQuoteForm.processing} />
                <span className='error text-danger'>{GetAQuoteForm.noticePeriodError}</span></li>
              <li>
                <input type="File" placeholder="Resume Upload" ref={inputResumeUploadFile} onChange={(e) => inputResumeUploadFileChangeHandler(e)} />
                <span className='error text-danger'>{GetAQuoteForm.resumeUploadFileError}</span>
              </li>
              <li><textarea placeholder="Message" value={GetAQuoteForm.message} onChange={e => setGetAQuoteForm({
                ...GetAQuoteForm,
                message: e.target.value,
                messageError: ""
              })}
                disabled={GetAQuoteForm.processing}
              ></textarea>
                <span className='error text-danger'>{GetAQuoteForm.messageError}</span>
              </li>
              <li>
              <ReCAPTCHA
                  ref={captchaRef}
                  sitekey="6LfHgMYgAAAAABzCUIvjl3Y0H5Sp1TGXwnuU_aTZ"
                  size="invisible"
              />
              </li><br />
              <li><button disabled={GetAQuoteForm.processing}>Send Message</button></li>
            </ul>
          </form>
        </div>
      </Modal>
    </Fragment>
  );
};

export default Careerform;