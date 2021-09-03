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
<<<<<<< HEAD

const item = [
  {
    id: 1,
    color: "Blue.jpg",
    className: "생명과학1",
  },
  {
    id: 2,
    color: "Yellow.jpg",
    className: "미적분1",
  },
  {
    id: 3,
    color: "pink.jpeg",
    className: "기하와 벡터",
  },
  {
    id: 3,
    color: "LightGreen.jpg",
    className: "물리1",
  },
];
=======
>>>>>>> 8961fbfad117639409735673a72efe8e15a342e5

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
  height: 50px;
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

<<<<<<< HEAD
  return (
    <Box>
      <div style={{ display: "inline-flex" }}>
=======
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
>>>>>>> 8961fbfad117639409735673a72efe8e15a342e5
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
