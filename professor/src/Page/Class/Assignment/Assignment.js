import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Col } from "reactstrap";
import imgfile from "../../../images/assign_example.PNG";
import { useAssignments, useComments } from "../../../components/Use";
import { DateChange, DateChange2 } from "../../../utils/dateChange";
import { getDataFromStorage } from "../../../utils/storage";
import styled from "styled-components";

const Box = styled.div`
  width: 80%;
`;

const Button = styled.div`
  border: solid;
  border-width: 1px;
  border-color: #426589;
`;

const assignment = ({ match }) => {
  const history = useHistory();
  const count = 0;
  const assignmentId = match.params.id;
  const professorInfo = getDataFromStorage();

  const [data, setData] = useState({
    contents: "",
  });

  const { assignmentOne, getAssignment, deleteAssignmentsApi } =
    useAssignments();
  const { commentList, listAllComments, createCommentApi } = useComments();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        await getAssignment(assignmentId);
      } catch (e) {
        alert(e);
      }
    };
    fetch();
  }, []);

  useEffect(() => {
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
    history.push(`/professor/class/assignment/${assignmentId}/modify`);
  };

  const deleteHandler = async () => {
    try {
      history.push(`/professor/class/assignmentList`);
      await deleteAssignmentsApi(assignmentId);
    } catch (e) {
      alert(e);
    }
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

  return (
    <Box>
      <div class="mt-3" style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          onClick={modifyHandler}
          size="sm"
          style={{ marginRight: "20px" }}
        >
          수정
        </Button>
        <Button onClick={deleteHandler} size="sm">
          삭제
        </Button>
      </div>
      <Form>
        <FormGroup
          row
          style={{
            marginLeft: 3,
            padding: "8px 0px",
            borderBottom: "1px solid #C4C4C4",
            verticalAlign: "middle",
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
            for="point"
            sm={1}
            style={{ fontWeight: "bold", paddingLeft: 0 }}
          >
            팀지정
          </Label>
          {/* {
            <Col>
              <Input
                type="checkbox"
                name="point"
                id="point"
                value={data.point}
                onChange={handleChange}
              />
              1팀
            </Col>
          } */}
        </FormGroup>

        <img src={imgfile} class="mt-3" />
        <FormGroup style={{ marginTop: "30px" }}>
          <p>{assignmentOne.content}</p>
        </FormGroup>
        <div style={{ fontSize: "14px" }} class="mt-3 mb-3">
          댓글 {count}개
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
                sm={1}
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
            marginLeft: 3,
            padding: "15px 0px",
            borderBottom: "1px solid #C4C4C4",
            alignItems: "center",
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
            <Button size="sm" onClick={submitCommentHandler}>
              확인
            </Button>
          </Col>
        </FormGroup>
      </Form>

      <Button size="sm" style={{ marginTop: "20px" }}>
        리포트 생성
      </Button>
    </Box>
  );
};

export default assignment;
