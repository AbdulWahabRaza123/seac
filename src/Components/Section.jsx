import React from "react";
import { Wrapper } from "../Common/Styled";
import { Container } from "react-bootstrap";
import { Spacer } from "../Common/Spacer";
import { H1, P } from "../Common/Typography";
import { Button } from "../Common/Buttons";
import Lottie from "react-lottie";
import animationData from "../assets/section1.json";
import { useMediaQuery } from "react-responsive";
const Section = (props) => {
  const isResponsive = useMediaQuery({ query: "(max-width: 743px)" });
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Wrapper width="100%">
        <Container>
          <Spacer height="80px" />
          <Wrapper className="d-flex flex-row align-items-center justify-content-center">
            <Wrapper
              id={props.id}
              className="d-flex flex-row align-items-center justify-content-justify-around"
            >
              {/* {props.mode == "left" ? ( */}
              <>
                {props.mode === "right" ? (
                  <img
                    src={props.src}
                    alt="Section1"
                    width="30%"
                    height="auto"
                  />
                ) : null}
                <Wrapper
                  className={`d-flex flex-column ${
                    props.mode === "right" ? "align-items-end text-end" : ""
                  }`}
                  width={isResponsive ? "100%" : "80%"}
                >
                  {props?.title ? (
                    <Wrapper width={isResponsive ? "100%" : "70%"}>
                      <H1
                        color="#301934"
                        weight="600"
                        fontSize={isResponsive ? "21px" : "31px"}
                      >
                        {props.title}
                      </H1>
                    </Wrapper>
                  ) : null}
                  {props?.desc ? (
                    <>
                      <Wrapper
                        width={
                          props.section === "2"
                            ? "70%"
                            : isResponsive
                            ? "100%"
                            : "70%"
                        }
                        className="mt-2"
                      >
                        <P color="black" weight="500">
                          {props.desc}
                        </P>
                      </Wrapper>
                    </>
                  ) : null}

                  <Wrapper className="d-flex flex-row align-items-center mt-4 pt-2">
                    {props.section !== "2" ? (
                      <>
                        <Button
                          width="auto"
                          style={{ whiteSpace: "no-wrap", cursor: "pointer" }}
                          className="d-flex flex-row align-items-center justify-content-center ps-3 pe-3"
                          bg="#7A88FF"
                        >
                          Learn More
                        </Button>
                      </>
                    ) : null}
                    {props.section === "1" ? (
                      <Button
                        width="auto"
                        style={{ whiteSpace: "no-wrap" }}
                        className="d-flex flex-row align-items-center justify-content-center ms-3  ps-3 pe-3"
                        bg="#433582"
                      >
                        Download App
                      </Button>
                    ) : null}
                  </Wrapper>
                </Wrapper>
                {props.mode === "left" ? (
                  props.section === "1" ? (
                    isResponsive ? (
                      <></>
                    ) : (
                      <>
                        <Lottie
                          options={defaultOptions}
                          height={"auto"}
                          width={"30%"}
                        />
                      </>
                    )
                  ) : (
                    <>
                      <img
                        src={props.src}
                        alt="Section1"
                        width="30%"
                        height="auto"
                      />
                    </>
                  )
                ) : null}
              </>
            </Wrapper>
          </Wrapper>
        </Container>
      </Wrapper>
    </>
  );
};

export default Section;
