import styled from 'styled-components';

export const Container = styled.div`
background-color: #162f44;
  padding: 0px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  text-align: center;
  color: #fff;
  font-size: 36px;
  text-transform: uppercase;
  margin-bottom: 50px;
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
  height: 500px;
  position: relative;
`;

export const GameImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
`;

export const GameTitle = styled.h2`
  font-size: 36px;
  text-transform: capitalize;
  color: #222;
  background-image: linear-gradient(to right, #2b6cff, #77d9ffd1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const GameInfo = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: #555;
  color: #fff;
`;

export const Released = styled.p`
  font-size: 18px;
  color: #fff;
`;

export const CriticScore = styled.p`
  font-size: 18px;
  color: #fff;
`;

export const GameWebsite = styled.a`
  text-decoration: none;
  color: #fff;
  background-color: #2b6cff;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 18px;
  display: flex;
  align-items: center;
  margin: 15px 0 20px 0;
  transition:  0.3s ease-in-out;

  &:hover {
    opacity: 0.6;
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
  align-items: center
  transition:  0.3s ease-in-out;

  &:hover {
    opacity: 0.6;
  }
`;
