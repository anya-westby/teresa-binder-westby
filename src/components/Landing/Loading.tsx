// components/Loading.tsx
import React from "react";
import styled from "styled-components";

const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #0f0f0f;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const Loading = () => (
  <LoadingWrapper>
    <span>loading</span>
  </LoadingWrapper>
);
