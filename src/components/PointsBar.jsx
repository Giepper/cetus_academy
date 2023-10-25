import styled from "styled-components";

export const PointsBar = styled.div`
  width: ${(props) => props.width}%;
  height: 40px;
  position: relative;
  background-color: green;
  transition-property: width;
  transition-duration: 1s;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
`;