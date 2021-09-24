import React, { useEffect } from "react"
import styled from "styled-components";
import ReportItem from "./ReportItem";
import { useReport } from "../../../components/Use";
import { CTLoading, useLoading } from "../../../components";

const Box = styled.div`
  width: 80%;
`;
const Text = styled.div`
  font-family: "Nanum Gothic", sans-serif;
  font-size: 20px;
  font-weight: 900;
  width: 150px;
  padding-top: 20px;
  padding-bottom: 20px;
`;
const testData = [
    {
        "name":"과제1",
        "team": "팀1",
        "file": "report.pdf",
    },
    {
        "name":"과제2",
        "team": "팀1",
        "file": "report.pdf",
    },
    {
        "name":"과제2",
        "team": "팀1",
        "file": "report.pdf",
    }
];

const Report = ({ match }) => {
  const { reportList, listAllByProf } = useReport();

  const { loading, setLoading } = useLoading(true);

  const code = match.params.code;

  const fetch = async () => {
      try {
          await listAllByProf(code);
      } catch (e) {
          alert(e);
      } finally {
          await setLoading(false);
      }
      console.log(reportList);
  }

  useEffect(() => {
      fetch();
  },[]);
  return (
      loading ? (
          <CTLoading />
      ) : (
      <Box>
            <Text>리포트 확인</Text>
            {
                reportList.results.map(item=>{return(<ReportItem item={item}/>)})
            }
      </Box>
      )
  );
};

export default Report;
