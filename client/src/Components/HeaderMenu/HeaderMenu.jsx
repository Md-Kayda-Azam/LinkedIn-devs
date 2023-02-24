import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import usePopupClose from "../../hooks/usePopupClose";
import ProfileTab from "../ProfileTab/ProfileTab";
import "./HeaderMenu.scss";

const HeaderMenu = () => {
  /// all state
  const [profileTab, setProfileTab] = useState(false);
  const [headerIcon, setHeaderIcon] = useState({
    home: true,
    my_network: false,
    jobs: false,
    messaging: false,
    notification: false,
  });

  const close = useRef(null);
  usePopupClose(close, setProfileTab);

  const handleHome = () => {
    setHeaderIcon((prev) => ({
      ...prev,
      home: true,
      my_network: false,
      jobs: false,
      messaging: false,
      notification: false,
    }));
  };
  const handleMyNetwork = () => {
    setHeaderIcon((prev) => ({
      ...prev,
      home: false,
      my_network: true,
      jobs: false,
      messaging: false,
      notification: false,
    }));
  };
  const handleJobs = () => {
    setHeaderIcon((prev) => ({
      ...prev,
      home: false,
      my_network: false,
      jobs: true,
      messaging: false,
      notification: false,
    }));
  };
  const handleMessaging = () => {
    setHeaderIcon((prev) => ({
      ...prev,
      home: false,
      my_network: false,
      jobs: false,
      messaging: true,
      notification: false,
    }));
  };
  const handleNoti = () => {
    setHeaderIcon((prev) => ({
      ...prev,
      home: false,
      my_network: false,
      jobs: false,
      messaging: false,
      notification: true,
    }));
  };

  return (
    <>
      {profileTab && <ProfileTab close={close} showHide={setProfileTab} />}
      <div className="header-wraper">
        <div className="logo-search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
          </svg>
          <div className="search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              class="mercado-match"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
            </svg>
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="header-menu">
          <NavLink to="/" className={"menu-item"} onClick={handleHome}>
            {headerIcon.home && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
              </svg>
            )}
            {!headerIcon.home && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
              </svg>
            )}

            <p>Home</p>
            <span></span>
          </NavLink>
          <NavLink
            to="mynetwork"
            className={"menu-item"}
            onClick={handleMyNetwork}
          >
            {headerIcon.my_network && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M12 6.5a4.5 4.5 0 114.5 4.5A4.49 4.49 0 0112 6.5zm6 6.5h-3a3 3 0 00-3 3v6h9v-6a3 3 0 00-3-3zM6.5 6A3.5 3.5 0 1010 9.5 3.5 3.5 0 006.5 6zm1 9h-2A2.5 2.5 0 003 17.5V22h7v-4.5A2.5 2.5 0 007.5 15z"></path>
              </svg>
            )}
            {!headerIcon.my_network && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
              </svg>
            )}

            <p>My Network</p>
            <span></span>
          </NavLink>
          <NavLink to="jobs" className="menu-item" onClick={handleJobs}>
            {headerIcon.jobs && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M22.84 10.22L21 6h-3.95V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2l2.22 5.18A3 3 0 007 13h14a2 2 0 001.84-2.78zM15.05 6h-6V5a1 1 0 011-1h4a1 1 0 011 1zM7 14h15v3a3 3 0 01-3 3H5a3 3 0 01-3-3V8.54l1.3 3A4 4 0 007 14z"></path>
              </svg>
            )}
            {!headerIcon.jobs && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
              </svg>
            )}

            <p>Jobs</p>
            <span></span>
          </NavLink>

          <NavLink
            to="messaging"
            className="menu-item"
            onClick={handleMessaging}
          >
            {headerIcon.messaging && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M22 8a6 6 0 01-3 5.22A7 7 0 0012 7H8a7 7 0 00-1.95.28A6 6 0 0112 2h4a6 6 0 016 6zm-4 6v.48a6 6 0 01-2.69 5L10 23v-3H8A6 6 0 018 8h4a6 6 0 016 6zM8 14a1 1 0 10-1 1 1 1 0 001-1zm3 0a1 1 0 10-1 1 1 1 0 001-1zm3 0a1 1 0 10-1 1 1 1 0 001-1z"></path>
              </svg>
            )}
            {!headerIcon.messaging && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
              </svg>
            )}

            <p>Messaging</p>
            <span></span>
          </NavLink>
          <NavLink
            to="notifications"
            className="menu-item"
            onClick={handleNoti}
          >
            {headerIcon.notification && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M22 19.24a3.46 3.46 0 01-.09.78l-.22 1-6.76-1.51A2.16 2.16 0 0115 20a2 2 0 11-3.53-1.28L2 16.62l.22-1A4.45 4.45 0 014 13.12l1.22-.93 15.46 3.44.7 1.36a5 5 0 01.62 2.25zm-1.49-10.4a6.29 6.29 0 00-4.92-6.69A6.76 6.76 0 0014.18 2a6.29 6.29 0 00-5.9 4.12l-2 5.27 13.8 3.08z"></path>
              </svg>
            )}
            {!headerIcon.notification && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
              </svg>
            )}

            <p>Notifications</p>
            <span></span>
          </NavLink>
          <a
            href="#"
            className="menu-item"
            onClick={() => setProfileTab(!profileTab)}
          >
            <img
              src="https://media.licdn.com/dms/image/D4E03AQHetm7QBmdB1A/profile-displayphoto-shrink_100_100/0/1670139105895?e=1682553600&v=beta&t=hBZgr4ful4yRMEL9Dl373YcAzMo7xJMLD6l1WGe5XHQ"
              alt=""
            />
            <div className="profile-sec">
              <p>Me</p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="currentColor"
                class="mercado-match"
                width="16"
                height="16"
                focusable="false"
              >
                <path d="M8 11L3 6h10z" fill-rule="evenodd"></path>
              </svg>
            </div>
          </a>
        </div>
        <div className="work-menu">
          <div className="work-section">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
            </svg>
            <div className="name-section">
              <p>Work</p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="currentColor"
                class="mercado-match"
                width="16"
                height="16"
                focusable="false"
              >
                <path d="M8 11L3 6h10z" fill-rule="evenodd"></path>
              </svg>
            </div>
          </div>
          <div className="premium-sction">
            <a href="#">Try Preminum for free</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderMenu;
