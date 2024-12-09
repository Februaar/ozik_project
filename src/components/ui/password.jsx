import PropTypes from "prop-types";
import "../../styles/edit.scss";

export const Password = ({
  password,
  confirmPassword,
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
      <input
        type="password"
        placeholder="동일한 비밀번호를 입력해주세요"
        className="edit-input"
        value={confirmPassword}
        onChange={confirmChange}
      />
    </>
  );
};

Password.propTypes = {
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  confirmChange: PropTypes.func.isRequired,
};
