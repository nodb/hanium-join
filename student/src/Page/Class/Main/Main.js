import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Class from "../../../images/noclass.png";
import Line from "../../../images/line.png";
import ClassBox from "./ClassBox";
import Plus from "./Plus";
import ClassAdd from "./ClassAdd";
import { useClasses } from "../../../components/Use";
import { getDataFromStorage } from "../../../utils/storage";

const Box = styled.div`
  margin: 0 auto;
  width: 1440px;
  height: 650px;
  background: rgba(229, 229, 229, 0.6);
  border-radius: 30px;
  padding: 50px;
`;

const BoxClass = styled.div`
  width: 100%;
  height: 510px;
  display: flex;
  flex-wrap: wrap;
`;

const Circle = styled.div`
  width: 350px;
  height: 350px;
  background: #c4c4c4;
  border-radius: 300px;
  margin: 100px 0px 0px 500px;
`;

const ClassImg = styled.img`
  width: 200px;
  height: 200px;
  margin: 75px 0px 0px 75px;
`;

const LineImg = styled.img`
  width: 130px;
  height: 130px;
  margin: 0px 0px 0px 300px;
`;

const NoText = styled.div`
  width: 300px;
  height: 50px;
  font-family: Monoton;
  font-size: 20px;
  line-height: 31px;
  color: #7c7979;
  margin: 330px 0px 0px 180px;
`;

const Main = () => {
  const [Modal, setModalOpen] = useState(false);

  const ModalOpen = () => {
    setModalOpen(true);
  };

  const ModalClose = () => {
    setModalOpen(false);
  };

  const { classesList, listAllClasses } = useClasses();

  useEffect(() => {
    const fetch = async () => {
      try {
        const studentInfo = getDataFromStorage();
        await listAllClasses(studentInfo.id);
      } catch (e) {
        alert(e);
      }
    };

    fetch();
  }, []);

  return (
    <Box>
      <BoxClass>
        {classesList.count === 0 && (
          <>
            <div>
              <Circle>
                <ClassImg src={Class}></ClassImg>
              </Circle>
            </div>
            <div>
              <NoText>첫 수업에 참여해보세요.</NoText>
              <LineImg src={Line} />
            </div>
          </>
        )}
        {classesList.results.map((item) => {
          return <ClassBox key={item.name} item={item}></ClassBox>;
        })}
      </BoxClass>
      <Plus open={ModalOpen} />
      <ClassAdd open={Modal} close={ModalClose}></ClassAdd>
    </Box>
  );
};

export default Main;
