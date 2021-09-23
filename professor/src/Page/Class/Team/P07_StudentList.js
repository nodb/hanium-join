import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { useEnrolment, useTeams } from "../../../components/Use";
import { CTLoading, useLoading } from "../../../components";
import { useHistory, useParams } from "react-router-dom";
import RightArrow from "./RightArrow";
import { insertStudents } from "../../../remote/api/teamsApi";

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

function P07_StudnentList({students}){

  const { code } = useParams();
  
  const {studentList, studentListAll} = useEnrolment();
  const { insertStudentsApi } = useTeams();
  const { loading, setLoading } = useLoading(true);

  const [stud, setStud] = useState(
    []
  );

  const checkboxChange = (e) => {
    const {name, checked} = e.target;

    if(checked) {
      setStud([
        ...stud,
        {
          stud_id: name,
          team_id: students.id,
        },
      ]);
    } else {
      const newStud = stud.filter((data) => data.stud_id !== name);
      setStud(newStud);
    }
  }
  console.log(stud);
  
  const studentCheck = (id) => {
    let checked = [];
    checked = stud.filter((data) => data.stud_id === id);

    return checked.length === 1;
  }

  const history = useHistory();

  const insertHandler= async (e) => {
    const body = {
      memberId: stud.stud_id,
      teamId: stud.team_id,
    };  

    try {
      await insertStudentsApi(body);
      history.push(`/professor/class/${code}/assign`);
      console.log("클릭!");
    } catch(e){
      alert(e);
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

    useEffect(()=>{
      fetch();
    },[]);

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
                <FormGroup>
                  <Label check>    
                    <Input
                      type="checkbox"
                      checked={studentCheck(data.id)}
                      name={data.id}
                      onChange={checkboxChange}
                      style={{ marginRight: "5px" }}
                    />
                    {data.name}({data.grade}학년)
                  </Label>
                </FormGroup>
              </StudentBox>
            );
          })}
        </Form>
      </Box>
      <RightArrow onClick={insertHandler}/>
    </>)
  );
}

export default P07_StudnentList;
