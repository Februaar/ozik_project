import { useNavigate } from "react-router-dom";
import "../styles/signin.scss";

function SignInPage() {
  const navigate = useNavigate();

  const handleMainClick = () => {
    navigate("/");
  };

  const handleSignupClick = () => {
    navigate("/signup");
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
              placeholder="올바른 이메일 형식으로 작성해주세요"
              className="signin-input"
            />
          </div>
          <div className="signin-input-content">
            <span className="signin-content-title">비밀번호</span>
            <input
              placeholder="비밀번호를 작성해주세요"
              className="signin-input"
            />
          </div>
        </div>
        <div className="signin-button-area">
          <button className="signin-button">로그인</button>
          <button onClick={handleSignupClick}>회원가입</button>
        </div>
      </div>
    </>
  );
}

export default SignInPage;
