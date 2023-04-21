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

export const BtnGames = styled.button`
background: #38b6ff;
color: #fff;
border: none;
padding: 10px 36px;
font-size: 18px;
border-radius: 12px;
cursor: pointer;
`;


export const GameName = styled.strong`
  color: #fff;
  margin-top: 4rem;
  font-size: 26px;
`;

export const GameContainer = styled.div`
  margin-bottom: 40px;
  color: #fff;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 900px;
  background-color: #001622;
  border-radius: 8px;
  max-height: 250px;
`;

export const GameImage = styled.img`
  height: 100%;
  width: 50%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const GameInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  gap: 42px;
  position: relative;
`;

export const GameInfoBtn = styled.button`
  background: #162f44;
  color: #fff;
  border: none;
  padding: 12px 42px;
  font-size: 18px;
  border-radius: 12px;
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