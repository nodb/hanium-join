import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  margin-top: 1rem;
  padding-top: 0.6rem;
  padding-bottom: 0.5rem;
  background: white;
  border: gray 1px solid;
  width: 520px;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 500;
  cursor: pointer;
  user-select: none;
  transition: 0.2s all;
`;

const RegisterButton = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
);

<<<<<<< HEAD
export default RegisterButton;
=======
export default RegisterButton;
>>>>>>> 3eb3fac170c5980ada387928f12e91ed9e75d89d
