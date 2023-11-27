function MyProfile() {
  return (
    <>
      <p className="my-nav-title">프로필 편집</p>
      <div className="my-edit-container">
        <div className="my-edit-input-content">
          <span className="my-edit-content-title">닉네임 변경</span>
          <input
            placeholder="닉네임을 입력해주세요"
            className="my-edit-input"
          />
        </div>
        <div className="my-edit-input-password">
          <span className="my-edit-content-title">비밀번호 변경</span>
          <input
            placeholder="비밀번호를 입력해주세요"
            className="my-edit-input"
          />
          <input
            placeholder="동일한 비밀번호를 입력해주세요"
            className="my-edit-input"
          />
        </div>
        <button className="my-edit-button">저장하기</button>
      </div>
    </>
  );
}

export default MyProfile;
