import "../../styles/my.scss";
import { profile } from "../../img/index";

const MyHeader = ({ ...user }) => {
  return (
    <div className="my-header-container">
      <img
        src={user.user.photoURL ? user.user.photoURL : profile}
        width={"45px"}
        height={"45px"}
        className="my-img"
      />
      <span>{user.user.displayName ? user.user.displayName : "사용자"}님</span>
    </div>
  );
}

export default MyHeader;
