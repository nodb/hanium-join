import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export const P11_07 = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <Form>
      <FormGroup style={{ marginTop: "20px" }}>
        <Label for="exampleEmail" style={{ fontWeight: "bold" }}>
          과제명
        </Label>
        <Input
          type="email"
          name="email"
          id="assignmentName"
          style={{ width: "600px" }}
        />
      </FormGroup>
      <FormGroup style={{ marginTop: "30px" }}>
        <Label for="exampleText" style={{ fontWeight: "bold" }}>
          과제 내용
        </Label>
        <Input
          type="textarea"
          name="text"
          id="assignmentText"
          style={{ height: "300px", width: "600px" }}
        />
      </FormGroup>
      <FormGroup style={{ marginTop: "20px" }}>
        <Input type="file" name="file" id="exampleFile" />
      </FormGroup>
      <div class="mt-2" style={{ fontWeight: "bold" }}>
        과제 마감 날짜
      </div>
      <div class="d-flex mt-1">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
        <div>~</div>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
      </div>
      <Button size="sm" style={{ marginTop: "20px" }}>
        과제 수정
      </Button>
    </Form>
  );
};

export default P11_07;
