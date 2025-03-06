import React from "react";

import Button from "../Button";

const PersonalData = () => {
  return (
    <div className="container" style={{display: "none"}}> {/* desativado */}
      <section className="section-space" style={{marginTop: "-15px", gap: "10px"}}>
        {/* terms */}
        <span className="reusable-flex" style={{ justifyContent: "start" }}>
          <input type="checkbox" style={{ width: "15px" }} />
          <p>I agree with</p>
          <a href="" style={{fontSize: "10px", marginLeft: "5px"}}>Terms of use</a>
        </span>
        {/* Personal data */}
        <div className="box-info" style={{padding: "15px"}}>
          <div className="">
            <h2>Personal Data</h2>
            <p>Specify exactly as in your passport</p>
          </div>
          <div>
            {/* Name */}
            <div>
              <p>First Name</p>
              <input type="text" />
            </div>
            {/* Second name */}
            <div>
              <p>Second Name</p>
              <input type="text" />
            </div>
            {/* Birth */}
            <div className="reusable-flex" style={{gap: "15vh"}}>
              <span>
                <p>Date of Birth</p>
                <input type="date" style={{width: "100%"}} />
              </span>
              <span>
                <p>Place of Birth</p>
                <select name="country" className="select-options" style={{width: "70%"}}>
                  <option value="br">Brasil</option>
                  <option value="us">Estados Unidos</option>
                  <option value="pt">Portugal</option>
                </select>  
              </span>
            </div>
          </div>
        </div>
          <Button/>
      </section>
    </div>
  );
};

export default PersonalData;
