import React from "react";
import LikCard from "../../../../LikCard/LikCard";
import "./Interests.scss";

const Interests = () => {
  return (
    <>
      <LikCard>
        <div className="interests">
          <div className="interests-wraper">
            <div className="title">
              <div className="t-sec">
                <span>Interests</span>
              </div>
            </div>
            <div className="interests-info">
              <div className="insterests-item">
                <div className="item">
                  <span>Top Voices</span>
                </div>
                <div className="item">
                  <span>Companies</span>
                </div>
                <div className="item">
                  <span>Schools</span>
                </div>
              </div>
              <div className="item">
                <div className="insterests-sec-item">
                  <img
                    src="https://media.licdn.com/dms/image/C4E03AQH_NESYrHVxaw/profile-displayphoto-shrink_100_100/0/1639840869138?e=1682553600&v=beta&t=AUo4rIru1yvJHSXcj-kk_c0q-WmamfThpRBTfERuTD0"
                    alt=""
                  />
                  <div className="item-info">
                    <div className="name">
                      <span>Steven Bartlett</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        data-supported-dps="16x16"
                        class="mercado-match"
                        width="16"
                        height="16"
                        focusable="false"
                      >
                        <path
                          d="M14 0H2a1 1 0 00-1 1v15l3-2h10a1 1 0 001-1V1a1 1 0 00-1-1zM5 12H3V5h2zM4 4.2A1.27 1.27 0 012.75 3a1.25 1.25 0 012.5 0A1.27 1.27 0 014 4.2zm9 7.8h-2V8.73c0-.79-.18-1.93-1.34-1.93A1.74 1.74 0 008 8.61V12H6V5h1.85v1a2.72 2.72 0 012.29-1.2C12.27 4.8 13 6.09 13 8.29z"
                          fill="#0a66c2"
                        ></path>
                      </svg>
                      . 3rd
                    </div>
                    <div className="work-expe">
                      <p>Building: Thirdweb & Flight Story & The Diary</p>
                      <span>Of A CEO</span>
                    </div>
                    <div className="follower">11,10,356 Followers</div>
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
                        <path d="M12.57 2H15L6 15l-5-5 1.41-1.41 3.31 3.3z"></path>
                      </svg>
                      Following
                    </button>
                  </div>
                </div>
                <div className="insterests-sec-item">
                  <img
                    src="https://media.licdn.com/dms/image/C4E03AQHk2jSRX7fuPA/profile-displayphoto-shrink_100_100/0/1646755507585?e=1682553600&v=beta&t=3la1bpSnN0xIm5BIXJmtk5MfHcqVqEvEGSD-NSUkxAs"
                    alt=""
                  />
                  <div className="item-info">
                    <div className="name">
                      <span>Jane Fraser</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        data-supported-dps="16x16"
                        class="mercado-match"
                        width="16"
                        height="16"
                        focusable="false"
                      >
                        <path
                          d="M14 0H2a1 1 0 00-1 1v15l3-2h10a1 1 0 001-1V1a1 1 0 00-1-1zM5 12H3V5h2zM4 4.2A1.27 1.27 0 012.75 3a1.25 1.25 0 012.5 0A1.27 1.27 0 014 4.2zm9 7.8h-2V8.73c0-.79-.18-1.93-1.34-1.93A1.74 1.74 0 008 8.61V12H6V5h1.85v1a2.72 2.72 0 012.29-1.2C12.27 4.8 13 6.09 13 8.29z"
                          fill="#0a66c2"
                        ></path>
                      </svg>
                      . 3rd
                    </div>
                    <div className="work-expe">
                      <p>Building: Thirdweb & Flight Story & The Diary</p>

                      <span>CEO, Citi</span>
                    </div>
                    <div className="follower">220,0,20 Followers</div>
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
                        <path d="M12.57 2H15L6 15l-5-5 1.41-1.41 3.31 3.3z"></path>
                      </svg>
                      Following
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="btn">Show all resources</button>
        </div>
      </LikCard>
    </>
  );
};

export default Interests;
