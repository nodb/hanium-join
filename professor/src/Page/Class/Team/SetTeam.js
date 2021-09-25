import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { useTeams, useEnrolment } from "../../../components/Use";
import TeamList from "./P07_TeamList";

const Text = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;

  color: #3d3d3d;
  margin-top: 30px;
`;
const Select = styled.select`
  margin-top: -16px;
  width: 100px;
  height: 30px;
  float: right;
  margin-bottom: 6px;
`;
const Button = styled.button`
  width: 100px;
  height: 30px;
  margin-right: 50px;
  margin-top: 25px;
  background-color: white;
`;
const LinkButton = styled.div`
  width: 100px;
  height: 32px;
  border: 2px solid #426589;
  box-sizing: border-box;
  border-radius: 50px;
  color: #426589;
  font-size: 18px;
  text-align: center;
  margin-left: 85%;
  cursor: pointer;
  :hover {
    background-color: #426589;
    color: white;
  }
`;
const Box = styled.div`
  width: 80%;
`;
const Head = styled.div`
  width: 100%;
`;
const Cont = styled.div`
  display: flex;
  margin-top: -10px;
`;
const Student = styled.div`
  width: 30%;
`;
const Team = styled.div``;
const ListText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;

  color: #3d3d3d;
  margin-top: 42px;
`;
const RelatvieBox = styled.span`
  margin-top: 303px;
  width: 200px;
  right: 135px;
`;

const AddArrow = styled.button`
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

const StudentBox = styled.div`
  width: 180px;
  font-size: 18px;
  margin-bottom: 10px;
`;

const SBox = styled.div`
  width: 400px;
  height: 626px;
  overflow: scroll;
  flex-wrap: wrap;
  padding: 30px 50px 30px;
  position: relative;
  background: #ffffff;
  border: 2px solid #6f91b5;
  box-sizing: border-box;
  margin-top: 20px;
`;

const DelArrow = styled.button`
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

const TBox = styled.div`
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

const TStudentBox = styled.div`
  width: 180px;
  font-size: 18px;
  margin-bottom: 10px;
`;

function P07_05() {
  const { code } = useParams();
  const { teamList, listAllTeams, insertStudentsApi, deleteStudentsApi } =
    useTeams();
  const { studentList, studentListAll } = useEnrolment();

  const [students, setStudents] = useState(teamList.results[0]);
  const [stud, setStud] = useState([]);
  const [teamStud, setTeamStud] = useState([]);

  const stud_checkboxChange = (e) => {
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

  const team_checkboxChange = (e) => {
    const { name, checked } = e.target;

    if (checked) {
      setTeamStud([
        ...teamStud,
        {
          teamId: students.id,
          memberId: name,
        },
      ]);
    } else {
      const newStud = teamStud.filter((data) => data.memberId !== name);
      setTeamStud(newStud);
    }
  };

  const teamClick = (e) => {
    setStudents(teamList.results[Number(e.target.value) - 1]);
  };

  const stud_studentCheck = (id) => {
    let checked = [];
    checked = stud.filter((data) => data.memberId === id);
    return checked.length === 1;
  };

  const team_studentCheck = (id) => {
    let checked = [];
    checked = teamStud.filter((data) => data.memberId === id);

    return checked.length === 1;
  };

  const insertHandler = async (e) => {
    const body = stud;
    try {
      await insertStudentsApi(code, body);
      await listAllTeams(code);
      await studentListAll(code);
      setStud([]);
      setTeamStud([]);
    } catch (e) {
      alert(e);
    }
  };

  const deleteHandler = async (e) => {
    let members = [];
    teamStud.map((data) => {
      members.push(data.memberId);
    });
    try {
      await deleteStudentsApi(`memberId=${members}&teamId=${students.id}`);
      await listAllTeams(code);
      await studentListAll(code);
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        await listAllTeams(code);
        await studentListAll(code);
      } catch (e) {
        alert(e);
      }
    };
    fetch();
  }, []);

  return (
    <Box>
      <Head>
        <Text>팀편성</Text>
        <LinkButton>
          <Link
            to={`/professor/class/${code}/team`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div>돌아가기</div>
          </Link>
        </LinkButton>
      </Head>

      <Cont>
        <Student>
          <ListText>학생목록</ListText>
          <SBox>
            <Form>
              {studentList.results.map((data) => {
                return (
                  <StudentBox>
                    <FormGroup>
                      <Label check>
                        <Input
                          type="checkbox"
                          checked={stud_studentCheck(data.id)}
                          name={data.id}
                          onChange={stud_checkboxChange}
                          style={{ marginRight: "5px" }}
                        />
                        {data.name}({data.grade}학년)
                      </Label>
                    </FormGroup>
                  </StudentBox>
                );
              })}
            </Form>
          </SBox>
          <AddArrow
            style={{ backgroundColor: "white" }}
            onClick={insertHandler}
          >
            <img
              src={require("../../../images/toRight.png").default}
              alt="rightArrow"
            ></img>
          </AddArrow>
        </Student>
        <RelatvieBox></RelatvieBox>
        <Team>
          <div>
            <ListText>팀목록</ListText>
            <Select onChange={teamClick} name="team" id="team">
              {teamList.results.map((data) => {
                return <option value={data.name}>TEAM {data.name}</option>;
              })}
            </Select>
          </div>
          <TBox>
            <Form>
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
                        </Label>
                      </FormGroup>
                    </TStudentBox>
                  );
                })}
            </Form>
          </TBox>
          <DelArrow
            style={{ backgroundColor: "white" }}
            onClick={deleteHandler}
          >
            <img
              src={require("../../../images/toLeft.png").default}
              alt="leftArrow"
            ></img>
          </DelArrow>
        </Team>
      </Cont>
    </Box>
  );
}

export default P07_05;
