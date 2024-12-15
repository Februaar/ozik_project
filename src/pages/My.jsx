import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/my.scss";
import { useAuth } from "../AuthContext";
import MyHeader from "../components/MyHeader";
import MyNav from "../components/MyNav";

export default function MyPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [user, navigate]);

  return (
    <>
      {user && (
        <>
          <MyHeader user={user} />
          <MyNav />
        </>
      )}
    </>
  );
}
