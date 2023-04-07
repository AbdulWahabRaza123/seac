import styled from "styled-components";
export const Wrapper = styled.div`
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "")};
  width: ${(props) => (props.width ? props.width : "")};
  height: ${(props) => (props.height ? props.height : "")};
  border: ${(props) => (props.border ? props.border : "")};
  font-weight: ${(props) => (props.weight ? props.weight : "")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "")};
  background: ${(props) => (props.bg ? props.bg : "")};
  color: ${(props) => (props.fontColor ? props.fontColor : "")};
`;
