import React,{useEffect} from "react";
import styled from "styled-components";
import { Form, FormGroup, Label, Input } from "reactstrap";
import {useTeams, useEnrolment} from "../../../components/Use";
import { useHistory, useParams } from "react-router-dom";
import { useLoading } from "../../../components";

const Box = styled.div`
  background: #FFFFFF;
  border: 2px solid #EF8F88;
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
  
  return (
    <>
      <Box>
      <Form>
        {students && students.team.map((student) => {
             return(
                <StudentBox>   
                <FormGroup>
                  <Label check>
                  <Input
                        type="checkbox"
                        name={student.id}
                        // onChange={checkStudent}
                      /> &nbsp;
                      {student.name}({student.grade}학년)
                  </Label>
                </FormGroup>
              </StudentBox>
                   )
           })}  
        </Form>
      </Box>

    </>
    
  );
}

export default P07_TeamList;
