/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase-config";
import { saveUserInfoToFirestore } from "../firebase-auth";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // 로그인한 경우
        setUser(authUser);

        // Firestore에 사용자 정보 저장
        saveUserInfoToFirestore(
          authUser.uid,
          authUser.email,
          authUser.displayName,
          authUser.photoURL
        );

        // 세션 스토리지에 사용자 정보 저장
        sessionStorage.setItem(
          "user",
          JSON.stringify({
            uid: authUser.uid,
            email: authUser.email,
            displayName: authUser.displayName,
            photoURL: authUser.photoURL,
          })
        );
      } else {
        // 로그아웃한 경우
        setUser(null);
        sessionStorage.removeItem("user");
      }
    });

    // 브라우저 탭 종료 시 세션 스토리지 데이터 삭제
    const handleTabClose = () => {
      sessionStorage.removeItem("user");
    };

    window.addEventListener("beforeunload", handleTabClose);

    return () => {
      unsubscribe();
      window.removeEventListener("beforeunload", handleTabClose);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
