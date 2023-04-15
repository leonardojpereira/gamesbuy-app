import styled from 'styled-components';

export const Container = styled.div`
`;

export const Title = styled.h2`
    text-align: center;
    color: #FFF;
    font-size: 42px;
    text-transform: uppercase;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 30px auto;
  max-width: 1200px;
  background-color: #001622;
  height: fit-content;
  padding: 20px;
  border-radius: 8px;
  border: 3px solid #fff;
`;

export const GameImageContainer = styled.div`
  width: 50%;
  margin-right: 40px;
`;

export const GameImage = styled.img`
  width: 100%;
  object-fit: cover;
  min-height: 500px;
  border-radius: 8px;
  border: 3px solid #fff;
`;

export const GameDescriptionContainer = styled.div`
  width: 50%;
  font-family: Arial, sans-serif;
  font-size: 18px;
  color: #fff;
  gap: 10px;
`;

export const GameTitle = styled.h2`
  font-size: 28px;
  margin-top: 0;
  margin-bottom: 20px;
  text-transform: capitalize;
  background-image: linear-gradient(to right, #2b6cff, #77d9ffd1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const GameInfo = styled.p`
  text-align: justify;
  margin-bottom: 20px;
`;

export const Released = styled.p`
`;

export const CriticScore = styled.p`
`;

export const GameWebsite = styled.a`
    text-decoration: none;
    color: #fff;
    display: flex;
    margin-bottom: 10px;
`;

export const GameReddit = styled.a`
    text-decoration: none;
    color: #fff;
    display: flex;

`;

export const LoadingMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: #fff;
`;