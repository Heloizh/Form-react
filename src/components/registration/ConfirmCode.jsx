import React from "react";

/* ICONS */
import { TbReload } from "react-icons/tb";
import { MdEdit } from "react-icons/md";

const ConfirmCode = () => {
  return (
    <div style={{ display: "none" }}>
      <section className="section-space" style={{ gap: "25px" }}>
        {/* number confirmed */}
        <div className="box-info" style={{ padding: "6px", height: "60px" }}>
          <p style={{ fontSize: "12px", marginBottom: "3px" }}>+1 00000-0000</p>
          <div className="reusable-flex" style={{ gap: "37vh" }}>
            <p>Number not confirmed yet</p>
            <MdEdit style={{fontSize: "15px", color: "blue",  cursor: "pointer"}}/>
          </div>
        </div>
        {/* code */}
        <div>
          <p style={{ fontSize: "9px" }}>Confirmation code</p>

          <span className="reusable-flex" style={{ gap: "50px" }}>
            <input type="" />
            <span className="reusable-flex" style={{ fontSize: "12px", width: "100%", gap: "5px" , color: "blue", cursor: "pointer"}}>
            <TbReload />
              <span>Send again</span>
            </span>
          </span>

          <p style={{ fontSize: "9px" }}>
            Confirm phone number with code from sms message
          </p>
        </div>
        {/* confirm button*/}
        <button>Confirm</button>
      </section>
    </div>
  );
};

export default ConfirmCode;
