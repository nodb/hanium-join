import React,{useEffect, useState} from "react";
import styled from "styled-components";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { useTeams } from "../../../components/Use";
import { useHistory, useParams } from "react-router-dom";

const Arrow = styled.button`
  margin-bottom: 25px;
  margin-left: 35px;
  width: 130px;
  height: 35px;
  background: #FFFFFF;
  border: 1px solid #000000;
  box-sizing: border-box;
  img{
    text-align: center;
    margin-left: 50px;
    width: 25px;
    height: 25px;
    margin-top: 4px;
  }
  cursor: pointer;
`

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

  const { code } = useParams();

  const { deleteStudentsApi } = useTeams();

  const [stud, setStud] = useState(
    []
  );

  const checkboxChange = (e) => {
    const {name, checked} = e.target;

    if(checked) {
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
  }


  console.log(stud);
  
  const studentCheck = (id) => {
    let checked = [];
    checked = stud.filter((data) => data.memberId === id);

    return checked.length === 1;
  }

  const history = useHistory();
  
  const deleteHandler= async (e) => {
    try {
      await deleteStudentsApi(`memberId=${stud[0].memberId}&teamId=${students.id}`);
      console.log();
      history.push(`/professor/class/${code}/assign`);
    } catch(e){
      alert(e);
    }
  }
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
                        checked={studentCheck(student.name)}
                        name={student.name}
                        onChange={checkboxChange}
                      /> &nbsp;
                      {student.name}({student.grade}학년)
                  </Label>
                </FormGroup>
              </StudentBox>
                   )
           })}  
        </Form>
      </Box>
      <Arrow style={{ backgroundColor: "white" }} onClick={deleteHandler}> 
        <img
          src={require("../../../images/toLeft.png").default}
          alt="leftArrow"
        ></img>
      </Arrow>

    </>
    
    )
}

export default P07_TeamList;
