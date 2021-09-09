import React, { useEffect } from "react";
import styled from "styled-components";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { useEnrolment } from "../../../components/Use";
import { CTLoading, useLoading } from "../../../components";
import { useHistory, useParams } from "react-router-dom";

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
  
  const history = useHistory();
  const { code } = useParams();
    
  const {studentList, studentListAll} = useEnrolment();
  const { loading, setLoading } = useLoading(true);
  
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
  },[])

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
                      id={data.id}
                      onClick={() => onToggle(data.id)}
                    />
                    {data.name}({data.grade}학년)
                  </Label>
                </FormGroup>
              </StudentBox>
            );
          })}
        </Form>
      </Box>
    </>)
  );
}

export default P07_StudnentList;
