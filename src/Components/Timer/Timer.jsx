import React, { useState, useEffect } from "react";
import { Wrapper } from "../../Common/Styled";
import { Container } from "react-bootstrap";
import { Spacer } from "../../Common/Spacer";
import { H1, P } from "../../Common/Typography";
import { calculateTimeLeft } from "../../utils/timeUtils";
import "./style.scss";
const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
  }, [timeLeft]);
  return (
    <>
      <Container>
        <Spacer height="70px" />
        <Wrapper className="d-flex flex-column align-items-center justify-content-center">
          <H1 weight="500" color="black" className="text-center">
            Launching soon
          </H1>
          <P color="gray" fontSize="14px" className="mt-2">
            Free NFT Collection launching on 14 April
          </P>
          <Spacer height="10px" />
        </Wrapper>
        <Wrapper className="d-flex flex-row align-items-center justify-content-center mt-5 mb-5">
          <Wrapper>
            <div className="counter">
              <Wrapper className="counter-item">
                <span
                  className="value"
                  style={{
                    borderBottomLeftRadius: "15px",
                    borderBottomRightRadius: "15px",
                    borderBottom: "1px solid white",
                  }}
                >
                  {String(timeLeft.days).padStart(2, "0")}
                </span>
                <span
                  className="label"
                  style={{
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                  }}
                >
                  Days
                </span>
              </Wrapper>

              <div className="counter-item">
                <span
                  className="value"
                  style={{
                    borderBottomLeftRadius: "15px",
                    borderBottomRightRadius: "15px",
                    borderBottom: "1px solid white",
                  }}
                >
                  {String(timeLeft.hours).padStart(2, "0")}
                </span>
                <span
                  className="label"
                  style={{
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                  }}
                >
                  Hours
                </span>
              </div>

              <div className="counter-item">
                <span
                  className="value"
                  style={{
                    borderBottomLeftRadius: "15px",
                    borderBottomRightRadius: "15px",
                    borderBottom: "1px solid white",
                  }}
                >
                  {String(timeLeft.minutes).padStart(2, "0")}
                </span>
                <span
                  className="label"
                  style={{
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                  }}
                >
                  Minutes
                </span>
              </div>

              <div className="counter-item">
                <span
                  className="value"
                  style={{
                    borderBottomLeftRadius: "15px",
                    borderBottomRightRadius: "15px",
                    borderBottom: "1px solid white",
                  }}
                >
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
                <span
                  className="label"
                  style={{
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                  }}
                >
                  Seconds
                </span>
              </div>
            </div>
          </Wrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default Timer;
