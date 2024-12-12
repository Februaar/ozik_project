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
      <img
        src={user.photoURL ? user.photoURL : profile}
        width={"24px"}
        height={"24px"}
      />
      <span>{user.displayName ? user.displayName : "사용자"}님</span>
    </div>
  );
}
