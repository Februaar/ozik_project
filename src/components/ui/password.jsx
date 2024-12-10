import PropTypes from "prop-types";
import "../../styles/edit.scss";

export const Password = ({
  password,
  confirmPassword,
  passwordError,
  confirmPasswordError,
  onChange,
  confirmChange,
}) => {
  return (
    <>
      <input
        type="password"
        placeholder="새로운 비밀번호를 입력해주세요"
        className="edit-input"
        value={password}
        onChange={onChange}
      />
      {passwordError && <div className="error-message">{passwordError}</div>}

      <input
        type="password"
        placeholder="동일한 비밀번호를 입력해주세요"
        className="edit-input"
        value={confirmPassword}
        onChange={confirmChange}
      />
      {confirmPasswordError && (
        <div className="error-message">{confirmPasswordError}</div>
      )}
    </>
  );
};

Password.propTypes = {
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  passwordError: PropTypes.string,
  confirmPasswordError: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  confirmChange: PropTypes.func.isRequired,
};
