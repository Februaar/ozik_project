export const validatePassword = (value) => {
  if (value.length < 8) return "비밀번호는 8자 이상이어야 합니다.";
  if (value.length > 20) return "비밀번호는 20자를 초과할 수 없습니다.";
  if (!/[A-Z]/.test(value)) return "비밀번호에 대문자가 포함되어야 합니다.";
  if (!/[a-z]/.test(value)) return "비밀번호에 소문자가 포함되어야 합니다.";
  if (!/[0-9]/.test(value)) return "비밀번호에 숫자가 포함되어야 합니다.";
  if (!/[!@^*]/.test(value))
    return "비밀번호에 !@^* 특수 문자가 포함되어야 합니다.";
  if (/\s/.test(value)) return "비밀번호에 공백을 포함할 수 없습니다.";
  return "";
};
