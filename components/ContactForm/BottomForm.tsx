import React, { useState } from "react";
import axios from "axios";
// import style from "./index.module.scss";

function BottomForm() {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [description, setDescription] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [errors, setErrors] = useState({
    email: "",
    phoneNumber: "",
    fullName: "",
    services: "",
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFullName = (event: any) => {
    console.log(event.target.value);
    setFullName(event.target.value);
  };

  const handleEmail = (event: any) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const handlePhoneNumber = (event: any) => {
    console.log(event.target.value);
    setPhoneNumber(event.target.value);
  };
  const handleDescription = (event: any) => {
    console.log(event.target.value);
    setDescription(event.target.value);
  };

  const handleService = (event: any) => {
    const service = event.target.value;
    if (event.target.checked) {
      setServices((prevServices) => [...prevServices, service]);
    } else {
      setServices((prevServices) => prevServices.filter((s) => s !== service));
    }
  };

  const validateForm = () => {
    let formIsValid = true;
    let errors: any = {};

    if (!fullName) {
      formIsValid = false;
      errors["fullName"] = "Please enter your full name.";
    }
    if (!email) {
      formIsValid = false;
      errors["email"] = "Please enter your email address.";
    }
    if (!phoneNumber) {
      formIsValid = false;
      errors["phoneNumber"] = "Please enter your phone number.";
    }
    if (services.length === 0) {
      formIsValid = false;
      errors["services"] = "Please select at least one service.";
    }

    setErrors(errors);
    return formIsValid;
  };

  const submitResult = async (e: any) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      setLoading(true);
      let myServices = services.map((el) =>
        el === "Sitefromscratch"
          ? "Site from scratch"
          : el === "Appfromscratch"
          ? "App from scratch"
          : el === "UXUIDesign"
          ? "UI UX Design"
          : el === "MotionDesign"
          ? "Motion Design"
          : el
      );
      const msg = myServices.map((el) => `<p><b>${el}</b></p>`);
      const response = await axios.post(`https://api.thesuitch.com/contact`, {
        name: fullName,
        email: email,
        interested: myServices,
        phone_number: phoneNumber,
        description: description,
      });
      if (response.data) {
        setShowSuccessMessage(true);
        setEmail("");
        setPhoneNumber("");
        setFullName("");
        setServices([]);
        setDescription("");
        setLoading(false);
      }
    } catch (error: any) {
      setLoading(false);
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
    }
  };

  const closeSuccessMessage = () => {
    setShowSuccessMessage(false);
  };

  return (
    <>
      <form action="">
        <div className="">
          <h3 className="fw-normal">I&apos;m interested in...</h3>
          <div className={`btn_checkboxes`}>
            <div className={"chk_item"}>
              <input
                type="checkbox"
                value="Sitefromscratch"
                checked={services.includes("Sitefromscratch")}
                onClick={handleService}
                name=""
                id=""
              />
              <label htmlFor="">
                <span>Site From Scratch</span>
              </label>
            </div>
            <div className={`chk_item`}>
              <input
                type="checkbox"
                name=""
                value="Appfromscratch"
                checked={services.includes("Appfromscratch")}
                onClick={handleService}
                id=""
              />
              <label htmlFor="">
                <span>App From Scratch</span>
              </label>
            </div>
            <div className={`chk_item`}>
              <input
                type="checkbox"
                value="UXUIDesign"
                checked={services.includes("UXUIDesign")}
                onClick={handleService}
                name=""
                id=""
              />
              <label htmlFor="">
                <span>UX/UI design</span>
              </label>
            </div>
            <div className={`chk_item`}>
              <input
                type="checkbox"
                name=""
                value="Branding"
                checked={services.includes("Branding")}
                onClick={handleService}
                id=""
              />
              <label htmlFor="">
                <span>Branding</span>
              </label>
            </div>
            <div className={`chk_item`}>
              <input
                type="checkbox"
                value="Development"
                checked={services.includes("Development")}
                onClick={handleService}
                name=""
                id=""
              />
              <label htmlFor="">
                <span>Development</span>
              </label>
            </div>
            <div className={`chk_item`}>
              <input
                type="checkbox"
                value="Maintenance"
                checked={services.includes("Maintenance")}
                name=""
                id=""
                onClick={handleService}
              />
              <label htmlFor="">
                <span>Maintenance</span>
              </label>
            </div>
            <div className={`chk_item`}>
              <input
                type="checkbox"
                name=""
                value="MotionDesign"
                checked={services.includes("MotionDesign")}
                id=""
                onClick={handleService}
              />
              <label htmlFor="">
                <span>Motion Design</span>
              </label>
            </div>
          </div>
          {errors.services && <div className="error">{errors.services}</div>}
        </div>
        <div className="form-group">
          <input
            type="text"
            value={fullName}
            onChange={handleFullName}
            className="form-control"
            placeholder="Name*"
            name=""
            id=""
          />
          <span className="fm-line"></span>
        </div>
        {errors.fullName && <div className="error">{errors.fullName}</div>}
        <div className="form-group">
          <input
            type="email"
            value={email}
            onChange={handleEmail}
            className="form-control"
            placeholder="Email*"
            name=""
            id=""
          />
          <span className="fm-line"></span>
        </div>
        {errors.email && <div className="error">{errors.email}</div>}
        <div className="form-group">
          <input
            type="number"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            className="form-control"
            placeholder="Phone Number*"
            name=""
            id=""
          />
          <span className="fm-line"></span>
        </div>
        {errors.phoneNumber && (
          <div className="error">{errors.phoneNumber}</div>
        )}
        <div className="form-group">
          <textarea
            name=""
            className="form-control"
            placeholder="Descriptions"
            rows={1}
            id=""
            value={description}
            onChange={handleDescription}
          ></textarea>
          <span className="fm-line"></span>
        </div>
        <button
          className="btn btn-purple"
          onClick={submitResult}
          disabled={loading ? true : false}
        >
          {loading ? "Please Wait.." : "Send Request"}
        </button>
      </form>
      {showSuccessMessage && (
        <div className="success-message">
          <p>Form submitted successfully!</p>
          {/* <button onClick={closeSuccessMessage}>Close</button> */}
        </div>
      )}
    </>
  );
}

export default BottomForm;
