import React from "react";
import LikCard from "../../../../LikCard/LikCard";
import "./Activity.scss";

const Activity = () => {
  return (
    <>
      <LikCard>
        <div className="activity">
          <div className="activity-wraper">
            <div className="title">
              <div className="t-sec">
                <span>Activity</span>
                <a href="#">178 followers</a>
              </div>
              <button>Start a post</button>
            </div>
            <div className="post-time">
              <a href="#">Md Kayda Azam</a>
              <p>commented on a post .2mo</p>
            </div>
            <div className="country">
              <a href="#">Bangladesh</a>
            </div>
            <div className="post-info">
              <div class="like-img">
                <div className="img-sec">
                  <img
                    src="https://static.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
                    alt=""
                  />
                  <img
                    src="https://static.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22"
                    alt=""
                  />
                  <img
                    src="https://static.licdn.com/sc/h/lhxmwiwoag9qepsh4nc28zus"
                    alt=""
                  />
                </div>
                <a href="#">1,729</a>
              </div>
              <div className="comment-reposts">
                <a href="#">112 comments </a>.<a href="#"> 56 reposts</a>
              </div>
            </div>
          </div>
          <button className="btn">
            Show all activity
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              class="mercado-match"
              data-supported-dps="16x16"
              fill="currentColor"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M11.45 3L15 8l-3.55 5H9l2.84-4H2V7h9.84L9 3z"></path>
            </svg>
          </button>
        </div>
      </LikCard>
    </>
  );
};

export default Activity;
