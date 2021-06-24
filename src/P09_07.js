import React, { useState } from "react";
import Navbar from "./Navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export const P09_07 = () => {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div style={{display : "flex",
    flexDirection : "column" }}>
      <div className="row">
        <Navbar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <Form>
            <FormGroup style={{marginTop : "20px"}}>
              <Label for="assignmentName" style={{ fontWeight: "bold" }}>
                과제명
              </Label>
              <Input type="name" name="name" id="assignmentName" style={{width:"600px"}} />
            </FormGroup>
            <FormGroup style={{marginTop : "30px"}}>
              <Label for="assignmentText" style={{ fontWeight: "bold" }}>
                과제 내용
              </Label>
              <Input
                type="textarea"
                name="text"
                id="assignmentText"
                style={{ height: "300px",
                width : "600px" }}
              />
            </FormGroup>
            <FormGroup style={{marginTop : "20px"}}>
              <Input type="file" name="file" id="assignmentFile"/>
            </FormGroup>
            <div class="mt-2" style={{fontWeight:"bold"}}>
              과제 마감 날짜
            </div>
            <div class="d-flex mt-1">
              <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}/>
                <div>
                  ~
                </div>
              <DatePicker
                selected={endDate}
                onChange={date => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}/>
                </div>
            <Button size="sm" style={{marginTop : "20px"}}>과제 등록</Button>
          </Form>
        </main>
      </div>
    </div>
  );
};

export default P09_07;
