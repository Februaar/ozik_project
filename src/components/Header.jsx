import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { useMenu } from "../context/MenuContext";
import { menu } from "../img/index";
import { Status } from "../components/Status";

function Header() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toggleMenu } = useMenu();

  const handleSigninClick = () => {
    navigate("/signin");
  };

  return (
    <>
      <header className="header-container">
        <Link to="/">
          <h1>오직</h1>
        </Link>
        <div className="right">
          <div className="status-area">
            {user ? (
              <>
                <Status {...user} />
              </>
            ) : (
              <button onClick={handleSigninClick}>로그인</button>
            )}
          </div>
          <div className="menu" onClick={toggleMenu}>
            <img src={menu} alt="Menu" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
