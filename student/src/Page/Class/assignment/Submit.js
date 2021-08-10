import React from "react";
import { Row, Col, Button } from "reactstrap";
import Dropzone from "react-dropzone";
import { Link, useHistory } from "react-router-dom";
const Submit = () => {
  const history = useHistory();

  const submitAssignment = () => {
    history.push("/student/class/main/assignment");
  };

  return (
    <Row>
      <Col sm="12">
        <textarea
          class="form-control mt-4"
          rows="10"
          style={{ width: "600px" }}
        ></textarea>
        <hr style={{ width: "600px" }} />
        <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
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
          <Button color="secondary" size="sm" onClick={submitAssignment}>
            제출
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default Submit;
