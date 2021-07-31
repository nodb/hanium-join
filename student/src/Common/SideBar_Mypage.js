import React from "react";
<<<<<<< HEAD
import {Link} from "react-router-dom";
=======
import { Link } from "react-router-dom";
>>>>>>> 3eb3fac170c5980ada387928f12e91ed9e75d89d

const defaultList = [
  {
    title: "▶ 개인정보",
<<<<<<< HEAD
    url: "/mypage/myinfo",
  },
  {
    title: "▶ 수강 과목",
    url: "/mypage/class",
  },
  {
    title: "▶ 과제 제출함",
    url: "/mypage/myassignment",
  },
  {
    title: "▶ 회원 정보 수정",
    url: "/mypage/mymodify",
=======
    url: "/student/mypage/myinfo",
  },
  {
    title: "▶ 수강 과목",
    url: "/student/mypage/class",
  },
  {
    title: "▶ 과제 제출함",
    url: "/student/mypage/myassignment",
  },
  {
    title: "▶ 회원 정보 수정",
    url: "/student/mypage/mymodify",
>>>>>>> 3eb3fac170c5980ada387928f12e91ed9e75d89d
  },
];

const Navbar = ({ list }) => {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          {!list
            ? defaultList.map((item) => (
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={item.url}
                    style={{ fontSize: "12px", color: "black" }}
                  >
                    <span data-feather="home" />
                    {item.title}
                  </Link>
                </li>
              ))
            : list.map((item) => (
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href={item.url}
                    style={{ fontSize: "12px" }}
                  >
                    <span data-feather="home" />
                    {item.title}
                  </a>
                </li>
              ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
