import React from "react";
import styled from "styled-components";

const Box = styled.div`
`;

const Page = styled.div`
color: #3D3D3D;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 20px;
margin-top: 27px;
`;

const Hr = styled.hr`
width: 1032px;
height: 0px;
border: 4px solid #C4C4C4;
`

const InfoBox = styled.div`
display: flex;
margin-top: 60px;
justify-content: space-around;
`

const Myimg = styled.div`
  img {
    width: 180px;
    height: 180px;
  }
`;

const Info = styled.div`
width: 408px;
`

const Name = styled.span`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 27px;
color: #000000;
`

const Major = styled.span`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 20px;
color: #3D3D3D;
`

const Email = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 23px;

color: #000000;
img{
  margin-right: 21px;
}

margin-top: 30px;
`

const School_num = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 23px;

color: #000000;
img{
  margin-right: 21px;
}
margin-top: 10px;
`

const Phone = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 23px;

color: #000000;
img{
  margin-right: 21px;
}
margin-top: 10px;
`

const Modify = styled.div`
background-color: #6F91B5;
width: 160px;
height: 39px;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 23px;
text-align: center;
color: #FFFFFF;
padding-top: 9px;
`


function MyInfo() {
  return (
    <Box>
    <Page>
      내 프로필
    </Page>
    <Hr />
    <InfoBox>
      <Myimg>
        <img src={require('../../images/person_default.png').default} alt="이미지" />
      </Myimg>
      <Info>
        <Name> 홍길동 </Name> <Major> ( 컴퓨터공학과 ) </Major>
        <Email>
        <img src={require('../../images/Email.png').default} alt="이메일" />
        join1234@seoultech.ac.kr
        <School_num>
        <img src={require('../../images/Major.png').default} alt="학사번호" />
        12341234
        </School_num>
        </Email>
        <Phone>
        <img src={require('../../images/Phone.png').default} alt="폰" />
        010-1234-1234
        </Phone>
      </Info>
    <Modify>
      정보 수정
    </Modify>
    </InfoBox>
    </Box>
  );
}

export default MyInfo;
