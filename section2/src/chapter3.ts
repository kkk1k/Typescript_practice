let user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "김한경",
};

let user1: {
  id?: number; //생략가능한 프로퍼티티
  name: string;
} = {
  id: 1,
  name: "김한경",
};

let user2: {
  id?: number;
  readonly name: string; // name은 이제 Readonly 프로퍼티가 되었음
} = {
  id: 1,
  name: "이정환",
};

user.name = "dskfd"; // 오류 발생

console.log(user2);
