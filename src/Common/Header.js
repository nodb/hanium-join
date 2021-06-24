import React, { useState } from "react";
import styled from "styled-components";
import {
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";

const HeaderBar = styled.div`
  border-bottom: 0.5px solid #d8d8d8;
  width: 100%;
  height: 80px;
  padding: 10px 30px 0 30px;
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
        <HeaderText>Join</HeaderText>
        <Dropdown
          className="ms-auto link-light"
          isOpen={dropdownOpen}
          toggle={toggle}
        >
          <DropdownToggle caret color="white" tag="span">
            <img
              src="https://m.cusine.co.kr/web/upload/jwgimg_m/right_category_bt.png"
              width="40px"
              height="40px"
              alt="mypage"
              style={{ marginTop: "10px" }}
            ></img>
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem>Some Action</DropdownItem>
            <DropdownItem text>Dropdown Item Text</DropdownItem>
            <DropdownItem disabled>잘 되넹</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>마이페이지</DropdownItem>
            <DropdownItem>로그아웃</DropdownItem>
            <DropdownItem>Quo Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </HeaderBar>
    </>
  );
}

export default Header;
