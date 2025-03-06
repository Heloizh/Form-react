import React from "react";

/* ICONS */
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

const EmailPassword = () => {
  return (
    <div>
      {/* email and password */}
      <section className="section-space" style={{gap: "10px"}}>
        <div className="box-info" style={{padding: "8px"}}>
          <p>+1 00000-0000</p>
          {" Number confirmed "}
        </div>
        {/* Email and password */}
        <div className="box-info" style={{padding: "18px"}}>
          <div style={{marginBottom: "16px"}}>
            <p>Enter your Email</p>
            <input type="email" className="" />
          </div>
          <div>
            <p>Set a password</p>
            <span>
              <input type="password" style={{marginBottom: "10px"}}/>
              <IoMdEye className="icons-position" style={{display: "none", cursor: "pointer", right: "15px"}}/> 
              <IoMdEyeOff  className="icons-position" style={{right: "15px", cursor: "pointer"}}/>
            </span>
            {"Good password"}
          </div>
        </div>
        <button style={{border: "none", backgroundColor: "#007AFF", color: "white", fontWeight: "bold", fontSize: "10px"}}>Register Now</button>
      </section>
    </div>
  );
};

export default EmailPassword;
