import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import { useAssignments, useComments, useTeams } from "../../../components/Use";
import { DateChange, DateChange2 } from "../../../utils/dateChange";
import { getDataFromStorage } from "../../../utils/storage";
import styled from "styled-components";
import { CTLoading, useLoading } from "../../../components";
import oc from "open-color";

const FormDiv = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  height: 680px;
`

const ListText = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 23px;

color: #3D3D3D;
margin-top: 42px;

`


const Box = styled.div`
  width: 80%;
  button {
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    text-align: center;
    background-color: #ffffff;
    border-color: #426589;
    color: #426589;
    width: 60px;
    height: 30px;
  }
`;

const Details = styled.div`
display: inline-block;
margin-right: 59px;
font-family: Roboto;
font-style: normal;
font-size: 18px;
line-height: 23px;
width:100px;

color: #FFFFFF;
margin-top: 10px;
  margin-bottom: 15px;
  text-align: center;
`

const ModifyButton = styled.button`
background: #FFFFFF;
border: 2px solid #426589;
box-sizing: border-box;

  margin-bottom: 30px;
  margin-top: -40px;
  float: right;
  margin-right: 60px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  color: #426589;
  
  width: 80px;
  height: 35px;
  :hover{
    background-color: #426589;
    color: white;
  }
`;

const LabelText = styled.div`
display: inline-block;
margin-right: 59px;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 23px;
width:100px;

color: #3D3D3D;
margin-top: 10px;
  margin-bottom: 15px;
  text-align: center;

`;
const EnterButton = styled.button`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  margin-top: 3px;
  color: #426589;
  background: #FFFFFF;
border: 2px solid #426589;
box-sizing: border-box;
padding-top: 2px;
:hover{
    background-color: #426589;
    color: white;
  }
`;

const DeleteButton = styled.button`
background: #FFFFFF;
border: 2px solid #426589;
box-sizing: border-box;

  margin-bottom: 30px;
  margin-top: -40px;
  float: right;
  margin-right: 60px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  color: #426589;
  
  width: 80px;
  height: 35px;
  :hover{
    background-color: #426589;
    color: white;
  }
`;

