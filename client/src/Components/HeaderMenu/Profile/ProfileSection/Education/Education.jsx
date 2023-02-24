import React from "react";
import LikCard from "../../../../LikCard/LikCard";

const Education = () => {
  return (
    <>
      {" "}
      <LikCard>
        <div className="experience-education">
          <div className="experience-education-wraper">
            <div className="title">
              <div className="t-sec">
                <span>Education</span>
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
                src="https://media.licdn.com/dms/image/C510BAQGLfIJZJcC3rQ/company-logo_100_100/0/1519856560085?e=1684972800&v=beta&t=rwVXUV5TEwsHGy_VlnfsWECQkYVb-H0mnalnQEdmB_E"
                alt=""
              />
              <div className="info">
                <span className="edu">BRAC University</span>
                <p>
                  Bachelor of Technology - BTech, Computer Programming, Specific
                  Applications
                </p>
                <div className="date">
                  <p> Jul 2018 - Nov 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LikCard>
    </>
  );
};

export default Education;
