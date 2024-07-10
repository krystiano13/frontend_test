import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export function Navbar() {
  return (
    <nav className="nav">
      <NavLink className="nav__anchor" to="/">
        <img className="nav__anchor__img" src={logo} alt="HTML5 logo" />
      </NavLink>
      <h1 className="nav__heading">
        Zadanie <span className="nav__heading__span">Rekrutacyjne</span>
      </h1>
    </nav>
  );
}
