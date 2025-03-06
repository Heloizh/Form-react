import React from "react";

import Button from "../Button";

/* ICONS */
import { IoAdd } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Contacts = () => {
  return (
    <div className="container">
      <section
        className="section-space"
        style={{ marginTop: "-15px", gap: "10px" }}
      >
        <div className="box-info">
          <header>
            <h2>Contacts</h2>
            <p>These contacts are used to inform about orders</p>
          </header>
          {/* email */}
          <div
            className="reusable-flex"
            style={{ justifyContent: "start", gap: "10px" }}
          >
            <MdOutlineMail className="icons-position" />
            <p style={{ textDecorationLine: "underline" }}>teste@gmail.com</p>
          </div>
          {/* phone number */}
          <div
            className="reusable-flex"
            style={{ justifyContent: "start", gap: "10px" }}
          >
            <FaPhone className="icons-position" />
            <p style={{ textDecorationLine: "underline" }}>+1 0000-0000</p>
          </div>
          <header>
            <h2>Social Network</h2>
            <p>Indicate the desired communication method</p>
          </header>
          {/* social media */}
          <div style={{ display: "flex", gap: "10px" }}>
            <select className="select-options" style={{ width: "30%" }}>
              <option value="">Value</option>
            </select>
            <span>
              <input type="text" style={{ width: "100%" }} />
            </span>
          </div>
          <div
            style={{
              marginTop: "10px",
              fontSize: "10px",
              color: "#007bff",
              cursor: "pointer",
            }}
          >
            <IoAdd
              className="icons-position"
              style={{ top: "5px", color: "#007bff" }}
            />
            <span>Add More</span>
          </div>
        </div>
        <Button />
      </section>
    </div>
  );
};

export default Contacts;
