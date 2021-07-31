import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ClassBox from "./P04_ClassBox";
import Plus from "./P04_Plus";
import ClassAdd from "./P04_ClassAdd";

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

const Box = styled.div`
  margin: 0 auto;
  width: 1200px;
  padding-top: 100px;
  height: 600px;
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

  return (
    <Box>
      <div style={{ display: "inline-flex" }}>
        {item.map((item) => {
          return (
            <Link
<<<<<<< HEAD
              to="/class/enrol"
=======
              to="/professor/class/enrol"
>>>>>>> 3eb3fac170c5980ada387928f12e91ed9e75d89d
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
