import React, { useState } from "react";
import "./AddUrlAndLanguage.scss";

const AddUrlAndLanguage = () => {
  const [edit, setEdit] = useState(false);
  const [editLan, setEditLan] = useState(false);

  const show = () => {
    setEdit(true);
  };
  const hide = () => {
    setEdit(false);
  };
  const showLan = () => {
    setEditLan(true);
  };
  const hideLan = () => {
    setEditLan(false);
  };
  return (
    <>
      <div className="pro-url-add-language">
        <div className="item">
          <a href="#">Edit public profile & URL</a>
          <svg
            onMouseEnter={show}
            onMouseLeave={hide}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            data-supported-dps="16x16"
            fill="currentColor"
            class="mercado-match"
            width="16"
            height="16"
            focusable="false"
          >
            <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zm0 11.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zM8.82 9H7v-.95l.93-.46C8.64 7.24 9 6.89 9 6.6S8.57 6 8 6a6.49 6.49 0 00-3 .91V4.84A6.35 6.35 0 018.1 4c2 0 2.9 1 2.9 2.4 0 .9-.5 1.83-2.18 2.6z"></path>
          </svg>
        </div>
        <div className="border"></div>

        {edit && (
          <div className="edit">
            <p>
              See and edit how you look to people who are not signed in, and
              find you through search engines (ex: Google, Bing).
            </p>
          </div>
        )}

        <div className="item">
          <a href="#">Add profile in another language</a>
          <svg
            onMouseEnter={showLan}
            onMouseLeave={hideLan}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            data-supported-dps="16x16"
            fill="currentColor"
            class="mercado-match"
            width="16"
            height="16"
            focusable="false"
          >
            <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zm0 11.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zM8.82 9H7v-.95l.93-.46C8.64 7.24 9 6.89 9 6.6S8.57 6 8 6a6.49 6.49 0 00-3 .91V4.84A6.35 6.35 0 018.1 4c2 0 2.9 1 2.9 2.4 0 .9-.5 1.83-2.18 2.6z"></path>
          </svg>
        </div>
        {editLan && (
          <div className="editLan">
            <p>
              Creating a profile in another language makes it easier for local
              business contacts and recruiters to find you on LinkedIn.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default AddUrlAndLanguage;
