import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "reactstrap";
import Dropzone from "react-dropzone";
import { Link, useHistory, useParams } from "react-router-dom";
import { getDataFromStorage } from "../../../utils/storage";
import { useAssignments } from "../../../components/Use";

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

const Btn2 = styled.button`
  width: 80px;
  height: 30px;
  border: none;
  color: white;
  background: ${(props) => props.color};
  margin-right: 10px;
`;

const FileItem = styled.div`
  position: relative;
  width: 600px;
  height: 26px;
`;

const Btn = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  height: 26px;
  width: 26px;
  text-align: middle;
  vertical-align: center;
`;
const Submit = ({ match }) => {
  const history = useHistory();
  const { id } = useParams();
  const { submitAssignmentsApi } = useAssignments();
  const [data, setData] = useState({
    contents: "",
    file: "",
  });
  const [imgBase64, setImgBase64] = useState([]); // 파일 base64
  const [imgFile, setImgFile] = useState(null); //파일

  const submitHandler = async () => {
    try {
      const studentInfo = getDataFromStorage();
      const memberId = studentInfo.id;
      const fd = new FormData();
      console.log("err");
      if (imgFile) {
        Object.values(imgFile).forEach((file) => fd.append("file", file));
      }
      console.log("err");
      fd.append("contents", data.contents);
      const response = await submitAssignmentsApi(id, memberId, fd);

      if (response.data) {
        history.push("/student/class/");
      }
    } catch (e) {
      // alert("과제 제출 실패");
      alert(e);
    }
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeFile = (e) => {
    // console.log(e.target.files)
    setImgFile(e.target.files);
    //fd.append("file", e.target.files)
    setImgBase64([]);
    for (let i = 0; i < e.target.files.length; i++) {
      if (e.target.files[i]) {
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[i]); // 1. 파일을 읽어 버퍼에 저장합니다.
        // 파일 상태 업데이트
        reader.onloadend = () => {
          // 2. 읽기가 완료되면 아래코드가 실행됩니다.
          const base64 = reader.result;
          if (base64) {
            //  images.push(base64.toString())
            const base64Sub = {
              name: e.target.files[i].name,
              file: base64.toString(),
            };

            setImgBase64((imgBase64) => [...imgBase64, base64Sub]);
            //  setImgBase64(newObj);
            // 파일 base64 상태 업데이트
            //  console.log(images)
          }
        };
      }
    }
    console.log(imgBase64);
  };

  const deleteHandler = (e) => {
    const arr = imgBase64.filter((element) => element.name !== e.target.name);
    setImgBase64(arr);
  };

  return (
    <Row>
      <Col sm="12">
        <Title>내용 작성</Title>
        <ContentBox
          rows="10"
          name="contents"
          value={data.contents}
          onChange={handleChange}
        ></ContentBox>

        {imgBase64.map((item) => {
          return (
            <FileItem>
              <span style={{ fontSize: "14px" }}>{item.name}</span>
              <Btn name={item.name} onClick={deleteHandler}>
                x
              </Btn>
            </FileItem>
          );
        })}
        <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} onChange={handleChangeFile} />
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
            <Btn2 color="#EF8F88">취소</Btn2>
          </Link>
          <Btn2 color="#6F91B5" onClick={submitHandler}>
            제출
          </Btn2>
        </ButtonBox>
      </Col>
    </Row>
  );
};

export default Submit;
