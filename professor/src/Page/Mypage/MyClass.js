import React, {useEffect} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useClasses } from "../../components/Use";
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

const ClassText = styled.div`
  font-size: 20px;
  padding-left: 30px;

  font-family: Roboto;
font-style: normal;
font-weight: bold;
line-height: 23px;

color: #000000;

hr{
  width: 374.01px;
height: 0px;
left: 331px;
margin-top: 0px;
border: 1px solid #EF8F88;
margin-bottom: 20px;
}
`;

const classes = [
  {
    id: 1,
    name: "시스템 프로그래밍",
    code: "000001",
  },
  {
    id: 2,
    name: "컴퓨터 네트워크",
    code: "000002",
  },
  {
    id: 3,
    name: "소프트웨어 공학",
    code: "000003",
  },
];

function MyClass() {

  const { classesList, listAllClasses } = useClasses();

  useEffect(() => {
    const fetch = async () => {
      try {
        const professorInfo = getDataFromStorage();
        await listAllClasses(professorInfo.id);
      } catch (e) {
        alert(e);
      }
    };

    fetch();
  }, []);

  return (
    <Box>
    <Page>
      강의 과목
    </Page>
    <Hr />
      <IntroText>강의를 클릭하면 해당 페이지로 이동합니다.</IntroText> <br />
      {classesList.results.map((item) => {
        return (
          <ClassText>
            <Link
        to="/professor/class/enrol"
        style={{ textDecoration: "none", color: "inherit" }}
      >
                <img src={require("../../images/Pencil.png").default} alt="수업"/>
                {item.name} ({item.code})
                <hr />
                </Link>
          </ClassText>
        )
      })}
      {/* {classes &&
        classes.map((item) => {
          return (
            <Link
              to="/professor/class/enrol"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ClassText>
                <img src={require("../../images/Pencil.png").default} alt="수업"/>
                {item.name}, 수업코드 : {item.code}
                <hr />
              </ClassText>
            </Link>
          );
        })} */}
    </Box>
  );
}

export default MyClass;
