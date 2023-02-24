import React from "react";
import "./ProInfo.scss";

const ProInfo = () => {
  return (
    <>
      {" "}
      <div className="profile-info">
        <div className="profile-cover-photo">
          <img
            src="https://media.licdn.com/dms/image/D4E16AQEFEOybvvAqLw/profile-displaybackgroundimage-shrink_350_1400/0/1670144633161?e=1682553600&v=beta&t=lVte2IBIwHgXlX-xAIsWrAdz8yTNu7t28nTWYTtUTnY"
            alt=""
          />
          <button className="cover-photo-edit">
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
              <path d="M14.13 1.86a3 3 0 00-4.17 0l-7 7L1 15l6.19-2 6.94-7a3 3 0 000-4.16zm-8.36 9.71l-1.35-1.34L9.64 5 11 6.35z"></path>
            </svg>
          </button>
        </div>
        <div className="profile-photo">
          <img
            src="https://media.licdn.com/dms/image/D4E03AQHetm7QBmdB1A/profile-displayphoto-shrink_200_200/0/1670139105895?e=1682553600&v=beta&t=OxBQ3wyIPvwq6xbqOyo3HhuINyjnrnjz154SNGsGHEc"
            alt=""
          />
        </div>
        <div className="profile-info">
          <div className="pro-info-edit-btn">
            <button className="edit-edu-work">
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
                <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
              </svg>
            </button>
          </div>
          <div className="pro-info">
            <div className="info">
              <div className="name-title">
                <span className="name">Md Kayda Azam (azam)</span>
                <p className="title">
                  I'm a professional full-stack MERN developer at SoroBindu
                </p>
              </div>
              <p>
                Dinājpur, Rajshahi, Bangladesh .<a href="#">Contact info</a>
              </p>
              <a href="#">155 connections</a>
            </div>
            <div className="edu-work-info">
              <div className="item">
                <img
                  src="https://media.licdn.com/dms/image/C560BAQGWS3dYbQoOdA/company-logo_100_100/0/1655347386366?e=1684972800&v=beta&t=00kF1Dtqi8YQ78itLEYBGaePGUJXnqcRGOBedVCdwqw"
                  alt=""
                />
                <a href="#">SoroBindu (স্বরবিন্দু)</a>
              </div>
              <div className="item">
                <img
                  src="https://media.licdn.com/dms/image/C510BAQGLfIJZJcC3rQ/company-logo_100_100/0/1519856560085?e=1684972800&v=beta&t=rwVXUV5TEwsHGy_VlnfsWECQkYVb-H0mnalnQEdmB_E"
                  alt=""
                />
                <a href="#">BRAC University</a>
              </div>
            </div>
          </div>
          <div className="pro-edit-more-open-btn">
            <button className="open">Open to</button>
            <button className="addd">Add profile section</button>
            <button className="more">More</button>
          </div>
          <div className="open-to-work">
            <div className="wraper-open-to-work">
              <div className="otw">
                <span>Open to work</span>
                <button>
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
                    <path d="M14.13 1.86a3 3 0 00-4.17 0l-7 7L1 15l6.19-2 6.94-7a3 3 0 000-4.16zm-8.36 9.71l-1.35-1.34L9.64 5 11 6.35z"></path>
                  </svg>
                </button>
              </div>
              <p>
                Javascript Developer, Project Management Specialist and
                Full-stack Developer roles
              </p>
              <a href="#">See all details</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProInfo;
