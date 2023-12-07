import "../../styles/signin.scss";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../../firebase-config";
import { saveUserInfoToFirestore } from "../../../firebase-auth";

function SignInPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleMainClick = () => {
    navigate("/");
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("로그인 성공:", user);

        saveUserInfoToFirestore(
          user.uid,
          user.email,
          user.displayName,
          user.photoURL
        );

        navigate("/");
      })
      .catch((err) => {
        console.log("로그인 실패:", err.message);
      });
  };

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("로그인 성공:", user);

        saveUserInfoToFirestore(
          user.uid,
          user.email,
          user.displayName,
          user.photoURL
        );

        navigate("/");
      })
      .catch((err) => {
        console.log("로그인 실패:", err);
      });
  };

  return (
    <>
      <div className="signin-header">
        <span onClick={handleMainClick} className="signin-title">
          OZIK
        </span>
        <span className="signin-title">나를 위한 시간</span>
      </div>
      <div className="signin-container">
        <div className="signin-input-area">
          <div className="signin-input-content">
            <span className="signin-content-title">이메일</span>
            <input
              type="email"
              placeholder="올바른 이메일 형식으로 작성해주세요"
              className="signin-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="signin-input-content">
            <span className="signin-content-title">비밀번호</span>
            <input
              type="text"
              placeholder="비밀번호를 작성해주세요"
              className="signin-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="signin-button-area">
          <button onClick={handleLogin} className="signin-button">
            로그인
          </button>
          <button onClick={handleSignupClick}>회원가입</button>
          <button onClick={handleGoogleLogin} className="signin-button">
            Google 로그인
          </button>
        </div>
      </div>
    </>
  );
}

export default SignInPage;
