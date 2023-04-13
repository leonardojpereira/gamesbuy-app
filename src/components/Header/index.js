import { FaShoppingCart } from "react-icons/fa";
import { TbJewishStarFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import LogoImg from '../../assets/image/logo.png';
import "./style.css";

export default function Header() {
  return (
    <header className="HeaderContainer">
        <Link to='/' style={{textDecoration: 'none'}}>
        <div className="LogoContainer">
        <img src={LogoImg} className="Logo" alt="Logo"/>
      </div>
        </Link>
      <nav className="NavContainer">
        <ul className="UlContainer">
          <Link to='/wishlist' style={{textDecoration: 'none'}}>
            <li className="ItemList">
              <span className="WishListIcon">
                <TbJewishStarFilled />
              </span>{" "}
              Lista de Desejos
              <span className="counter">1</span>
            </li>
          </Link>
          <Link to='/cart' style={{textDecoration: 'none'}}>
            <li className="ItemList">
              <span className="CarIcon">
                <FaShoppingCart />
              </span>{" "}
              Meu carrinho
              <span className="counter">0</span>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
