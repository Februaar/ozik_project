import "../styles/signup.scss";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase-config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

function SignUpPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleCreateUser = () => {
    createUserWithEmailAndPassword(auth, email, password, displayName)
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(user, {
          displayName: displayName,
        })
          .then(() => {
            console.log("프로필 업데이트 성공");
          })
          .catch((error) => {
            console.error("프로필 업데이트 실패:", error.message);
          });
        console.log("회원가입 & 자동로그인 성공:", user);

        navigate("/");
      })
      .catch((err) => {
        console.log("회원가입 실패:", err);
      });
  };

  return (
    <>
      <div className="signup-title">회원가입</div>
      <div className="signup-container">
        <div className="signup-input-area">
          <div className="signup-input-content">
            <span className="signup-content-title">이메일</span>
            <input
              type="email"
              placeholder="올바른 이메일 형식으로 입력해주세요"
              className="signup-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="signup-input-password">
            <span className="signup-content-title">비밀번호</span>
            <input
              type="text"
              placeholder="비밀번호를 입력해주세요"
              className="signup-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="text"
              placeholder="동일한 비밀번호를 입력해주세요"
              className="signup-input"
            />
          </div>
          <div className="signup-input-content">
            <span className="signup-content-title">닉네임</span>
            <input
              type="text"
              placeholder="닉네임을 입력해주세요"
              className="signup-input"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>
        </div>
        <div className="signup-button-area">
          <button onClick={handleCreateUser} className="signup-button">
            가입하기
          </button>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
