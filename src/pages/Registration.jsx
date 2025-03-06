import React from "react";

import PhoneNumber from "../components/registration/PhoneNumber";
import ConfirmCode from "../components/registration/ConfirmCode";
import EmailPassword from "../components/registration/EmailPassword";

const Registration = () => {
  return (
    <div
      className="container"
    >
      {/* header */}
      <header style={{ marginBottom: "5vh" }}>
        <h1>Registration</h1>
        <p style={{ fontWeight: "300" }}>
          Fill in the registration data. It will take a couple of minutes. All
          you need is a phone number and e-mail
        </p>
      </header>
      {/* navigation*/}
      <nav>
        <PhoneNumber />
        <ConfirmCode />
        <EmailPassword />
      </nav>
    </div>
  );
};

export default Registration;
