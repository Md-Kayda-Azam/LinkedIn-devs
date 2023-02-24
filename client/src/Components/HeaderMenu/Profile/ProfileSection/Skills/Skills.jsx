import React from "react";
import LikCard from "../../../../LikCard/LikCard";
import "./Skills.scss";

const Skills = () => {
  return (
    <>
      {" "}
      <LikCard>
        <div className="skill">
          <div className="skill-wraper">
            <div className="title">
              <div className="t-sec">
                <span>Skills</span>
              </div>
              <div className="btn-sec">
                <button className="dem">Demonstrate skils</button>
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
            <div className="skill-item">
              <div className="item">
                <a href="#">React</a>
              </div>
              <div className="item">
                <a href="#">Angular.js</a>
              </div>
              <div className="item">
                <a href="#">Vue.js</a>
              </div>
            </div>
          </div>
          <button className="btn">Show all resources</button>
        </div>
      </LikCard>
    </>
  );
};

export default Skills;
