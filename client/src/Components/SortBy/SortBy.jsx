import React from "react";
import "./SortBy.scss";

const SortBy = () => {
  return (
    <>
      <div className="sort-by">
        <div></div>
        <a href="#">
          Sort By: <b>Top</b>
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
      </div>
    </>
  );
};

export default SortBy;
