import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link, useHistory } from "react-router-dom";

const P09_07 = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [cSelected, setCSelected] = useState([]);
  const history = useHistory();

  const onCheckboxBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  };

  const createAssignment = () => {
    history.push("/professor/class/assignmentList");
    // 생성 로직
  };

  return (
    <Form>
      <FormGroup style={{ marginTop: "20px" }}>
        <Label for="assignmentName" style={{ fontWeight: "bold" }}>
          과제명
        </Label>
        <Input
          type="name"
          name="name"
          id="assignmentName"
          style={{ width: "600px" }}
        />
      </FormGroup>
      <FormGroup style={{ marginTop: "30px" }}>
        <Label for="assignmentText" style={{ fontWeight: "bold" }}>
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
        <Input type="file" name="file" id="assignmentFile" />
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
      <div class="mt-2 d-flex">
        <Button
          color="secondary"
          onClick={() => onCheckboxBtnClick(1)}
          active={cSelected.includes(1)}
          style={{ marginRight: "10px" }}
        >
          1팀
        </Button>
        <Button
          color="secondary"
          onClick={() => onCheckboxBtnClick(2)}
          active={cSelected.includes(2)}
          style={{ marginRight: "10px" }}
        >
          2팀
        </Button>
        <Button
          color="secondary"
          onClick={() => onCheckboxBtnClick(3)}
          active={cSelected.includes(3)}
        >
          3팀
        </Button>
      </div>
      <p>선택된 팀: {JSON.stringify(cSelected)}</p>
      <Button
        size="sm"
        style={{ marginTop: "20px" }}
        onClick={createAssignment}
      >
        과제 등록
      </Button>
    </Form>
  );
};

export default P09_07;
