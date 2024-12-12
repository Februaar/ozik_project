import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase-config";
import { saveUserInfoToFirestore } from "../../firebase-auth";
import "../styles/account.scss";

function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/signup");
  };

  // 이메일/비밀번호 로그인
  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log("로그인 성공:", user);

        // Firestore에 사용자 정보 저장
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

  // 구글 소셜 로그인
  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("구글 로그인 성공:", user);

        // Firestore에 사용자 정보 저장
        saveUserInfoToFirestore(
          user.uid,
          user.email,
          user.displayName,
          user.photoURL
        );

        navigate("/");
      })
      .catch((err) => {
        console.log("구글 로그인 실패:", err);
      });
  };

  return (
    <div className="account-container">
      <div className="account-header">
        <h4>OZIK</h4>
        <span>나를 위한 시간</span>
      </div>
      <div className="account-form-area">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin(email, password);
          }}
          className="account-form"
        >
          <div className="input-item">
            <span>이메일</span>
            <input
              type="email"
              placeholder="올바른 이메일 형식으로 작성해주세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-item">
            <span>비밀번호</span>
            <input
              type="password"
              placeholder="비밀번호를 작성해주세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="signin-button-area">
            <div className="signin-buttons">
              <button type="submit">로그인</button>
              <button onClick={handleSignupClick} className="signup-button">
                회원가입
              </button>
              <button onClick={handleGoogleLogin}>Google 로그인</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignInPage;
