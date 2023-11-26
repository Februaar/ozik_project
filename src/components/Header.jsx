import "./header.scss";
import { Link, useLocation } from "react-router-dom";
import { menu, search } from "../img/index";

function Header() {
  const location = useLocation();

  if (location.pathname === "/search") {
    return null;
  }

  return (
    <section className="header-container">
      <Link to="/">
        <div className="logo">OZIK</div>
      </Link>
      <div className="icon-container">
        <Link to="/search">
          <img src={search} alt="Search"></img>
        </Link>
        <img src={menu} alt="Menu"></img>
      </div>
    </section>
  );
}

export default Header;
