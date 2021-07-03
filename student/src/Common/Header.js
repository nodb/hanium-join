<<<<<<< HEAD
import React, { useState } from "react";
import styled from "styled-components";
import {
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";
import { Link } from "react-router-dom";

const HeaderBar = styled.div`
  border-bottom: 0.5px solid #d8d8d8;
  width: 100%;
  height: 80px;
  display: inline-flex;
`;

const HeaderText = styled.div`
  width: 100px;
  font-size: 40px;
  font-family: "Montserrat", sans-serif;
`;

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevSate) => !prevSate);

  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
        rel="stylesheet"
      ></link>
      <HeaderBar>
        <Link to="/class" style={{ textDecoration: "none", color: "black" }}>
          <HeaderText>Join</HeaderText>
        </Link>
        <Dropdown
          className="ms-auto link-light"
          isOpen={dropdownOpen}
          toggle={toggle}
        >
          <DropdownToggle caret color="white" tag="span">
            <img
              src="https://m.cusine.co.kr/web/upload/jwgimg_m/right_category_bt.png"
              width="50px"
              height="50px"
              alt="mypage"
            ></img>
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem header>Header</DropdownItem>
            <Link
              to="/mypage/myinfo"
              style={{ textDecoration: "none", color: "black" }}
            >
              <DropdownItem>마이페이지</DropdownItem>
            </Link>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "black" }}
            >
              <DropdownItem>로그아웃</DropdownItem>
            </Link>
          </DropdownMenu>
        </Dropdown>
      </HeaderBar>
    </>
  );
}

export default Header;
=======
import React, { useState } from "react";
import styled from "styled-components";
import {
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";
import { Link } from "react-router-dom";

const HeaderBar = styled.div`
  border-bottom: 0.5px solid #d8d8d8;
  width: 100%;
  height: 80px;
  display: inline-flex;
`;

const HeaderText = styled.div`
  width: 100px;
  font-size: 40px;
  font-family: "Montserrat", sans-serif;
`;

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevSate) => !prevSate);

  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
        rel="stylesheet"
      ></link>
      <HeaderBar>
        <Link to="/class" style={{ textDecoration: "none", color: "black" }}>
          <HeaderText>Join</HeaderText>
        </Link>
        <Dropdown
          className="ms-auto link-light"
          isOpen={dropdownOpen}
          toggle={toggle}
        >
          <DropdownToggle caret color="white" tag="span">
            <img
              src="https://m.cusine.co.kr/web/upload/jwgimg_m/right_category_bt.png"
              width="50px"
              height="50px"
              alt="mypage"
            ></img>
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem header>Header</DropdownItem>
            <Link
              to="/mypage/myinfo"
              style={{ textDecoration: "none", color: "black" }}
            >
              <DropdownItem>마이페이지</DropdownItem>
            </Link>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "black" }}
            >
              <DropdownItem>로그아웃</DropdownItem>
            </Link>
          </DropdownMenu>
        </Dropdown>
      </HeaderBar>
    </>
  );
}

export default Header;
>>>>>>> master
