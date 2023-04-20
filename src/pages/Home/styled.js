import styled from 'styled-components';

export const HomeContainer = styled.div`
     text-align: center;
`;

export const Title = styled.h1`
  font-family: 'Helvetica Neue', sans-serif;
    font-size: 3rem;
    font-weight: bold;
    color: #fff;
    text-align: center;
    background-image: linear-gradient(to right, #2b6cff, #77d9ffd1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 1rem;
`;

export const SearchForm = styled.form`
    display: flex;
    justify-content: center;
    max-width: 700px;
    height: 60px;
    margin: 2rem auto;
`;

export const SearchInput = styled.input`
  padding: 0 8px;
    border: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    font-size: 1rem;
    width: 100%;
    outline: none;
    border-radius: 8px;
`;

export const Box = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const NoGamesMessage = styled.div`
  font-size: 32px;
    color: #fff;
    font-style: italic;
`;

export const GameContainer = styled.li`
  margin: 10px;
  max-width: 500px;
  list-style: none;
  text-decoration: none;
  position: relative;
`;

export const GameBanner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  display: block;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  &:hover {
    filter: brightness(40%);
  }
`;

export const GameTextOverlay = styled.span`
  font-size: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  z-index: 1;
  display: none;
  cursor: pointer;
`;

export const GameBannerContainer = styled.div`
  height: calc(100% - 60px);
  position: relative;
  &:hover ${GameBanner} {
    filter: brightness(40%);
  }
  &:hover ${GameTextOverlay} {
    display: block;
    opacity: 1;
  }
`;

export const GameInfoContainer = styled.div`
  display: flex;
    justify-content: space-between;
    padding: 0 16px;
    align-items: center;
    min-height: 55px;
    background-color: #38B6FF;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
`;

export const GameName = styled.span`
  display: block;
    font-size: 18px;
    font-weight: bold;
    color: #FFF;
    text-transform: capitalize;
    width: 100%;
`;

export const WishListBtn = styled.span`
 display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    font-size: 22px;
    color: yellow;
    cursor: pointer;
`;
