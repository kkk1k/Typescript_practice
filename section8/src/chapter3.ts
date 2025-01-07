interface User {
  id: number;
  name: string;
  age: number;
}

const user: User = {
  id: 5,
  name: "KHK",
  age: 25,
};

function fetchUser(): User {
  return {
    id: 1,
    name: "이정환",
    age: 27,
  };
}

// 수정기능을 하는 함수에서
// 일정 프로퍼티에 대해서만 수정을 하고 싶을 떄
type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

type PartialUser1 = {
  [key in keyof User]?: User[key];
};

//이런식으로 하는건 과함
function updateUser(user: PartialUser1) {
  if (user.age !== undefined) {
    // 타입 가드
    user.age += 10;
  } else {
    console.log("age 속성이 존재하지 않습니다.");
  }
}

updateUser({ age: 25 });

console.log(user);
