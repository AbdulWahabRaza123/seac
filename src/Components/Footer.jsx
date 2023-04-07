import React from "react";
import { Wrapper } from "../Common/Styled";
import { P } from "../Common/Typography";
const Footer = () => {
  return (
    <>
      <Wrapper
        width="100%"
        height="50px"
        className="d-flex flex-row align-items-center justify-content-center"
        bg="black"
      >
        <P color="white" className="mb-0">
          © Copyright 2023 – seac
        </P>
      </Wrapper>
    </>
  );
};

export default Footer;
