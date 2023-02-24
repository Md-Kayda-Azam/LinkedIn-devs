import React from "react";
import LikCard from "../../../../LikCard/LikCard";
import "./Experience.scss";

const Experience = () => {
  return (
    <>
      <LikCard>
        <div className="experience-education">
          <div className="experience-education-wraper">
            <div className="title">
              <div className="t-sec">
                <span>Experience</span>
              </div>
              <div className="btn-sec">
                <button>
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
                    <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
                  </svg>
                </button>
                <button>
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
            </div>
            <div className="experience-education-info">
              <img
                src="https://media.licdn.com/dms/image/C560BAQGWS3dYbQoOdA/company-logo_100_100/0/1655347386366?e=1684972800&v=beta&t=00kF1Dtqi8YQ78itLEYBGaePGUJXnqcRGOBedVCdwqw"
                alt=""
              />
              <div className="info">
                <span>I'm a professional full-stack MERN developer</span>
                <p>SoroBindu (স্বরবিন্দু) · Full-time</p>
                <div className="date">
                  <p>Jun 2020 - Present · 2 yrs 9 mos</p>
                </div>
                <div className="skill">
                  <span>Skills:</span>
                  <p>Javascript developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LikCard>
    </>
  );
};

export default Experience;
