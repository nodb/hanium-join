import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "reactstrap";
import Dropzone from "react-dropzone";
import { Link, useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import { useAssignments } from "../../../components/Use";
import { getDataFromStorage } from "../../../utils/storage";

const FileItem = styled.div`
  position: relative;
  width: 600px;
  height: 26px;
`;

const Btn = styled.button`
  position: absolute;
  top:0px;
  right:0px;
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
  const [imgFile, setImgFile] = useState(null);	//파일
	
  const submitHandler = async () => {
    try {
      const studentInfo = getDataFromStorage();
      const memberId = studentInfo.id;
      const fd = new FormData();
      console.log("err");
      if(imgFile){
        Object.values(imgFile).forEach((file)=>fd.append("file",file));
      }
      console.log("err");
      fd.append("contents",data.contents);
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
      [e.target.name] : e.target.value,
    });
  };
  const handleChangeFile = (e) => {
    // console.log(e.target.files)
    setImgFile(e.target.files);
    //fd.append("file", e.target.files)
    setImgBase64([]);
    for(let i=0;i<e.target.files.length;i++){
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
            file: base64.toString()
          }
            
          setImgBase64(imgBase64 => [...imgBase64, base64Sub]);
          //  setImgBase64(newObj);
            // 파일 base64 상태 업데이트
          //  console.log(images)
          }
        }
      }
    }
    console.log(imgBase64);
  }

  const deleteHandler = (e) => {
    const arr = imgBase64.filter((element) => element.name!==e.target.name);
    setImgBase64(arr);
  }

  return (
    <Row>
      <Col sm="12">
        <textarea
          name="contents"
          value={data.contents}
          onChange={handleChange}
          class="form-control mt-4"
          rows="10"
          style={{ width: "600px" }}
        />
        <hr style={{ width: "600px" }} />
        {imgBase64.map((item) => {
          return(
            <FileItem><span style={{fontSize:"14px"}}>{item.name}</span><Btn name={item.name} onClick={deleteHandler}>x</Btn></FileItem>
          )
        })}
        <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} onChange={handleChangeFile}/>
                <div
                  style={{
                    border: "1px dashed gray",
                    height: "200px",
                    textAlign: "center",
                    lineHeight: "200px",
                    width: "600px",
                  }}
                >
                  <p>Drag & Drop Files Here</p>
                </div>
              </div>
            </section>
          )}
        </Dropzone>
        <div class="mt-5 d-flex" style={{ marginLeft: "500px" }}>
          <Link to="/student/class/main/assignment">
            <Button color="secondary" size="sm" style={{ marginRight: "8px" }}>
              취소
            </Button>
          </Link>
          <Button color="secondary" size="sm" onClick={submitHandler}>
            제출
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default Submit;
