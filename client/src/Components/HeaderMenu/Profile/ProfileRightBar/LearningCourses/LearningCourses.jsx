import React from "react";
import "./LearningCourses.scss";

const LearningCourses = () => {
  return (
    <>
      {" "}
      <div className="lik-learning-course">
        <div className="wraper-link-lear-cour">
          <div className="lik">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
              data-supported-dps="14x14"
              fill="currentColor"
              class="mercado-match"
              width="14"
              height="14"
              focusable="false"
            >
              <g>
                <path
                  class="background-mercado"
                  d="M14 1v12a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h12a1 1 0 011 1zM4 5H2v7h2zm.25-2A1.27 1.27 0 003 1.8 1.27 1.27 0 001.75 3 1.27 1.27 0 003 4.2 1.27 1.27 0 004.25 3zM12 8.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 006.89 6V5H5v7h2V8.73A1.74 1.74 0 018.66 6.8C9.82 6.8 10 7.94 10 8.73V12h2z"
                ></path>
              </g>
            </svg>{" "}
            LEARNING
          </div>
          <p>Add new skills with these courses, free for 24 hours</p>

          <div className="video-">
            <div className="item">
              <img
                src="https://media.licdn.com/dms/image/C560DAQFmHKGoP-YfuQ/learning-public-crop_60_100/0/1631901082043?e=1677700800&v=beta&t=VfgaTBfVRRlbd6Mx5YPp7FEq7nMAbeaCzkoDtRe140I"
                alt=""
              />
              <span>Learning C++</span>
            </div>
            <div className="border"></div>
            <div className="item">
              <img
                src="https://media.licdn.com/dms/image/C4E0DAQEx3FC5_xihfA/learning-public-crop_60_100/0/1632416410836?e=1677700800&v=beta&t=mY07dTQZFHJ8xq7KQuRCfetEml-XQlXBlWZYW650gcg"
                alt=""
              />
              <span>React: Design Patterns</span>
            </div>
            <div className="border"></div>

            <div className="item">
              <img
                src="https://media.licdn.com/dms/image/C560DAQGXYTQL8kfz7A/learning-public-crop_60_100/0/1675109809406?e=1677700800&v=beta&t=PCkVLimmlrwoenSVXS8e_uh_FnrNt2pv_F9DydxMY-I"
                alt=""
              />
              <span>Object-Oriented Programming and...</span>
            </div>
          </div>
        </div>
        <div className="see-my-rec">
          <button>See my recommendations</button>
        </div>
      </div>
    </>
  );
};

export default LearningCourses;
