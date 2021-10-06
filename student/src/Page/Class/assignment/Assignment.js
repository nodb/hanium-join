import React from "react";
import styled from "styled-components";
import { DateChange2, CommentDateChange } from "../../../utils/dateChange";
import { Form, FormGroup, Label, Col, Input, Button } from "reactstrap";

import GoSubmitAssignment from "../../../images/goSubmitAssignment.png";
import useAssignment from "./useAssignment";

const Box = styled.div`
  width: 1100px;
  button {
    color: white;
    background-color: #6f91b5;
    font-weight: bold;
  }
`;

const GoSubmit = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
  width: fit-content;
  vertical-align: middle;

  p {
    font-family: Roboto;
    font-weight: bold;
    color: #6f91b5;
  }
`;

const Comment = () => {
  const {
    data,
    studentInfo,
    commentList,
    deleteCommentHandler,
    submitCommentHandler,
    handleChange,
  } = useAssignment();

  return (
    <Form>
      <FormGroup
        row
        style={{
          marginLeft: 3,
          padding: "4px 0px",
          borderBottom: "1px solid #C4C4C4",
        }}
      >
        <Label
          for="name"
          sm={2}
          style={{
            fontWeight: "bold",
            paddingLeft: "5px",
            color: "#EF8F88",
            fontSize: "20px",
          }}
        >
          댓글
        </Label>
      </FormGroup>
      {commentList.results.map((comment) => {
        return (
          <FormGroup
            row
            style={{
              marginLeft: 5,
              padding: "7px 0px",
            }}
          >
            <Label
              for="name"
              sm={2}
              style={{
                fontWeight: "bold",
                paddingLeft: "5px",
                fontSize: "15px",
              }}
            >
              {comment.name} ({CommentDateChange(comment.createdAt)})
            </Label>
            <Label
              for="contents"
              sm={6}
              style={{ paddingLeft: "5px", fontSize: "15px" }}
            >
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
        <Col sm={8}>
          <Input
            type="conmment"
            name="contents"
            id="contents"
            value={data.contents}
            onChange={handleChange}
          />
        </Col>
        <Col>
          <button
            class="btn btn-secondary btn-sm"
            onClick={submitCommentHandler}
          >
            확인
          </button>
        </Col>
      </FormGroup>
    </Form>
  );
};

const Assignment = () => {
  const { loading, CTLoading, assignmentOne, submitHandler, listHandler } =
    useAssignment();

  return loading ? (
    <CTLoading />
  ) : (
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
            style={{ fontWeight: "bold", paddingLeft: "5px", fontSize: "20px" }}
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
            sm={1}
            style={{ fontWeight: "bold", paddingLeft: "5px", color: "#7C7979" }}
          >
            과제명
          </Label>
          <Col sm={10} style={{ fontWeight: "bold" }}>
            {assignmentOne.name}
          </Col>
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
            sm={1}
            style={{ fontWeight: "bold", paddingLeft: "5px", color: "#7C7979" }}
          >
            공개일
          </Label>
          <Col sm={5}>{DateChange2(assignmentOne.startDate)}</Col>
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
            sm={1}
            style={{ fontWeight: "bold", paddingLeft: "5px", color: "#7C7979" }}
          >
            마감일
          </Label>
          <Col sm={5}>{DateChange2(assignmentOne.endDate)}</Col>
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
            sm={1}
            style={{
              fontWeight: "bold",
              paddingLeft: "10px",
              color: "#7C7979",
            }}
          >
            배점
          </Label>
          <Col sm={4}>{assignmentOne.point}</Col>
        </FormGroup>
        <FormGroup
          row
          style={{
            marginLeft: 3,
            padding: "30px 10px",
            borderBottom: "3px solid #C4C4C4",
            fontSize: "16px",
          }}
        >
          {assignmentOne.content}
        </FormGroup>
      </Form>
      <Comment />
      <GoSubmit onClick={submitHandler}>
        <img alt="assignmentImg" src={GoSubmitAssignment} />
        <p style={{ marginLeft: "5px" }}>과제 제출하러 가기</p>
      </GoSubmit>
      <tr>
        <button
          href="#"
          class="btn btn-secondary btn-sm"
          style={{ fontSize: "12px" }}
          onClick={listHandler}
        >
          목록
        </button>
      </tr>
    </Box>
  );
};

export default Assignment;
