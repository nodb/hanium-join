import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { useEnrolment, useTeams } from "../../../components/Use";
import { useHistory, useParams } from "react-router-dom";

const TStudentBox = styled.div`
  width: 180px;
  font-size: 18px;
`;

const StudentHr = styled.hr`
  width: 300px;
`;

const Arrow = styled.button`
  margin-bottom: 25px;
  margin-left: 35px;
  width: 130px;
  height: 35px;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  img {
    text-align: center;
    margin-left: 50px;
    width: 25px;
    height: 25px;
    margin-top: 4px;
  }
  cursor: pointer;
`;

const Box = styled.div`
  background: #ffffff;
  border: 2px solid #ef8f88;
  box-sizing: border-box;
  width: 400px;
  height: 626px;
  overflow: scroll;
  flex-wrap: wrap;
  padding: 30px 50px 30px;
  position: relative;
`;

const StudentBox = styled.div`
  width: 180px;
  font-size: 18px;
  margin-bottom: 10px;
`;

function P07_TeamList({ students }) {
  const { code } = useParams();

  const { teamList, listAllTeams, studentsNoTeam } = useTeams();

  const [students, setStudents] = useState(teamList.results[0]);
  const [currentTeam, setcurrentTeams] = useState(0);
  const [stud, setStud] = useState([]);

  useEffect(() => {
    setStudents(teamList.results[currentTeam]);
  }, [teamList.results]);

  const team_studentCheck = (id) => {
    let checked = [];
    checked = stud.filter((data) => data.memberId === id);

    return checked.length === 1;
  };

  const team_checkboxChange = (e) => {
    const { name, checked } = e.target;

    if (checked) {
      setStud([
        ...stud,
        {
          teamId: students.id,
          memberId: name,
        },
      ]);
    } else {
      const newStud = stud.filter((data) => data.memberId !== name);
      setStud(newStud);
    }
  };

  const fetch = async () => {
    try {
      await studentsNoTeam(code);
      await listAllTeams(code);
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      {students &&
        students.team.map((student) => {
          return (
            <TStudentBox>
              <FormGroup>
                <Label check>
                  <Input
                    type="checkbox"
                    checked={team_studentCheck(student.member_id)}
                    name={student.member_id}
                    onChange={team_checkboxChange}
                  />{" "}
                  &nbsp;
                  {student.name}({student.grade}학년)
                  <StudentHr />
                </Label>
              </FormGroup>
            </TStudentBox>
          );
        })}
    </>
  );
}

export default P07_TeamList;
