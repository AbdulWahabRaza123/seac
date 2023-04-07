import styled from "styled-components";
export const Button = styled.div`
  font-style: normal;
  font-weight: 400;
  text-align: center;
  text-transform: none;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  height: ${(props) => (props.height ? props.height : "40px")};
  color: ${(props) => (props.fontColor ? props.fontColor : "white")};
  width: ${(props) => (props.width ? props.width : "120px")};
  line-height: ${(props) => (props.lh ? props.lh : "auto")};
  margin-top: ${(props) => (props.mt ? props.mt : "0px")};
  padding: ${(props) => (props.padding ? props.padding : "0px")};
  // border-radius: 20px;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "25px"};
  border: ${(props) => (props.border ? props.border : "none")};
  background: ${(props) =>
    props.bg ? props.bg : "linear-gradient(#F6E9FC,#433582, #4258B3)"};
  &:hover {
    background: ${(props) =>
      (props.bg ? props.bg : "linear-gradient(#F6E9FC,#433582, #4258B3)") +
      " !important"};
  }
`;