const assignment = ({ match }) => {
  const history = useHistory();
  const { code } = useParams();
  const assignmentId = match.params.id;
  const professorInfo = getDataFromStorage();

  const { loading, setLoading } = useLoading(true);

  console.log(loading);

  const [data, setData] = useState({
    contents: "",
  });

  const { assignmentOne, getAssignment, deleteAssignmentsApi } =
    useAssignments();
  const { commentList, listAllComments, createCommentApi, deleteCommentApi } =
    useComments();
  const { teamList, listAllTeams } = useTeams();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const fetch = async () => {
    try {
      await getAssignment(assignmentId);
      await listAllTeams(code);
      await listAllComments(assignmentId);
    } catch (e) {
      alert(e);
    } finally {
      await setLoading(false);
    }
  };
  useEffect(() => {
    fetch();
  }, []);

  const modifyHandler = () => {
    history.push(`/professor/class/${code}/assignment/${assignmentId}/modify`);
  };

  const deleteHandler = async () => {
    try {
      history.push(`/professor/class/${code}/assignmentList`);
      await deleteAssignmentsApi(assignmentId);
    } catch (e) {
      alert(e);
    }
  };

  const teamCheck = (id) => {
    let valid = false;
    if (!assignmentOne.team) return valid;
    assignmentOne.team.map((item) => {
      if (item.team_id === id) {
        valid = true;
      }
    });
    return valid;
  };

  const submitCommentHandler = async () => {
    try {
      const request = {
        memberId: professorInfo.id,
        assignmentId: assignmentId,
        contents: data.contents,
      };
      await createCommentApi(request);
      await listAllComments(assignmentId);
      setData({
        ...data,
        contents: "",
      });
    } catch (e) {
      alert(e);
    }
  };

  const deleteCommentHandler = async (commentId) => {
    try {
      await deleteCommentApi(commentId);
      await listAllComments(assignmentId);
      setData({
        ...data,
        contents: "",
      });
    } catch (e) {
      alert(e);
    }
  };

  return loading ? (
    <CTLoading />
  ) : (
    <Box>
        <ListText>과제 등록</ListText>
      <div class="mt-3" style={{ display: "flex", justifyContent: "flex-end" }}>
        <ModifyButton
          onClick={modifyHandler}
          size="sm"
          style={{ marginRight: "20px" }}
        >
          수정
        </ModifyButton>
        <DeleteButton onClick={deleteHandler} size="sm">
          삭제
        </DeleteButton>
      </div>
      <FormDiv>
      <Form>
        <FormGroup
          row
          style={{
            marginLeft: 3,
            padding: "8px 0px",
            borderBottom: "1px solid #C4C4C4",
            alignItems: "center",
          }}
        >
          <LabelText>
            과제명
          </LabelText>
          <Col sm={10}>{assignmentOne.name}</Col>
        </FormGroup>
        <FormGroup
          row
          style={{
            marginLeft: 3,
            padding: "8px 0px",
            borderBottom: "1px solid #C4C4C4",
            alignItems: "center",
          }}
        >
          <LabelText
            for="point"
            sm={1}
            style={{ fontWeight: "bold", paddingLeft: 0 }}
          >
            배점
          </LabelText>
          <Col sm={4}>{assignmentOne.point}</Col>
        </FormGroup>
        <FormGroup
          row
          style={{
            marginLeft: 3,
            padding: "8px 0px",
            borderBottom: "1px solid #C4C4C4",
            alignItems: "center",
          }}
        >
          <LabelText
            for="point"
            sm={1}
            style={{ fontWeight: "bold", paddingLeft: 0 }}
          >
            공개일
          </LabelText>
          <Col sm={5}>{DateChange(assignmentOne.startDate)}</Col>
        </FormGroup>
        <FormGroup
          row
          style={{
            marginLeft: 3,
            padding: "8px 0px",
            borderBottom: "1px solid #C4C4C4",
            alignItems: "center",
          }}
        >
          <LabelText
            for="point"
            sm={1}
            style={{ fontWeight: "bold", paddingLeft: 0 }}
          >
            마감일
          </LabelText>
          <Col sm={5}>{DateChange(assignmentOne.endDate)}</Col>
        </FormGroup>
        <FormGroup
          row
          style={{
            marginLeft: 3,
            padding: "8px 0px",
            borderBottom: "1px solid #C4C4C4",
            alignItems: "center",
          }}
        >
          <LabelText
            for="team"
            sm={1}
            style={{ fontWeight: "bold", paddingLeft: 0 }}
          >
            팀지정
          </LabelText>
          {teamList.results.map((team) => (
            <Col sm={1}>
              <Input
                type="checkbox"
                checked={teamCheck(team.id)}
                disabled={true}
                style={{ marginRight: "5px" }}
              />
              {team.name}
            </Col>
          ))}
        </FormGroup>
        <FormGroup
          style={{
            marginLeft: 3,
            padding: "15px 0px 150px 0px",
            borderBottom: "1px solid #C4C4C4",
            alignItems: "center",
          }}
        >
          <p style={{
            marginLeft: 20}}>{assignmentOne.content}</p>
        </FormGroup>
        <FormGroup
          style={{
            marginLeft: 3,
            padding: "15px 0px",
            borderBottom: "1px solid #C4C4C4",
            alignItems: "center",
          }}
        >
          <div style={{ fontWeight: "bold", paddingLeft: 0 }}>첨부 파일</div>
        </FormGroup>
        <FormGroup
          style={{
            marginLeft: 3,
            padding: "15px 0px",
            borderBottom: "1px solid #C4C4C4",
            alignItems: "center",
          }}
        >
          <div style={{ fontWeight: "bold", paddingLeft: 0 }}>해답 파일</div>
        </FormGroup>
        <div style={{ fontSize: "14px" }} class="mt-3 mb-3">
          댓글 {commentList.total}개
        </div>
        {commentList.results.map((comment) => {
          return (
            <FormGroup
              row
              style={{
                marginLeft: 3,
                padding: "7px 0px",
                borderBottom: "1px solid #C4C4C4",
              }}
            >
              <LabelText
                for="name"
                sm={2}
                style={{ fontWeight: "bold", paddingLeft: "5px" }}
              >
                {comment.name} ({DateChange2(comment.createdAt)})
              </LabelText>
              <LabelText for="contents" sm={6} style={{ paddingLeft: "5px" }}>
                {comment.contents}
              </LabelText>
              <LabelText for="contents" sm={1} style={{ paddingLeft: "5px" }}>
                <Button
                  close
                  style={{ background: "none", border: 0, color: "red" }}
                  onClick={() => {
                    deleteCommentHandler(comment.id);
                  }}
                />
              </LabelText>
            </FormGroup>
          );
        })}
        <FormGroup
          row
          style={{
            padding: "7px 0px",
          }}
        >
          <Col sm={7}>
            <Input
              type="conmment"
              name="contents"
              id="contents"
              value={data.contents}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <EnterButton size="sm" onClick={submitCommentHandler}>
              확인
            </EnterButton>
          </Col>
        </FormGroup>
      </Form>
      </FormDiv>
    </Box>
  );
};

export default assignment;
