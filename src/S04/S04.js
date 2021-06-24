import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ClassBox from "./S04_ClassBox";
import Plus from "./S04_Plus";
import ClassAdd from "./S04_ClassAdd";

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

  const ModalOpen = () => {
    setModalOpen(true);
  };

  const ModalClose = () => {
    setModalOpen(false);
  };

  return (
    <Box>
      <div style={{ display: "inline-flex" }}>
        {item.map((item) => {
          return (
            <Link
              to="/class"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ClassBox item={item}></ClassBox>
            </Link>
          );
        })}
      </div>
      <Plus open={ModalOpen} />
      <ClassAdd open={Modal} close={ModalClose}></ClassAdd>
    </Box>
  );
}

export default S04;
