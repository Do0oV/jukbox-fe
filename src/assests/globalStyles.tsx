import styled from 'styled-components';

export const BigLogo = styled.h1`
  color: var(--primary-color);
  font-size: 34px;
  letter-spacing: 10px;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 20px;
  text-transform: uppercase;

  @media(min-width: 800px) {
    font-size: 48px;
    letter-spacing: 15px;
  }
`;

export const SmallLogo = styled.h1`
  color: var(--primary-color);
  font-size: 20px;
  letter-spacing: 6px;
  margin: 0;
  text-transform: uppercase;

  @media(min-width: 800px) {
    font-size: 24px;
    letter-spacing: 8px;
  }
`;

export const CenteredContent = styled.div`
  display: flex
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Song = styled.div`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 16px;
  font-weight: bold;
  color: var(--secondary-color);
  text-align: left;
  margin: 0 20px;
`;

export const Artist = styled.div`
  text-transform: uppercase;
  font-size: 14px;
  color: var(--primary-bg-color);
  text-align: left;
  margin: 0 20px;
`;

export const Button = styled.button`
  border-radius: 30px;
  border: none;
  padding: 5px 15px;
  letter-spacing: 2px;
  border: 1px solid transparent;
  text-transform: uppercase;
  font-size: 10px;
  transition: 0.5s;

  @media(min-width: 800px) {
    font-size: 14px;
  }

  &:hover {
    outline: none;
  }

  &:focus {
    outline: none;
  }
`;

export const ListItem = styled.div`
  margin: 3px 10px 0 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MutedButton = styled(Button)`
  font-size: 10px;
  color: var(--fourth-color);
  margin-top: 15px;
  background-color: var(--primary-bg-color);
  min-width: 150px;
  positive: relative;
  display: inline-block;
  cursor: pointer;
  border-radius: 0;
  &:hover {
    border: 1px solid var(--fourth-color);
    border-radius: 30px;
  }
`;

export const AccountName = styled.div`
  font-weight: 700;
  letter-spacing: 1px;
  color: var(--fourth-color);
  background-color: rgb(31, 30, 33);
  padding: 5px 15px;
  border-radius: 40px;
  position: relative;
  top: -10px;
`;