import { member, profile } from "../img/index";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

function MainHeader() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSigninClick = () => {
    navigate("/signin");
  };

  const handleMyPageClick = () => {
    navigate("/my");
  };

  return (
    <>
      <div className="main-header-container">
        {user ? (
          <>
            <h2 className="header-sign">WELCOME</h2>
            <div className="info-box">
              <button
                onClick={handleMyPageClick}
                className="page-button"
              >
                <img
                  src={user.photoURL ? user.photoURL : profile}
                  className="img"
                />
              </button>
              <button className="nickname">
                {user.displayName ? user.displayName : "사용자"} 님
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="header-sign">반가워요</h2>
            <div className="info-box">
              <button
                onClick={handleSigninClick}
                className="page-button"
              >
                <img src={member} width={24} height={24} />
              </button>
              <button className="sign-in">로그인</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default MainHeader;
