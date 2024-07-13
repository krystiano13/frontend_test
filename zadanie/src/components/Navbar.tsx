import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

interface Props {
  nameShown: boolean;
}

export const Navbar: React.FC<Props> = ({ nameShown }) => {
  return (
    <nav className="nav">
      <NavLink className="nav__anchor" to="/">
        <img className="nav__anchor__img" src={logo} alt="HTML5 logo" />
      </NavLink>
      <div>
        <p className="nav__p">
          Zadanie <span className="nav__p__span">Rekrutacyjne</span>
        </p>
        {nameShown && <p className="nav__p">Krystian Zieja</p>}
      </div>
    </nav>
  );
};
