import React from "react";
import styled from "styled-components";
import { Row, Col, Button } from "reactstrap";
import Dropzone from "react-dropzone";
import { Link, useHistory } from "react-router-dom";

import filePlus from "../../../images/add.png";

const Title = styled.div`
  width: 100px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 16px;
  color: #7c7979;
  margin: 20px 0px 20px 0px;
`;

const ContentBox = styled.textarea`
  border: 1px solid #7c7979;
  width: 1100px;
  height: 250px;
  overflow-y: scroll;
`;

const DropBox = styled.div`
  border: 1px dashed gray;
  height: 150px;
  line-height: 150px;
  width: 1100px;
  display: flex;
`;

const DropText = styled.div`
  width: 600px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 16px;
  color: #c4c4c4;
`;

const Img = styled.img`
  width: 60px;
  height: 60px;
  margin: 40px 10px 0px 230px;
`;

const ButtonBox = styled.div`
  width: 300px;
  display: flex;
  margin: 0 auto;
  padding-top: 30px;
`;

const Btn = styled.button`
  width: 80px;
  height: 30px;
  border: none;
  color: white;
  background: ${(props) => props.color};
  margin-right: 10px;
`;

const Submit = () => {
  const history = useHistory();

  const submitAssignment = () => {
    history.push("/student/class/main/assignment");
  };

  return (
    <Row>
      <Col sm="12">
        <Title>내용 작성</Title>
        <ContentBox rows="10"></ContentBox>
        <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <Title>파일 첨부</Title>
                <DropBox>
                  <Img src={filePlus} alt="file" />
                  <DropText>
                    버튼 선택 혹은 첨부 파일을 선택하여 이곳에 드래그 & 드롭
                    해주세요
                  </DropText>
                </DropBox>
              </div>
            </section>
          )}
        </Dropzone>
        <ButtonBox>
          <Link to="/student/class/main/assignment">
            <Btn color="#EF8F88">취소</Btn>
          </Link>
          <Btn color="#6F91B5" onClick={submitAssignment}>
            제출
          </Btn>
        </ButtonBox>
      </Col>
    </Row>
  );
};

export default Submit;
