import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const NoGameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  flex-direction: column;
  gap: 20px;
  height: 30vh;
  font-style: italic;
`;

export const NoGameMessage = styled.span`
  font-size: 28px;
`;


export const GameName = styled.strong`
  color: #fff;
  font-size: 24px;
`;

export const BtnGames = styled.button`
background: #38b6ff;
color: #fff;
border: none;
padding: 8px 28px;
font-size: 18px;
border-radius: 12px;
cursor: pointer;
`;


export const GameContainer = styled.div`
  margin-bottom: 40px;
  color: #fff;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 700px;
  max-height: 150px;
  background-color: #001622;
  border-radius: 8px;
`;

export const GameImage = styled.img`
  height: 100%;
  width: 40%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const GameInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 60%;
  gap: 18px;
  position: relative;
`;

export const GameInfoBtn = styled.button`
  background: #162f44;
  color: #fff;
  border: none;
  padding: 8px 32px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: ease 0.4s;

  &:hover {
    opacity: 0.8;
  }
`;

export const DeleteGameBtn = styled.button`
  border: none;
  background: none;
  position: absolute;
  bottom: 6px;
  right: 10px;
  cursor: pointer;
`;