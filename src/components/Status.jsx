import { useNavigate } from "react-router-dom";
import "../styles/status.scss";
import { profile } from "../img/index";

export function Status({ ...user }) {
  const navigate = useNavigate();

  const handleMyPageClick = () => {
    navigate("/my");
  };

  return (
    <div className="status" onClick={handleMyPageClick}>
      <img src={user.photoURL ? user.photoURL : profile} />
      <span>{user.displayName ? user.displayName : "사용자"}</span>
    </div>
  );
}
