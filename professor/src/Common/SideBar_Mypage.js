import React from "react";
import { Link } from "react-router-dom";

const defaultList = [
  {
    title: "▶ 개인 정보",
<<<<<<< HEAD
    url: "/mypage/myinfo",
  },
  {
    title: "▶ 강의 과목",
    url: "/mypage/class",
  },
  {
    title: "▶ 등록한 과제",
    url: "/mypage/assignment",
  },
  {
    title: "▶ 회원 정보 수정",
    url: "/mypage/modify",
=======
    url: "/professor/mypage/myinfo",
  },
  {
    title: "▶ 강의 과목",
    url: "/professor/mypage/class",
  },
  {
    title: "▶ 등록한 과제",
    url: "/professor/mypage/assignment",
  },
  {
    title: "▶ 회원 정보 수정",
    url: "/professor/mypage/modify",
>>>>>>> 3eb3fac170c5980ada387928f12e91ed9e75d89d
  },
];

const SideBar = ({ list }) => {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          {defaultList.map((item) => (
            <li className="nav-item">
              <Link
                to={item.url}
                style={{ textDecoration: "none", color: "black" }}
                className="nav-link active"
                aria-current="page"
              >
                <span data-feather="home" />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SideBar;
