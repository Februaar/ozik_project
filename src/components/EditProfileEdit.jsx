function EditProfile() {
  return (
    <>
      <p className="my-nav-title">프로필 편집</p>
      <div className="my-edit-container">
        <div className="nickname-edit-box">
          <span className="edit-title">닉네임 변경</span>
          <input
            placeholder="닉네임을 입력해주세요"
            className="edit-input"
          />
        </div>
        <div className="password-edit-box">
          <span className="edit-title">비밀번호 변경</span>
          <input
            placeholder="비밀번호를 입력해주세요"
            className="edit-input"
          />
          <input
            placeholder="동일한 비밀번호를 입력해주세요"
            className="edit-input"
          />
        </div>
        <button className="save-button">저장하기</button>
      </div>
    </>
  );
}

export default EditProfile;
