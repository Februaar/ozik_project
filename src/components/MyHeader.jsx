import "../styles/my.scss";
import { profile } from "../img/index";

export default function MyHeader({ ...user }) {
  return (
    <div className="my-header">
      <img
        src={user.photoURL ? user.photoURL : profile}
        className="my-img"
      />
      <span>{user.displayName ? user.displayName : "사용자님"}</span>
    </div>
  );
}
