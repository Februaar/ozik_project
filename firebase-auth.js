import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";

// 사용자 정보를 Firestore에 저장
const saveUserInfoToFirestore = async (uid, email, displayName, photoURL) => {
  console.log("saveUserInfoToFirestore 호출");

  const userRef = doc(db, "users", uid); // uid를 문서 ID로 사용
  console.log("컬렉션 참조 생성 완료:", userRef);

  try {
    await setDoc(userRef, {
      uid: uid,
      email: email,
      displayName: displayName,
      photoURL: photoURL,
    });
    console.log("사용자 정보 저장 성공:", uid);
  } catch (err) {
    console.error("사용자 정보 저장 실패:", err);
  }
};

export { saveUserInfoToFirestore };
