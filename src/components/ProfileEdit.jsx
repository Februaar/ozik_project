import { useEffect, useState } from "react";
import "../styles/edit.scss";
import { Password } from "./ui/password";
import { validatePassword } from "../utils/password";

export default function ProfileEdit() {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    // 비밀번호 유효성 검사
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

  useEffect(() => {
    // 비밀번호가 변경될 때 확인 비밀번호도 다시 확인
    if (confirmPassword && confirmPassword !== password) {
      setConfirmPasswordError("비밀번호가 일치하지 않습니다.");
    } else {
      setConfirmPasswordError("");
    }
  }, [password, confirmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 닉네임 검증
    if (!nickname) {
      alert("닉네임을 입력해주세요.");
      return;
    }

    // 비밀번호 검증
    if (!password || !confirmPassword) {
      alert("비밀번호와 확인 비밀번호를 모두 입력해주세요.");
      return;
    }

    // 에러 상태 확인
    if (passwordError || confirmPasswordError) {
      alert("입력된 비밀번호를 확인해주세요.");
      return;
    }

    // 성공 처리
    alert("프로필이 성공적으로 수정되었습니다.");
  };

  return (
    <div className="edit-container">
      <h3>프로필 편집</h3>
      <form onSubmit={handleSubmit}>
        <div className="edit-item-container">
          <div className="edit-item">
            <div className="item-title">닉네임 변경</div>
            <input
              placeholder="닉네임을 입력해주세요"
              value={nickname}
              onChange={handleNicknameChange}
              className="edit-input"
            />
          </div>
          <div className="edit-item">
            <div className="item-title">비밀번호 변경</div>
            <Password
              password={password}
              confirmPassword={confirmPassword}
              passwordError={passwordError}
              confirmPasswordError={confirmPasswordError}
              onChange={handlePasswordChange}
              confirmChange={handleConfirmPasswordChange}
            />
          </div>
        </div>
        <div className="edit-button">
          <button
            type="submit"
            disabled={passwordError || confirmPasswordError}
            className={
              passwordError || confirmPasswordError
                ? "disabled-button"
                : "active-button"
            }
          >
            수정하기
          </button>
        </div>
      </form>
    </div>
  );
}
