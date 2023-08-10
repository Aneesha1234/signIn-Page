import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import "./password.css";

export const PasswordPage = () => {
  const navigate = useNavigate();
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("OTP to reset your password");
  const [sixOtp, setSixOtp] = useState("");
  const [mailStatus, setMailStatus] = useState("");

  const submitOtp = () =>{
   
   

  }

  const handleInput = (e) => {
    setRecipient(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const num = Math.random();
    const number = num * 1000000;
    const otp = Math.floor(number);
    setSixOtp(otp);


    const emailParams = {
      to_email: recipient,
      subject: subject,
      message_html: otp,
    };


    // Replace these with your EmailJS service ID and template ID
    const serviceID = "service_8l1dt3e";
    const templateID = `template_qed0prn`;
    const userID = "-Y2-O696i0PYY1kRf";

    emailjs.send(serviceID, templateID, emailParams, userID).then(
      (response) => {
        setMailStatus("true");
        console.log("Email sent successfully:", response);
        // Handle success (e.g., show a success message)
      },
      (error) => {
        setMailStatus("false");
        console.log("Email sending failed:", error);
        // Handle error (e.g., show an error message)
      }
    );

    // Reset the form after submission
    setRecipient("");
  };
  return (
    <>
      {mailStatus === "true" ? (
        <div>
          <div className="otp-container">
            <h4>OTP Verification!</h4>
            <input
              className="otp-field"
              placeholder="Enter your 6 digit OTP"
              maxLength="6"
              type="text"
            />
            <button onClick={submitOtp} >Submit</button>
          </div>
        </div>
      ) : (
        <>
          <div className="total-container">
            <div className="header">
              <h1>Reset password</h1>
              <p>Enter your email to reset your password</p>
            </div>
            <div className="email-container">
              <p>Email</p>
              <input
                className="email-field"
                value={recipient}
                onChange={handleInput}
                type="text"
                placeholder="Enter your Email"
              />
              {/* <div className="invalid-email"></div> */}
              <button onClick={handleSubmit}>Reset password</button>
            </div>
            <div>
              {mailStatus === "false" && (
                <span>Something went wrong! Please try again</span>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};
