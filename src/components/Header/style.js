import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  padding: 0 22px;
  justify-content: space-between;
  align-items: center;
  background: #001622;
  border-bottom: #38b6ff solid 2px;
`;

export const LogoContainer = styled.div`
  width: 150px;
  height: 150px;
`;

export const LogoImage = styled.img`
  width: 100%;
  border-radius: 50%;
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UlContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemList = styled.li`
  list-style: none;
  margin: 0 18px;
  color: #fff;
  display: flex;
  cursor: pointer;
`;

export const WishListIcon = styled.span`
  color: yellow;
  margin-right: 6px;
`;

export const Counter = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  background-color: #38b6ff;
  border-radius: 50%;
  margin-right: 5px;
  text-align: center;
  margin-left: 6px;
  font-size: 14px;
`;
