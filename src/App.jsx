import React from "react";
import NavbarComp from "./Components/Navbar";
import Section from "./Components/Section";
import Timer from "./Components/Timer/Timer";
import Section1Img from "./assets/section1.svg";
import Form from "./Components/Form";
import { Spacer } from "./Common/Spacer";
import Footer from "./Components/Footer";
const data = [
  {
    title: "Secure, Anonymous and Encrypted on-chain chat network",
    desc: "A secure, anonymous, and encrypted on-chain chat network provides a private and safe platform for communication using blockchain technology.",
    src: { Section1Img },
  },
  {
    title: null,
    desc: "A secure, anonymous, and encrypted on-chain chat network allows users to communicate privately and safely using blockchain technology, ensuring that messages are secure, anonymous, and cannot be tampered with.",
    src: "/about.png",
  },
];
const App = () => {
  return (
    <>
      <NavbarComp />
      <Section
        id="home"
        title={data[0].title}
        desc={data[0].desc}
        src={data[0].src}
        mode="left"
        section="1"
      />
      <Timer />
      <Section
        id="about"
        mode="right"
        section="2"
        src={data[1].src}
        title={data[1].title}
        desc={data[1].desc}
      />
      <Form />
      <Spacer height="70px" />
      <Footer />
    </>
  );
};

export default App;
