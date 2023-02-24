import React from "react";
import LinkedInFooter from "../../LinkedInFooter/LinkedInFooter";
import "./Profile.scss";
import ProfileRightBar from "./ProfileRightBar/ProfileRightBar";
import ProfileSection from "./ProfileSection/ProfileSection";

const Profile = () => {
  return (
    <>
      <div className="link-profile">
        <div className="profile-wraper">
          <ProfileSection />
          <div className="profile-info-sec">
            <ProfileRightBar />
          </div>
        </div>
        <LinkedInFooter />
      </div>
    </>
  );
};

export default Profile;
