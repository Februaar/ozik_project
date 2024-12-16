import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import MyHeader from "../components/my/MyHeader";
import MyNav from "../components/my/MyNav";

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
