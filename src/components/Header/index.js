import { useSelector } from "react-redux";
import { BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/image/logo.png";
import {
  HeaderContainer,
  LogoContainer,
  LogoImage,
  NavContainer,
  UlContainer,
  ItemList,
  WishListIcon,
  Counter,
} from "./style";

export default function Header() {

  const wishListAmount = useSelector(state => state.wishlist.length);

  return (
    <HeaderContainer>
      <Link to="/" style={{ textDecoration: "none" }}>
        <LogoContainer>
          <LogoImage src={LogoImg} alt="Logo" />
        </LogoContainer>
      </Link>
      <NavContainer>
        <UlContainer>
          <Link to="/wishlist" style={{ textDecoration: "none" }}>
            <ItemList>
              <WishListIcon>
                <BsStarFill />
              </WishListIcon>{" "}
              Lista de Desejos
              <Counter>{wishListAmount}</Counter>
            </ItemList>
          </Link>
        </UlContainer>
      </NavContainer>
    </HeaderContainer>
  );
}
