import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export function Navbar() {
  return (
    <nav className="nav">
      <NavLink className="nav__anchor" to="/">
        <img className="nav__anchor__img" src={logo} alt="HTML5 logo" />
      </NavLink>
      <p className="nav__p">
        Zadanie <span className="nav__p__span">Rekrutacyjne</span>
      </p>
    </nav>
  );
}
