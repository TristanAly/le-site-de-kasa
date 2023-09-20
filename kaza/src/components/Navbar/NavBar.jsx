import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

export const NavBar = () => {
  return (
    <header>
      <nav className="navBar">
        <h1>
          <img src={logo} alt="Logo de KASA" />
        </h1>
        <div className="links">
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/about">A propos</NavLink>
        </div>
      </nav>
    </header>
  );
};
