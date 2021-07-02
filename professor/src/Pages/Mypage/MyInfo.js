import React from 'react'
import styled from 'styled-components';

const InfoBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Text = styled.span`
  font-size : 20px;
  padding : 0 100px 0 50px;
  width : 600px;
  height: 100px;
`;

const Myimg = styled.span`
    width: 280px;
    height: 280px;
    padding-right: 500px;
    padding-top: 10px;
    img {
        width: 280px;
        height: 280px;
    }
`;

function MyInfo() {
    const imgurl = "./images/mypage.jpg"
    return (
        <InfoBox>
            <span>
                <br />
                <Text>이름  : </Text><br /><br />
                <Text>핸드폰 : </Text><br /><br />
                <Text>이메일 : </Text><br /><br />
            </span>
            <Myimg>
                <img src={imgurl} alt="이미지"/>
            </Myimg>
        </InfoBox>
    )
}

export default MyInfo
