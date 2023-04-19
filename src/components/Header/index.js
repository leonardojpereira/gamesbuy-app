import { useSelector } from "react-redux";
import { BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import LogoImg from '../../assets/image/logo.png';
import "./style.css";

export default function Header() {

  const wishListAmount = useSelector(state => state.wishlist.length);

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
                <BsStarFill />
              </span>{" "}
              Lista de Desejos
              <span className="counter">{wishListAmount}</span>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
