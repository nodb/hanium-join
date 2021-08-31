import React from "react";
import styled from "styled-components";

const Item = [
  {
    id: 1,
    text: "소개",
  },
  {
    id: 2,
    text: "정보",
  },
  {
    id: 3,
    text: "API",
  },
  {
    id: 4,
    text: "위치",
  },
  {
    id: 5,
    text: "마이페이지",
  },
  {
    id: 6,
    text: "개인정보 처리방침",
  },
  {
    id: 7,
    text: "약관",
  },
];

const Box = styled.div`
  width: 100%;
  padding-top: 20px;
`;

const ButtonText = styled.div`
  margin: 0 auto;
  width: 600px;
  height: 19px;
  display: flex;
`;

const Buttons = styled.button`
  font-family: Roboto;
  font-size: 11px;
  line-height: 14px;
  text-align: center;
  color: #7c7979;
  margin-right: 30px;
  background: none;
  border: none;
`;

const CopyRight = styled.div`
  padding-top: 20px;
  margin: 0 auto;
  width: 300px;
  height: 36px;
  font-family: Roboto;
  font-size: 11px;
  line-height: 12px;
  text-align: center;
  color: #7c7979;
`;

const Footer = () => {
  return (
    <Box>
      <ButtonText>
        {Item.map((item) => (
          <Buttons>{item.text}</Buttons>
        ))}
      </ButtonText>
      <CopyRight>
        2021 한이음 ICT 멘토링
        <br />© 2021 JOIN PROJECT BY EC
      </CopyRight>
    </Box>
  );
};

export default Footer;
