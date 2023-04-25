import styled from 'styled-components';

export const HomeContainer = styled.div`
     text-align: center;
     margin: 0 60px;
     padding-bottom: 180px;

     @media screen and (max-width: 900px) {
        margin: 0 22px;
    }
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
  max-height: 300px;
  list-style: none;
  text-decoration: none;
  position: relative;

  @media screen and (max-width: 380px) {
      height: 300px;
    }
`;

export const GameBanner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
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
  font-size: 18px;
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

    @media screen and (max-width: 380px) {
      font-size: 16px;
    }
`;

export const WishListBtn = styled.span`
 display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    font-size: 22px;
    color: yellow;
    cursor: pointer;

    @media screen and (max-width: 380px) {
      font-size: 20px;
    }
`;
