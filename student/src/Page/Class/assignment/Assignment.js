import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Col, Input, Button } from "reactstrap";
import { DateChange, DateChange2 } from "../../../utils/dateChange";
import { useAssignments, useComments } from "../../../components/Use";
import { getDataFromStorage } from "../../../utils/storage";

const Box = styled.div`
  width: 80%;
`;

export const Assignment = ({ match }) => {
  const history = useHistory();
  const assignmentId = match.params.id;
  const { assignmentOne, getAssignment } = useAssignments();

  const { commentList, listAllComments, createCommentApi, deleteCommentApi } =
    useComments();

  const studentInfo = getDataFromStorage();

  const [data, setData] = useState({
    contents: "",
  });

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

  const submitCommentHandler = async () => {
    try {
      const request = {
        memberId: studentInfo.id,
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

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = () => {
    history.push(`/student/class/1/main/assignment/${assignmentId}/submit`);
  };

  return (
    <Box>
      <Form>
        <FormGroup
          row
          style={{
            marginLeft: 3,
            padding: "15px 0px",
            borderBottom: "3px solid #C4C4C4",
          }}
        >
          <Label
            for="name"
            sm={2}
            style={{ fontWeight: "bold", paddingLeft: "5px" }}
          >
            과제
          </Label>
        </FormGroup>
        <FormGroup
          row
          style={{
            marginLeft: 3,
            padding: "5px 0px",
            borderBottom: "1px solid #C4C4C4",
            alignItems: "center",
          }}
        >
          <Label
            for="name"
            sm={2}
            style={{ fontWeight: "bold", paddingLeft: "5px" }}
          >
            과제명
          </Label>
          <Col sm={10}>{assignmentOne.name}</Col>
        </FormGroup>
        <FormGroup
          row
          style={{
            marginLeft: 3,
            padding: "5px 0px",
            borderBottom: "1px solid #C4C4C4",
            alignItems: "center",
          }}
        >
          <Label
            for="point"
            sm={2}
            style={{ fontWeight: "bold", paddingLeft: "5px" }}
          >
            공개일
          </Label>
          <Col sm={5}>{DateChange(assignmentOne.startDate)}</Col>
        </FormGroup>
        <FormGroup
          row
          style={{
            marginLeft: 3,
            padding: "5px 0px",
            borderBottom: "1px solid #C4C4C4",
            alignItems: "center",
          }}
        >
          <Label
            for="point"
            sm={2}
            style={{ fontWeight: "bold", paddingLeft: "5px" }}
          >
            마감일
          </Label>
          <Col sm={5}>{DateChange(assignmentOne.endDate)}</Col>
        </FormGroup>
        <FormGroup
          row
          style={{
            marginLeft: 3,
            padding: "5px 0px",
            borderBottom: "1px solid #C4C4C4",
            alignItems: "center",
          }}
        >
          <Label
            for="point"
            sm={2}
            style={{ fontWeight: "bold", paddingLeft: "5px" }}
          >
            배점
          </Label>
          <Col sm={4}>{assignmentOne.point}</Col>
        </FormGroup>
        <FormGroup
          row
          style={{
            marginLeft: 3,
            padding: "15px 0px",
            borderBottom: "3px solid #C4C4C4",
          }}
        >
          {assignmentOne.content}
        </FormGroup>
      </Form>
      <Form>
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
            댓글
          </Label>
        </FormGroup>
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
              {comment.memberId === studentInfo.id && (
                <Label for="contents" sm={1} style={{ paddingLeft: "5px" }}>
                  <Button
                    close
                    style={{ background: "none", border: 0, color: "red" }}
                    onClick={() => {
                      deleteCommentHandler(comment.id);
                    }}
                  />
                </Label>
              )}
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
      <div class="form-inline pb-4 mt-3">
        <p onClick={submitHandler}>과제 제출하러 가기</p>
      </div>
      <tr>
        <Link to="/student/class/main">
          <button
            href="#"
            class="btn btn-secondary btn-sm"
            style={{ fontSize: "12px" }}
          >
            목록
          </button>
        </Link>
      </tr>
    </Box>
  );
};

export default Assignment;
