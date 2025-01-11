import styled from "styled-components";

export const Site = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;

  // margin: 0;
  // padding: 0;
  // overflow-x: hidden;
  // box-sizing: border-box;
`;

export const SiteOverflow = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 1;
  overflow: hidden;
  // margin: 0;
  // padding: 0;
`;
