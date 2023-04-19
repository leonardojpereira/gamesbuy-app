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
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0 18px;
  color: #fff;
  display: flex;
  cursor: pointer;

`;

export const WishListIcon = styled.span`
  margin-right: 6px;
  position: relative;
`;

export const Counter = styled.span`
  background-color: #38b6ff;
  border-radius: 50%;
  font-size: 11px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 20px;
  height: 20px;
  top: 48px;
  right: 48px;
`;
