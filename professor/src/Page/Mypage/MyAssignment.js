import React,{useEffect} from "react";
import { Table } from "reactstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAssignments } from "../../components";
import { getDataFromStorage } from "../../utils/storage";


const Box = styled.div`
`;

const Page = styled.div`
color: #3D3D3D;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 20px;
margin-top: 27px;
`;

const Hr = styled.hr`
width: 1032px;
height: 0px;
border: 4px solid #C4C4C4;
`

const IntroText = styled.div`
  padding-left: 30px;
  color: #EF8F88;

  font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 18px;
`;

const Assignment = styled.div`

table{
  border-color: #EF8F88;
}

thead th{
  font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 17px;
line-height: 20px;
padding-bottom: 10px;
color: #686868;
text-align: center;
}

tbody th{
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  padding-bottom: 10px;
  color: #EF8F88;
  padding-top:11px;
  text-align: center;
}

td{
  font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 17px;
line-height: 20px;
padding-top:11px;
color: #000000;
text-align: center;
}
`

const MyAssignment = () => {

  const { assignmentsTotal, listAllMyAssignments } = useAssignments();

  useEffect(()=> {
    const fetch = async () => {
  try{
        const professor = getDataFromStorage();
        await listAllMyAssignments(professor.id);
      } catch(err){
        console.log(err);
      }   
  }
  fetch();
},[])

  return (
    <Box>
      <Page>
        과제 제출함
      </Page>
      <Hr />
      <IntroText>내용을 클릭하면 해당페이지로 이동합니다.</IntroText> <br />
      
      <Assignment>
      <Table size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>과목</th>
            <th>내용</th>
            <th>과제 등록일</th>
            <th>과제 마감일</th>
          </tr>
        </thead>
        <tbody>
          {assignmentsTotal.count === 0 && (
            <>

            </>
          )}
          {assignmentsTotal.results.map((item) => {
              return (
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>과목</td>
                  <td>{item.name}</td>
                  <td>{item.startDate}</td>
                  <td>{item.endDate}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      </Assignment>
    </Box>
  );
};

export default MyAssignment;
