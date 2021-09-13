import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { useEnrolment, useTeams } from "../../../components/Use";
import { CTLoading, useLoading } from "../../../components";
import { useHistory, useParams } from "react-router-dom";
import RightArrow from "./RightArrow";

const StudentBox = styled.div`
  width: 180px;
  font-size: 18px;
  margin-bottom: 10px;
`;

const Box = styled.div`
  width: 400px;
  height: 626px;
  overflow: scroll;
  flex-wrap: wrap;
  padding: 30px 50px 30px;
  position: relative;
  background: #FFFFFF;
border: 2px solid #6F91B5;
box-sizing: border-box;
margin-top: 20px;
`;

const RelatvieBox = styled.div`
  width: 200px;
  position: relative;
  left: 465px;
  bottom: 350px;
`;

const P07_StudnentList = () => {

  const { code } = useParams();
  
  const {studentList, studentListAll} = useEnrolment();
  const {createTeamApi} = useTeams();
  const { loading, setLoading } = useLoading(true);

  const [students, setStudents] = useState([]);

  const checkStudent = (e) => {
    setStudents({
      ...students,
      [e.target.name]: e.target.checked,
    })
  }

  const createTeamHandler = async () => {
    const student = [];
    const keys = Object.keys(students);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const value = students[key];
      if (value === true) team.push(key);
    }

    const formData = new formData();
    formData.append("id", student.id);
    formData.append("name", student.name);
    formData.append("classCode",{code});
    try{
      await createTeamApi(formData);
      history.push(`/professor/class/${code}/assign`);
    } catch (e) {
      alert(e)
    }
  }

  const fetch = async() => {
    try{
      await studentListAll(code);
    }catch(e){
      alert(e);
    }finally{
      await setLoading(false);
    }
  }

  useEffect(()=> {
    fetch();
    }
,[]);

  return (
    loading ? (
      <CTLoading />
    ) : (
    <>
      <Box>
        <Form>
          {studentList.results.map((data) => {
            return (
              <StudentBox>
                <FormGroup check inline key={data.id}>
                  <Label check>
                    <Input
                      type="checkbox"
                      name={data.id}
                      // onChange={checkStudent()}
                    />
                    {data.name}({data.grade}학년)
                  </Label>
                </FormGroup>
              </StudentBox>
            );
          })}
        </Form>
      </Box>
      <RightArrow onClick={createTeamHandler}/>
    </>)
  );
}

export default P07_StudnentList;
