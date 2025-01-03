// 합집합 타입 - Union 타입
let a: string | number;

a = 1;
a = "hello";

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "흰둥이",
  color: "white",
};

let union2: Union1 = {
  name: "김한경",
  language: "한국어",
};

let union3: Union1 = {
  // ✅
  name: "",
  color: "",
  language: "",
};

// let union4: Union1 = {
//   // ❌
//   name: "김한경",
// };

type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};
