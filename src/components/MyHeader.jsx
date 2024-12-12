import "../styles/my.scss";
import { profile } from "../img/index";

export default function MyHeader({ ...user }) {
  return (
    <div className="my-header">
      <img
        src={user.user.photoURL ? user.user.photoURL : profile}
        className="my-img"
      />
      <span>{user.user.displayName ? user.user.displayName : "사용자"}님</span>
    </div>
  );
}
