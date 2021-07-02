import React from "react";
import { Button, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
const Scrollbar = styled.div`
  overflow-y: scroll;
  height: 600px;
  width: 620px;
`;
const Discuss = () => {
  const history = useHistory();

  const submitDiscuss = () => {
    history.push("/class/main/assignment");
  };

  return (
    <Row>
      <Col sm="12">
        <Scrollbar>
          <ListGroup>
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Morbi leo risus</ListGroupItem>
            <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
          </ListGroup>
        </Scrollbar>
        <div class="d-flex">
          <textarea style={{ width: "520px", height: "70px" }} />
          <Button style={{ marginLeft: "20px", height: "70px", width: "80px" }}>
            전송
          </Button>
        </div>
        <div class="mt-3">
          <Link to="/class/main/assignment">
            <Button
              color="secondary"
              size="sm"
              style={{ marginRight: "10px", marginLeft: "520px" }}
            >
              취소
            </Button>
          </Link>
          <Button color="secondary" size="sm" onClick={submitDiscuss}>
            제출
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default Discuss;
