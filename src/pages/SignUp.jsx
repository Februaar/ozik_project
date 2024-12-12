import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase-config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import "../styles/account.scss";
import { validatePassword } from "../utils/password";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    const errorMessage = validatePassword(value);
    setPasswordError(errorMessage);

    if (confirmPassword && value !== confirmPassword) {
      setConfirmPasswordError("비밀번호가 일치하지 않습니다.");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);

    if (value !== password) {
      setConfirmPasswordError("비밀번호가 일치하지 않습니다.");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();

    if (!email || !password || !displayName) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    if (passwordError || confirmPasswordError) {
      alert("입력한 정보를 확인해주세요.");
      return;
    }

    setLoading(true);

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(result.user, { displayName });

      alert("회원가입 성공!");
      navigate("/");
    } catch (err) {
      console.log("회원가입 실패:", err.message);
      alert(`회원가입 실패: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (confirmPassword && confirmPassword !== password) {
      setConfirmPasswordError("비밀번호가 일치하지 않습니다.");
    } else {
      setConfirmPasswordError("");
    }
  }, [password, confirmPassword]);

  const isFormValid = () => {
    return (
      email &&
      password &&
      confirmPassword &&
      displayName &&
      !passwordError &&
      !confirmPasswordError
    );
  };

  return (
    <div className="account-container">
      <div className="account-header">
        <h4>회원가입</h4>
      </div>
      <div className="account-form-area">
        <form onSubmit={handleCreateUser} className="account-form">
          <div className="input-item">
            <span>이메일</span>
            <input
              type="email"
              placeholder="올바른 이메일 형식으로 입력해주세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-item">
            <span>비밀번호</span>
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            {passwordError && <p className="error-message">{passwordError}</p>}

            <input
              type="password"
              placeholder="동일한 비밀번호를 입력해주세요"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
            {confirmPasswordError && (
              <p className="error-message">{confirmPasswordError}</p>
            )}
          </div>
          <div className="input-item">
            <span>닉네임</span>
            <input
              type="text"
              placeholder="닉네임을 입력해주세요"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              required
            />
          </div>

          <div className="signup-button-area">
            <button
              type="submit"
              className={isFormValid() ? "active-button" : "disabled-button"}
              disabled={isFormValid()}
            >
              {loading ? "처리 중..." : "회원가입"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
