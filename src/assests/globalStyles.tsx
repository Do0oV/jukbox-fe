import styled from 'styled-components';

export const BigLogo = styled.h1`
  color: var(--primary-color);
  font-size: 34px;
  letter-spacing: 10px;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 20px;
`;


export const SmallLogo = styled.h1`
  color: var(--primary-color);
  font-size: 20px;
  letter-spacing: 6px;
  margin: 0;
`;


export const CenteredContent = styled.div`
  display: flex
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;