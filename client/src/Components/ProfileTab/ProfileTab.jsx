import React from "react";
import { NavLink } from "react-router-dom";
import "./ProfileTab.scss";

const ProfileTab = ({ close, showHide }) => {
  return (
    <>
      <div className="profile-tab" ref={close}>
        <NavLink
          to="profile"
          className="tab-pro-info"
          onClick={() => showHide(false)}
        >
          <img
            src="https://media.licdn.com/dms/image/D4E03AQHetm7QBmdB1A/profile-displayphoto-shrink_100_100/0/1670139105895?e=1682553600&v=beta&t=hBZgr4ful4yRMEL9Dl373YcAzMo7xJMLD6l1WGe5XHQ"
            alt=""
          />
          <div className="pro-info">
            <span>Md Kayda Azam</span>
            <p>I'm a professional full-stack MERN developer at SoroBindu</p>
          </div>
        </NavLink>
        <NavLink
          to="profile"
          className="view-pro-btn"
          onClick={() => showHide(false)}
        >
          <button className="view-pro">View profile</button>
        </NavLink>
        <div className="account-info">
          <span>Account</span>

          <a href="#" className="premium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path
                d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
                fill="#f8c77e"
              ></path>
              <path
                d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
                fill="#e7a33e"
              ></path>
            </svg>
            Try Premium for free
          </a>
          <a href="#">Setting & Privacy</a>
          <a href="#">Help</a>
          <a href="#">Language</a>
        </div>
        <div className="manage-info">
          <span>Manage</span>
          <a href="#">Posts & Activity</a>
          <a href="#">Job Posting Account</a>
        </div>
        <div className="sign-out">
          <a href="#">Sign Out</a>
        </div>
      </div>
    </>
  );
};

export default ProfileTab;
