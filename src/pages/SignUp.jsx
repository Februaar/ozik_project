import { useNavigate } from "react-router-dom";
import "../styles/signup.scss";

function SignUpPage() {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="signup-title">회원가입</div>
      <div className="signup-container">
        <div className="signup-input-area">
          <div className="signup-input-content">
            <span className="signup-content-title">이메일</span>
            <input
              placeholder="올바른 이메일 형식으로 입력해주세요"
              className="signup-input"
            />
          </div>
          <div className="signup-input-password">
            <span className="signup-content-title">비밀번호</span>
            <input
              placeholder="비밀번호를 입력해주세요"
              className="signup-input"
            />
            <input
              placeholder="동일한 비밀번호를 입력해주세요"
              className="signup-input"
            />
          </div>
          <div className="signup-input-content">
            <span className="signup-content-title">닉네임</span>
            <input
              placeholder="닉네임을 입력해주세요"
              className="signup-input"
            />
          </div>
        </div>
        <div className="signup-button-area">
          <button onClick={handleSignupClick} className="signup-button">
            가입하기
          </button>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
