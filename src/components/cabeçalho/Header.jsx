import React from "react";

/* ICON */
import { IoMdClose } from "react-icons/io";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "cover",
        gap: "70vh",
        marginBottom: "6vh",
      }}
    >
      {/* logo */}
      <img src="src/assets/Logo.svg" alt="" style={{ width: "130px" }} />
      {/* navigation carrossel */}
      <div className="progress-container">
        <span className="step active"></span>
        <span className="line"></span>
        <span className="step"></span>
        <span className="line"></span>
        <span className="step"></span>
      </div>
      {/* exit */}
      <IoMdClose
        style={{ fontSize: "25px", color: "grey", cursor: "pointer" }}
      />
    </header>
  );
};

export default Header;
