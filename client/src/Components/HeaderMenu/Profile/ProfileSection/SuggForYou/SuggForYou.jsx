import React from "react";
import sum from "../../../../../_asset/icon/summary.png";
import "./SuggForYou.scss";

const SuggForYou = () => {
  return (
    <>
      <div className="suggection-for-you">
        <div className="sug-wraper">
          <div className="title">
            <span>Suggested for you</span>
            <p>
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
                <path d="M8 3a8.59 8.59 0 00-8 5 8.54 8.54 0 008 5 8.55 8.55 0 008-5 8.55 8.55 0 00-8-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm2-3a2 2 0 11-2-2 2 2 0 012 2z"></path>
              </svg>{" "}
              Private to you
            </p>
          </div>
          <div className="pro-setup-count">
            <span>Intermediate</span>
            <p>
              <input type="range" /> 6/7
            </p>
            <div className="setup-dec">
              <p>Complete 1 step to achieve</p>
              <a href="#">All-star</a>
            </div>
          </div>

          <div className="summary">
            <div className="sum-t">
              <img src={sum} alt="" />
              <p>
                Write a summary to highlight your personality or work experience
              </p>
            </div>
            <p>
              Members who include a summary receive up to 3.9 times as many
              profile views.
            </p>
            <button>Add Summary</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuggForYou;
