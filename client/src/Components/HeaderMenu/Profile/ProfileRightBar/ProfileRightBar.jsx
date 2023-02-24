import React from "react";
import AddUrlAndLanguage from "./AddUrlAndLanguage/AddUrlAndLanguage";
import LearningCourses from "./LearningCourses/LearningCourses";
import PeopleAlsoViewed from "./PeopleAlsoViewed/PeopleAlsoViewed";
import PeopleMayYouKnow from "./PeopleMayYouKnow/PeopleMayYouKnow";
import "./ProfileRightBar.scss";
import SeeHiring from "./SeeHiring/SeeHiring";

const ProfileRightBar = () => {
  return (
    <>
      <div className="pro-info-sec-wraper">
        <AddUrlAndLanguage />
        <SeeHiring />
        <PeopleAlsoViewed />
        <PeopleMayYouKnow />
        <LearningCourses />
        <SeeHiring />
      </div>
    </>
  );
};

export default ProfileRightBar;
