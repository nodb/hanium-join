import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  background-color: #e5e5e5;
  color: black;
  text-decoration: none;
  width: 229px;
  height: 785px;
  margin: 0px 38px 28px 53px;
`;

const Page = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: #6f91b5;
  margin-top: 27px;
  margin-bottom: 15px;
  text-align: center;
`;

const BarHr = styled.hr`
  border: 2px solid #c4c4c4;
  margin: 0 auto;
  height: 0px;
  width: 198px;
`;

const Menus = styled.div`
  margin-top: 18px;
  text-align: center;
  list-style: none;
  li {
    margin: 18px 0px;
  }
`;

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { code } = useParams();

  const defaultList = [
    {
      title: "수강생 관리",
      url: `/professor/class/${code}/enrol`,
    },
    {
      title: "구성 팀 확인",
      url: `/professor/class/${code}/team`,
    },
    {
      title: "과제 관리",
      url: `/professor/class/${code}/assignmentList`,
    },
    {
      title: "리포트 확인",
      url: `/professor/class/${code}/report`,
    },
  ];

  return (
    <Nav>
      <Page>수업명</Page>
      <BarHr />
      <Menus>
        {defaultList.map((item) => (
          <li key={item.title}>
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
              <>
                <Link
                  to={`/professor/class/${code}/assignmentList`}
                  style={{ textDecoration: "none", color: "black" }}
                  className="nav-link active"
                  aria-current="page"
                >
                  <span data-feather="assignment-management" />
                  <div
                    style={{ transitionDuration: "2s" }}
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                  >
                    {isOpen ? "▼" : "▶"} 과제 관리
                  </div>
                </Link>
                {isOpen && (
                  <div>
                    <Link
                      to={`/professor/class/${code}/assignmentList/teamView`}
                      style={{ textDecoration: "none", color: "black" }}
                      className="nav-link active"
                      aria-current="page"
                    >
                      팀별 보기
                    </Link>
                    <Link
                      to={`/professor/class/${code}/assignmentList/assignView`}
                      style={{ textDecoration: "none", color: "black" }}
                      className="nav-link active"
                      aria-current="page"
                    >
                      과제 별 보기
                    </Link>
                  </div>
                )}
              </>
            )}
          </li>
        ))}
      </Menus>
    </Nav>
  );
};

export default SideBar;
