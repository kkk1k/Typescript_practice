// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "김한경경",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

// 인덱스 시그니처

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

// type CountryNumberCodes = {
//   [key: string]: number;
//   Korea: string; // 오류!
// };

const codes1: CountryNumberCodes = {
  Korea: 82, // 반드시 포함
  USA: 1,
  Japan: 81,
}; // ✅ 유효한 객체

const codes2: CountryNumberCodes = {
  USA: 1,
  Japan: 81,
  Korea: 4,
}; // ❌ 오류: 'Korea' 속성이 누락되었습니다.
