import styled from "styled-components";
import { theme } from "../../styledComponents/globals";

export const Foot = styled.footer`
  margin-top: auto;
  background: ${theme.ink};
  color: ${theme.paper};
  padding: 40px ${theme.gutter};
  display: flex;
  flex-direction: column;
  gap: 48px;

  a {
    color: ${theme.paper};
  }

  a:hover {
    color: ${theme.footMuted};
  }
`;

export const FootFull = styled(Foot)`
  padding-top: 72px;
`;

export const CallToAction = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr));
  gap: 32px;
  align-items: end;
`;

export const BigLine = styled.h2`
  margin: 0;
  font-family: ${theme.serif};
  font-weight: 300;
  font-size: clamp(40px, 6vw, 88px);
  line-height: 0.95;
  letter-spacing: -0.02em;
`;

export const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 18px;

  a {
    align-self: flex-start;
    border-bottom: 1px solid ${theme.footLink};
    padding-bottom: 6px;
  }
`;

export const Bottom = styled.div<{ $ruled?: boolean }>`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${(p) => (p.$ruled ? theme.footMuted : theme.paper)};
  ${(p) => p.$ruled && `border-top: 1px solid ${theme.footLine}; padding-top: 20px;`}
`;
