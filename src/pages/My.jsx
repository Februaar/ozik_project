import { useAuth } from "../AuthContext";
import MyHeader from "../components/my/MyHeader";
import MyNav from "../components/my/MyNav";

export default function MyPage() {
  const { user } = useAuth();

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
