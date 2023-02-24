import React from "react";
import HomePost from "../HomePost/HomePost";
import SortBy from "../SortBy/SortBy";
import "./TimeLine.scss";
import like from "../../_asset/icon/like.png";
import com from "../../_asset/icon/comment.png";
import rep from "../../_asset/icon/report.png";
import share from "../../_asset/icon/share.png";

const TimeLine = () => {
  return (
    <>
      <div className="time-line">
        <div className="time-line-wraper">
          <HomePost />
          <SortBy />
          <div className="user-post">
            <div className="user-post-item">
              <div className="post-header">
                <div className="post-header-info">
                  <div className="post-profile-photo">
                    <img
                      src="https://media.licdn.com/dms/image/C4E0BAQFDYasy3Lvq9Q/company-logo_100_100/0/1675197543019?e=1684972800&v=beta&t=T95tTNuhsjIGZJZUtf67PzvWlLLkKk5Om1kHmLA2nFQ"
                      alt=""
                    />
                  </div>
                  <div className="post-profile-info">
                    <span>Md Kayda Azam</span>
                    <p>23,457,800 Followers</p>
                    <p>
                      54m .{" "}
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
                        <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
                      </svg>
                    </p>
                  </div>
                </div>
                <div className="post-details-info">
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
                    <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
                  </svg>
                </div>
              </div>
              <div className="post-body">
                <div className="text-area">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam consectetur, inventore quibusdam quo blanditiis amet
                    neque ipsam culpa labore quidem?
                  </p>
                </div>
                <div className="post-img">
                  <img
                    src="https://images.unsplash.com/photo-1523203658085-27859efeaa41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlqYWJ8ZW58MHx8MHx8&w=1000&q=80"
                    alt=""
                  />
                </div>
              </div>
              <div className="post-footer">
                <div className="post-info">
                  <div className="like-info">
                    <div className="like-img">
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
                    <p> 26,015</p>
                  </div>
                  <div className="com-share-info">
                    <a href="#">648 comments</a>
                    <a href="#">5,898 repots</a>
                  </div>
                </div>
                <div className="post-featured">
                  <div className="item">
                    <img src={like} alt="" />
                  </div>
                  <div className="item">
                    <img src={com} alt="" />
                  </div>
                  <div className="item">
                    <img src={rep} alt="" />
                  </div>
                  <div className="item">
                    <img src={share} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="user-post-item">
              <div className="post-header">
                <div className="post-header-info">
                  <div className="post-profile-photo">
                    <img
                      src="https://i.pinimg.com/736x/19/8a/72/198a7241d9da1a00b972091011683443.jpg"
                      alt=""
                    />
                  </div>
                  <div className="post-profile-info">
                    <span>Md Kayda Azam</span>
                    <p>23,457,800 Followers</p>
                    <p>
                      54m .{" "}
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
                        <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
                      </svg>
                    </p>
                  </div>
                </div>
                <div className="post-details-info">
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
                    <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
                  </svg>
                </div>
              </div>
              <div className="post-body">
                <div className="text-area">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam consectetur, inventore quibusdam quo blanditiis amet
                    neque ipsam culpa labore quidem?
                  </p>
                </div>
                <div className="post-img">
                  <img
                    src="https://i.pinimg.com/736x/19/8a/72/198a7241d9da1a00b972091011683443.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="post-footer">
                <div className="post-info">
                  <div className="like-info">
                    <div className="like-img">
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
                    <p> 26,015</p>
                  </div>
                  <div className="com-share-info">
                    <a href="#">648 comments</a>
                    <a href="#">5,898 repots</a>
                  </div>
                </div>
                <div className="post-featured">
                  <div className="item">
                    <img src={like} alt="" />
                  </div>
                  <div className="item">
                    <img src={com} alt="" />
                  </div>
                  <div className="item">
                    <img src={rep} alt="" />
                  </div>
                  <div className="item">
                    <img src={share} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="user-post-item">
              <div className="post-header">
                <div className="post-header-info">
                  <div className="post-profile-photo">
                    <img
                      src="https://i.pinimg.com/originals/0a/81/b4/0a81b4acb4ca2e010b6c470237886169.jpg"
                      alt=""
                    />
                  </div>
                  <div className="post-profile-info">
                    <span>Md Kayda Azam</span>
                    <p>23,457,800 Followers</p>
                    <p>
                      54m .{" "}
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
                        <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
                      </svg>
                    </p>
                  </div>
                </div>
                <div className="post-details-info">
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
                    <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
                  </svg>
                </div>
              </div>
              <div className="post-body">
                <div className="text-area">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam consectetur, inventore quibusdam quo blanditiis amet
                    neque ipsam culpa labore quidem?
                  </p>
                </div>
                <div className="post-img">
                  <img
                    src="https://i.pinimg.com/originals/0a/81/b4/0a81b4acb4ca2e010b6c470237886169.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="post-footer">
                <div className="post-info">
                  <div className="like-info">
                    <div className="like-img">
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
                    <p> 26,015</p>
                  </div>
                  <div className="com-share-info">
                    <a href="#">648 comments</a>
                    <a href="#">5,898 repots</a>
                  </div>
                </div>
                <div className="post-featured">
                  <div className="item">
                    <img src={like} alt="" />
                  </div>
                  <div className="item">
                    <img src={com} alt="" />
                  </div>
                  <div className="item">
                    <img src={rep} alt="" />
                  </div>
                  <div className="item">
                    <img src={share} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeLine;
