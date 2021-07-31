import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Collapse } from "reactstrap";

const defaultList = [
  {
    title: "▶ 수강생 관리",
<<<<<<< HEAD
    url: "/class/enrol",
  },
  {
    title: "▶ 구성 팀 확인",
    url: "/class/team",
  },
  {
    title: "과제 관리",
    url: "/class/assignmentList",
  },
  {
    title: "▶ 리포트 확인",
    url: "/class/report",
=======
    url: "/professor/class/enrol",
  },
  {
    title: "▶ 구성 팀 확인",
    url: "/professor/class/team",
  },
  {
    title: "과제 관리",
    url: "/professor/class/assignmentList",
  },
  {
    title: "▶ 리포트 확인",
    url: "/professor/class/report",
>>>>>>> 3eb3fac170c5980ada387928f12e91ed9e75d89d
  },
];

const SideBar = ({ list }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          {defaultList.map((item) => (
            <li className="nav-item">
              {item.title !== "과제 관리" && (
                <Link
                  to={item.url}
                  style={{ textDecoration: "none", color: "black" }}
                  className="nav-link active"
                  aria-current="page"
                >
                  <span data-feather="home" />
                  {item.title}
                </Link>
              )}
              {item.title === "과제 관리" && (
                <Link
<<<<<<< HEAD
                  to="/class/assignmentList"
=======
                  to="/professor/class/assignmentList"
>>>>>>> 3eb3fac170c5980ada387928f12e91ed9e75d89d
                  style={{ textDecoration: "none", color: "black" }}
                  className="nav-link active"
                  aria-current="page"
                >
                  <span data-feather="assignment-management" />
                  <div
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                  >
                    {isOpen ? "▼" : "▶"} 과제 관리
                  </div>
                  <Collapse isOpen={isOpen}>
                    <Link
<<<<<<< HEAD
                      to="/class/assignment/teamView"
=======
                      to="/professor/class/assignment/teamView"
>>>>>>> 3eb3fac170c5980ada387928f12e91ed9e75d89d
                      style={{ textDecoration: "none", color: "black" }}
                      className="nav-link active"
                      aria-current="page"
                    >
                      ▶ 팀별 보기
                    </Link>
                    <Link
<<<<<<< HEAD
                      to="/class/assignment/assignView"
=======
                      to="/professor/class/assignment/assignView"
>>>>>>> 3eb3fac170c5980ada387928f12e91ed9e75d89d
                      style={{ textDecoration: "none", color: "black" }}
                      className="nav-link active"
                      aria-current="page"
                    >
                      ▶ 과제 별 보기
                    </Link>
                  </Collapse>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SideBar;
