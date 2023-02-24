import React from "react";
import HomeLineProfile from "../HomeLineProfile/HomeLineProfile";
import HomeUserFeedSetting from "../HomeUserFeedSetting/HomeUserFeedSetting";
import TimeLine from "../TimeLine/TimeLine";

const MainHome = () => {
  return (
    <>
      <div className="home-line-wraper">
        <HomeLineProfile />
        <TimeLine />
        <HomeUserFeedSetting />
      </div>
    </>
  );
};

export default MainHome;
