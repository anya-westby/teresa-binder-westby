import styled from "styled-components";

export const Site = styled.div`
  width: 100%;
  // min-height: 100vh;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  position: relative;
  box-sizing: border-box;
`;

export const MainContent = styled.main`
  flex: 1;
  position: relative;
  z-index: 1;
`;

export const SiteOverflow = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 1;
  overflow: hidden;
`;
