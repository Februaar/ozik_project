import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { auth } from "../../firebase-config";
import { signOut } from "firebase/auth";
import "../styles/footer.scss";

function Footer() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert("로그아웃 되었습니다.");
        sessionStorage.removeItem("user");
        console.log("로그아웃 성공");
        navigate("/signin");
      })
      .catch((err) => {
        console.log("로그아웃 실패", err);
      });
  };

  return (
    <footer className="footer-container">
      <p className="text-sm font-light">© 2024 februaar.</p>
      {user ? (
        <div className="logout-button" onClick={handleLogout}>
          <span>로그아웃</span>
        </div>
      ) : (
        ""
      )}
    </footer>
  );
}

export default Footer;
