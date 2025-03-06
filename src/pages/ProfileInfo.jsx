import React from "react";

import PersonalData from "../components/profile/PersonalData";
import Contacts from "../components/profile/Contacts";
import Address from "../components/profile/Address";

const ProfileInfo = () => {
  return (
    <div className="container">
      {/* header */}
      <header style={{ marginBottom: "5vh" }}>
        <h1>Profile Info</h1>
        <p style={{ fontWeight: "300" }}>
          Fill in the data for profile. It will take a couple of minutes. You
          only need a passport
        </p>
      </header>
      {/* navigation */}
      <nav>
        <PersonalData />
        <Contacts />
        <Address />
      </nav>
    </div>
  );
};

export default ProfileInfo;
