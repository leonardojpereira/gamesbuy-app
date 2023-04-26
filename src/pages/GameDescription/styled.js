import styled from 'styled-components';

export const Container = styled.div`
background-color: #162f44;
  padding: 0px 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 180px;
`;


export const DescriptionContainer = styled.div`
  width: 100%;
  max-width: 900px;
  background-color: #001622;
  border-radius: 10px;
  margin-bottom: 50px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const GameImageContainer = styled.div`
  width: 100%;
  height: 350px;
  position: relative;

  @media (max-width: 500px) {
    height: 200px;
  }
`;

export const GameImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const GameDescriptionContainer = styled.div`
  padding: 0 25px 50px 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const GameInfo = styled.p`
  text-align: justify;
  font-size: 18px;
  line-height: 1.5;
  color: #fff;
`;

export const Released = styled.p`
  font-size: 18px;
  color: #fff;

`;

export const CriticScoreContainer = styled.div`
  font-size: 18px;
  color: #fff;
`;

export const Score = styled.span`
`;

export const GameWebsite = styled.a`
  text-decoration: none;
  color: #fff;
  background-color: rgb(0 61 199);

  padding: 10px 20px;
  border-radius: 5px;
  font-size: 18px;
  display: flex;
  align-items: center;
  transition:  0.3s ease-in-out;

  &:hover {
    background-color: rgb(46 93 199);
  }
`;

export const GameReddit = styled.a`
  text-decoration: none;
  color: #fff;
  background-color: #ff4500;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 18px;
  display: flex;
  align-items: center;
  transition:  0.3s ease-in-out;

  &:hover {
    background-color: rgb(255 105 49);
  }
`;
