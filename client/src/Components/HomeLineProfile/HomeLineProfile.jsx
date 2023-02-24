import React from "react";
import "./HomeLineProfile.scss";
import save from "../../_asset/icon/save.png";

const HomeLineProfile = () => {
  return (
    <>
      <div className="home-line-profile">
        <div className="home-line-profile-wraper">
          <div className="home-profile">
            <div className="cover-photo">
              <img
                src="https://media.licdn.com/dms/image/D4E16AQEFEOybvvAqLw/profile-displaybackgroundimage-shrink_350_1400/0/1670144633161?e=1682553600&v=beta&t=lVte2IBIwHgXlX-xAIsWrAdz8yTNu7t28nTWYTtUTnY"
                alt=""
              />
            </div>
            <div className="profile-photo">
              <img
                className="pro-photo"
                src="https://media.licdn.com/dms/image/D4E03AQHetm7QBmdB1A/profile-displayphoto-shrink_100_100/0/1670139105895?e=1682553600&v=beta&t=hBZgr4ful4yRMEL9Dl373YcAzMo7xJMLD6l1WGe5XHQ"
                alt=""
              />
            </div>
            <div className="profile-info">
              <span>Md Kayda Azam</span>
              <p>I'm a professional full-stack MERN developer at SoroBindu</p>
            </div>
          </div>
          <div className="home-profile-info">
            <button className="view-profile">
              <p>Who's viewed your profile</p>
              <span>52</span>
            </button>
            <button className="connection">
              <div className="con-grow">
                <p>Connections</p> <span>152</span>
              </div>

              <p className="grow">Grow your network</p>
            </button>
          </div>
          <div className="home-profile-premium">
            <button className="access">
              <p>Access exclusive tools & inlights</p>
              <p className="free-premium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  class="free"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path
                    d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
                    fill="#f8c77e"
                  ></path>
                  <path
                    d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
                    fill="#e7a33e"
                  ></path>
                </svg>
                <a href="#">Try Premium for free</a>
              </p>
            </button>
          </div>
          <div className="my-item">
            <img src={save} alt="" />
            <p>My items</p>
          </div>
        </div>
        <div className="group-event-info">
          <div className="item">
            <button>Group</button>
            <butto className="event">
              <span>Events</span>
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
            </butto>
            <button className="follow">Followed Hashtags</button>
            <button className="discover">Discover more</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLineProfile;
