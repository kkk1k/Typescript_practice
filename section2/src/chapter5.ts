// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN, // 0할당 초기값 10 지정하면 하위도 알아서 자동할당당
  USER, // 1할당
  GUEST, // 2할당당
}

enum Language {
  korean = "ko",
  english = "en",
}

type User = {
  name: string;
  role: number;
  language: string;
};

const user1: User = {
  name: "김한경",
  role: Role.ADMIN,
  language: Language.korean,
};

const user2 = {
  name: "김효강",
  role: Role.USER,
};

const user3 = {
  name: "kkk",
  role: Role.GUEST,
};
