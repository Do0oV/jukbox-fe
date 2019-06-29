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


export const Song = styled.div`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 16px;
  font-weight: bold;
  color: var(--secondary-color);
`;

export const Artist = styled.div`
  text-transform: uppercase;
  font-size: 14px;
  color: var(--primary-bg-color);
`;