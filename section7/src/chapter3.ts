interface KeyPair<K, V> {
  key: K;
  value: V;
}

// 제네릭을 사용하니 객체 만들때마다 인터페이스에서 타입만 정해주면 됨
let keyPair1: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<string, 1> = {
  key: "hello",
  value: 1,
};

let keyPair3: KeyPair<string, number[]> = {
  key: "KHK",
  value: [1, 2, 3],
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key1: "value",
};

let booleanMap: Map<boolean> = {
  key2: true,
};

// 제네릭 타입 별칭
type Map2<V> = {
  [value: string]: V;
};

let strMap: Map2<string> = {
  key1: "123",
};

// 제네릭 인터페이스가 언제 좋을까?
interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
  name: "이정환",
  profile: {
    type: "developer",
    skill: "typescript",
  },
};

const studentUser: User<Student> = {
  name: "홍길동",
  profile: {
    type: "student",
    school: "가톨릭대학교",
  },
};
