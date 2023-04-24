import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 22px;
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
  
  @media (max-width: 768px) {
    height: 50vh;
    text-align: center;
  }
`;

export const NoGameMessage = styled.span`
  font-size: 28px;

  @media (max-width: 768px) {
   font-size: 22px;
  }
`;

export const BtnGames = styled.button`
  background: #38b6ff;
  color: #fff;
  border: none;
  padding: 8px 28px;
  font-size: 18px;
  border-radius: 8px;
  cursor: pointer;
  
  @media (max-width: 768px) {
    padding: 8px 20px;
    font-size: 16px;
  }
`;

export const GameName = styled.strong`
  color: #fff;
  font-size: 24px;

    @media (max-width: 768px) {
    font-size: 16px;
  }
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
  object-fit: cover;
  object-position: top;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  
  @media (max-width: 768px) {
    width: 30%;
  }
`;

export const GameInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 60%;
  gap: 18px;
  position: relative;
  
  @media (max-width: 768px) {
    content: 'Saber mais';
    width: 70%;
    padding: 32px 0;
  }
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
  
  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

export const DeleteGameBtn = styled.button`
  font-size: 24px;
  border: none;
  background: none;
  position: absolute;
  bottom: 6px;
  right: 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

