import React from "react";

/* ICON */
import { IoMdLock } from "react-icons/io";

const PhoneNumber = () => {
  return (
    <div style={{ display: "none" }}>
      <section className="section-space">
        {/* message */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
            backgroundColor: "#F0F2F4",
            borderRadius: "5px",
            padding: "10px",
            fontSize: "10px",
            marginBottom: "5vh",
          }}
        >
          <IoMdLock style={{ fontSize: "25px", color: "grey" }} />
          <p>
            We take privacy issues seriously. You can be sure that your personal
            data is securely protected.
          </p>
        </div>
        {/* information  */}
        <div className="box-info" style={{ marginBottom: "7.5vh" }}>
          <p style={{ fontSize: "10px" }}>Enter your phone number</p>
          <div style={{ display: "flex", gap: "5px" }}>
            {/* DDD */}
            <select name="" id="" className="select-options" style={{width: "50px"}}>
              <option value="+1">+1</option>
              <option value="+2">+2</option>
            </select>
            {/* telephone number */}
            <input type="tel" style={{}} />
          </div>
        </div>
        {/* send code button */}
        <button>Send Code</button>
      </section>
    </div>
  );
};

export default PhoneNumber;
