import { useEffect, useState } from "react";
import "../styles/edit.scss";
import { Password } from "./ui/password";
import { validatePassword } from "../utils/password";

export default function ProfileEdit() {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  useEffect(() => {
    if (confirmPassword && confirmPassword !== password) {
      setError("비밀번호가 일치하지 않습니다.");
    } else if (!validatePassword(password)) {
      setError("");
    }
  }, [confirmPassword, password]);

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    const errorMessage = validatePassword(value);
    setError(errorMessage);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nickname) {
      alert("닉네임을 입력해주세요.");
      return;
    }

    if (error || !password || !confirmPassword) {
      alert("입력된 비밀번호를 확인해주세요.");
      return;
    }

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
              onChange={handlePasswordChange}
              confirmChange={handleConfirmPasswordChange}
            />
          </div>
        </div>
        <div className="edit-button">
          <button type="submit" disabled={!!error}>
            수정하기
          </button>
        </div>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
}
