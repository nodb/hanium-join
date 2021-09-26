import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import { useAssignments, useComments, useTeams } from "../../../components/Use";
import { DateChange, DateChange2 } from "../../../utils/dateChange";
import { getDataFromStorage } from "../../../utils/storage";
import styled from "styled-components";
import { CTLoading, useLoading } from "../../../components";

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

const assignment = ({ match }) => {
  const history = useHistory();
  const { code } = useParams();
  const assignmentId = match.params.id;
  const professorInfo = getDataFromStorage();

  const { loading, setLoading } = useLoading(true);

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

  useEffect(() => {
    const fetch = async () => {
      try {
        await listAllTeams(code);
      } catch (e) {
        alert(e);
      } finally {
        await setLoading(false);
      }
    };
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      try {
        await getAssignment(assignmentId);
      } catch (e) {
        alert(e);
      } finally {
        await setLoading(false);
    }
    };
    fetch();
  }, []);

  useEffect(() => {
    console.log(match.params);
    const fetch = async () => {
      try {
        await listAllComments(assignmentId);
      } catch (e) {
        alert(e);
      }
    };
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
      console.log(item.team_id);
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
    } finally {
      await setLoading(false);
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
    } finally {
      await setLoading(false);
     }
  };

  if (!data) return "로딩중";

  return (

    loading ? (
      <CTLoading />
     ) : (
    <Box>
      <div class="mt-3" style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={modifyHandler}
          size="sm"
          style={{ marginRight: "20px" }}
        >
          수정
        </button>
        <button onClick={deleteHandler} size="sm">
          삭제
        </button>
      </div>
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
          <Label
            for="name"
            sm={1}
            style={{ fontWeight: "bold", paddingLeft: 0 }}
          >
            과제명
          </Label>
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
          <Label
            for="point"
            sm={1}
            style={{ fontWeight: "bold", paddingLeft: 0 }}
          >
            배점
          </Label>
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
          <Label
            for="point"
            sm={1}
            style={{ fontWeight: "bold", paddingLeft: 0 }}
          >
            공개일
          </Label>
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
          <Label
            for="point"
            sm={1}
            style={{ fontWeight: "bold", paddingLeft: 0 }}
          >
            마감일
          </Label>
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
          <Label
            for="team"
            sm={1}
            style={{ fontWeight: "bold", paddingLeft: 0 }}
          >
            팀지정
          </Label>
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
          <p>{assignmentOne.content}</p>
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
              <Label
                for="name"
                sm={2}
                style={{ fontWeight: "bold", paddingLeft: "5px" }}
              >
                {comment.name} ({DateChange2(comment.createdAt)})
              </Label>
              <Label for="contents" sm={6} style={{ paddingLeft: "5px" }}>
                {comment.contents}
              </Label>
              <Label for="contents" sm={1} style={{ paddingLeft: "5px" }}>
                <Button
                  close
                  style={{ background: "none", border: 0, color: "red" }}
                  onClick={() => {
                    deleteCommentHandler(comment.id);
                  }}
                />
              </Label>
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
            <button size="sm" onClick={submitCommentHandler}>
              확인
            </button>
          </Col>
        </FormGroup>
      </Form>
    </Box>
  )
  );
};

export default assignment;
