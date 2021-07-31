import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link, useHistory } from "react-router-dom";

const P11_07 = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [cSelected, setCSelected] = useState([]);

  const onCheckboxBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  };

  const history = useHistory();

  const modifyAssignment = () => {
<<<<<<< HEAD
    history.push("/class/assignment");
=======
    history.push("/professor/class/assignment");
>>>>>>> 3eb3fac170c5980ada387928f12e91ed9e75d89d
  };

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
        onClick={modifyAssignment}
      >
        과제 수정
      </Button>
    </Form>
  );
};

export default P11_07;
