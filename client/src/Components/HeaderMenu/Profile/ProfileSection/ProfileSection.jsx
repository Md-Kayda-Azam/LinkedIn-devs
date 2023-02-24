import React from "react";
import Activity from "./Activity/Activity";
import Analytics from "./Analytics/Analytics";
import "./ProfileSection.scss";
import ProInfo from "./ProInfo/ProInfo";
import Resources from "./Resources/Resources";
import SuggForYou from "./SuggForYou/SuggForYou";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Interests from "./Interests/Interests";
const ProfileSection = () => {
  return (
    <>
      {" "}
      <div className="profile-sec">
        <ProInfo />
        <SuggForYou />
        <Analytics />
        <Resources />
        <Activity />
        <Experience />
        <Education />
        <Skills />
        <Interests />
      </div>
    </>
  );
};

export default ProfileSection;
