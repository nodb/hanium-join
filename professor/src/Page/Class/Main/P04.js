import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Class from "../../../images/noclass.png";
import Line from "../../../images/line.png";
import ClassBox from "./P04_ClassBox";
import Plus from "./P04_Plus";
import ClassAdd from "./P04_ClassAdd";
import { useClasses } from "../../../components/Use";
import { getDataFromStorage } from "../../../utils/storage";

const Box = styled.div`
  margin: 0 auto;
  width: 1440px;
  height: 600px;
  background: rgba(229, 229, 229, 0.6);
  border-radius: 30px;
`;

const Circle = styled.div`
  position: relative;
  top: 125px;
  left: 545px;
  width: 350px;
  height: 350px;
  background: #c4c4c4;
  border-radius: 300px; ;
`;

const ClassImg = styled.img`
  position: relative;
  top: 75px;
  left: 75px;
  width: 200px;
  height: 200px;
`;

const LineImg = styled.img`
  position: relative;
  top: 420px;
  left: 880px;
  width: 130px;
  height: 130px;
`;

const NoText = styled.div`
  position: relative;
  top: 370px;
  left: 600px;
  font-family: Monoton;
  font-size: 20px;
  line-height: 31px;
  color: #7c7979;
`;

function S04() {
  const [Modal, setModalOpen] = useState(false);
  const [next, setNext] = useState(false);

  const ModalOpen = () => {
    setModalOpen(true);
  };

  const NextModal = () => {
    setNext(true);
  };

  const ModalClose = () => {
    setModalOpen(false);
    setNext(false);
  };

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

  console.log(classesList);
  return (
    <Box>
      <div style={{ display: "inline-flex" }}>
        {classesList.count === 0 && (
          <>
            <Circle>
              <ClassImg src={Class}></ClassImg>
            </Circle>
            <LineImg src={Line} />
            <NoText>첫 번째 수업을 만들어 보세요.</NoText>
          </>
        )}
        {classesList.results.map((item) => {
          return (
            <Link
              to="/professor/class/enrol"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ClassBox item={item}></ClassBox>
            </Link>
          );
        })}
      </div>
      <Plus open={ModalOpen} />
      <ClassAdd
        open={Modal}
        next={next}
        add={NextModal}
        close={ModalClose}
      ></ClassAdd>
    </Box>
  );
}

export default S04;
