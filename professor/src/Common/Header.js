import React, { useState } from "react";
import styled from "styled-components";
import {
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const HeaderBar = styled.div`
  width: 100%;
  height: 60px;
  padding: 20px 25px 0px 30px;
`;

const Box = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
`;

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevSate) => !prevSate);

  return (
    <HeaderBar>
      <Box>
        <Logo />
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
            <Link
              to="/professor/mypage/myinfo"
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
      </Box>
    </HeaderBar>
  );
}

export default Header;
