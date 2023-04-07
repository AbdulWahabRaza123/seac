import React from "react";
import { Input } from "../Common/Inputs";
import { Wrapper } from "../Common/Styled";
import { Button } from "../Common/Buttons";
import { Spacer } from "../Common/Spacer";
import TwitterIcon from "@mui/icons-material/Twitter";
import { H1, P } from "../Common/Typography";
const Form = () => {
  return (
    <>
      {/* <Wrapper className="d-flex flex-column align-items-center justify-content-center"> */}
      <H1 weight="500" color="black" className="text-center">
        Contact Us
      </H1>
      <Spacer height="40px" />
      <Wrapper
        width="100%"
        className="d-flex flex-row align-items-center justify-content-center"
      >
        <Wrapper
          width="450px"
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <Wrapper
            width="50%"
            className="d-flex flex-row align-items-center justify-content-between"
          >
            <Wrapper
              className="d-flex flex-column align-items-center justify-content-center"
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.open("https://twitter.com/", "_blank");
              }}
            >
              <TwitterIcon style={{ fontSize: "40px" }} />
              <p>Twitter</p>
            </Wrapper>
            <Wrapper
              className="d-flex flex-column align-items-center justify-content-center"
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.open("https://discord.com/", "_blank");
              }}
            >
              <img src="/discord.svg" alt="Discord" width="40px" />
              <p>Discord</p>
            </Wrapper>
          </Wrapper>
          {/* <Input
            className="form-control mt-1"
            type="text"
            border="1px solid gray"
            borderRadius="15px"
            placeholder="Enter Your Email"
          />
          <textarea
            className="form-control mt-3"
            placeholder="Your Message"
            row={7}
            column={100}
          /> */}
          {/* <Spacer height="30px" />
          <Wrapper className="d-flex flex-row align-items-center justify-content-end text-start">
            <Button
              style={{ cursor: "pointer" }}
              className="d-flex flex-row align-items-center justify-content-center"
              bg="#7a88ff"
            >
              Message
            </Button>
          </Wrapper> */}
        </Wrapper>
      </Wrapper>
    </>
  );
};

export default Form;
