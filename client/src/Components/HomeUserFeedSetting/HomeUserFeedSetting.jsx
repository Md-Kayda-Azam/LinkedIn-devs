import React from "react";
import icon from "../../_asset/icon/error.png";
import next from "../../_asset/icon/next.png";
import "./HomeUserFeedSetting.scss";
const HomeUserFeedSetting = () => {
  return (
    <>
      <div className="user-feed-setting-info">
        <div className="user-feed-setting-info-wraper">
          <div className="title">
            <p>Add to your feed</p>
            <img src={icon} alt="" />
          </div>
          <div className="user">
            <div className="user-wraper">
              <img
                src="https://media.licdn.com/dms/image/D5603AQFDrhLQAzVAQg/profile-displayphoto-shrink_100_100/0/1676200486716?e=1682553600&v=beta&t=Zw6cHjGcy_shAVhpVAjJK-_3Hf2Ofi-0zJ0ZiWUfJaI"
                alt=""
              />
              <div className="user-info">
                <span> Sumit Saha</span>
                <a href="#" className="edu">
                  Entrepreneur | Educator | Programming Enthusiast
                </a>
                <button className="follow">
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
                    <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
                  </svg>
                  Follow
                </button>
              </div>
            </div>
            <div className="user-wraper">
              <img
                src="https://media.licdn.com/dms/image/D5603AQFeTpp7_dzn1Q/profile-displayphoto-shrink_100_100/0/1666409592945?e=1682553600&v=beta&t=xlNgMY5_DDcueVka86z6GvOAkwnS7fgUqDw-stfDOy0"
                alt=""
              />
              <div className="user-info">
                <span>Sabbir Siddiqui</span>
                <a href="#" className="edu">
                  Software Engineer | Engineering Manager @ ShopUp | Tech Lead |
                  Solution Architect |
                </a>
                <button className="follow">
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
                    <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
                  </svg>
                  Follow
                </button>
              </div>
            </div>
            <div className="user-wraper">
              <img
                src="https://media.licdn.com/dms/image/C5603AQEwP58ztRZx8Q/profile-displayphoto-shrink_100_100/0/1610896553351?e=1682553600&v=beta&t=EbTbkKT0PI8uOI-NbkJWwPh9tQHX3qxT6u9hIIHhgaI"
                alt=""
              />
              <div className="user-info">
                <span>Nayeem Ahmad</span>
                <a href="#" className="edu">
                  BSc, MSc(CSE, BUET) | MMTP (VGSOM, IIT KGP) | CSP, CSPO, CSM
                  (ScrumAlliance)
                </a>
                <button className="follow">
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
                    <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
                  </svg>
                  Follow
                </button>
              </div>
            </div>
          </div>
          <div className="view-all-recommendations">
            <a href="#">
              View all recommendations <img src={next} alt="" />
            </a>
          </div>
        </div>
        <div className="home-setting-info">
          <div className="setting-wraper">
            <div className="photo">
              <img
                src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
                alt=""
              />
            </div>
            <div className="setting-sec">
              <div className="set-info">
                <p>
                  {" "}
                  <a href="#">About</a>
                  <a href="#">Accessiblity</a>
                  <a href="#">Help Center</a>
                </p>

                <p>
                  <a href="#" className="priv">
                    Privacy & Terms
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
                  </a>
                  <a href="#">Ad Choices</a>
                </p>
                <p>
                  <a href="#">Advertising</a>
                  <a href="#">
                    Business Service
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
                  </a>
                </p>
                <p>
                  <a href="#">Get ther LinkedIn app</a>
                  <a href="#">More</a>
                </p>
              </div>
              <div className="footer">
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 56 14"
                    data-supported-dps="56x14"
                    fill="currentColor"
                    class="mercado-match"
                    width="56"
                    height="14"
                    focusable="false"
                  >
                    <g>
                      <path
                        class="background-mercado"
                        d="M22.1 8.2l3.09 3.8h-2.44L20 8.51V12h-2V2h2v5.88L22.54 5h2.55zm-8-3.4A2.71 2.71 0 0011.89 6V5H10v7h2V8.73a1.74 1.74 0 011.66-1.93C14.82 6.8 15 7.94 15 8.73V12h2V8.29c0-2.2-.73-3.49-2.86-3.49zM32 8.66a4.22 4.22 0 010 .44h-5.25v.07a1.79 1.79 0 001.83 1.43 2.51 2.51 0 001.84-.69l1.33 1a4.31 4.31 0 01-3.25 1.29 3.49 3.49 0 01-3.7-3.75 3.58 3.58 0 013.76-3.65C30.44 4.8 32 6.13 32 8.66zm-1.86-.86a1.46 1.46 0 00-1.59-1.4 1.64 1.64 0 00-1.8 1.4zM2 2H0v10h6v-2H2zm36 0h2v10h-1.89v-.7a2.44 2.44 0 01-2 .9 3.41 3.41 0 01-3.31-3.7 3.36 3.36 0 013.3-3.7 2.62 2.62 0 011.9.7zm.15 6.5a1.63 1.63 0 00-1.62-1.85A1.76 1.76 0 0034.9 8.5a1.76 1.76 0 001.63 1.85 1.63 1.63 0 001.62-1.85zM8 1.8A1.27 1.27 0 006.75 3a1.25 1.25 0 002.5 0A1.27 1.27 0 008 1.8zM7 12h2V5H7zM56 1v12a1 1 0 01-1 1H43a1 1 0 01-1-1V1a1 1 0 011-1h12a1 1 0 011 1zM46 5h-2v7h2zm.25-2a1.25 1.25 0 00-2.5 0 1.25 1.25 0 002.5 0zM54 8.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 0048.89 6V5H47v7h2V8.73a1.74 1.74 0 011.66-1.93C51.82 6.8 52 7.94 52 8.73V12h2z"
                      ></path>
                    </g>
                  </svg>
                </p>
                <p>LinkedIn Corporation © 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeUserFeedSetting;
