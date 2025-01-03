let numArr: number[] = [1, 2, 3];

let multiArr: (string | number)[] = [1, "hello"];

let boolArr: boolean[] = [true, false];
// 제네릭
let boolArr1: Array<boolean> = [true, false];

// 다차원 배열
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "hello", true];

tup1.push(1);
tup2.push("asd");

console.log(tup1); // [ 1, 2, 1 ]
console.log(tup2); // [ 1, 'hello', true, 'asd' ]

const users = [
  ["이정환", 1],
  ["이아무개", 2],
  ["김아무개", 3],
  ["박아무개", 4],
];

users.push([5, "조아무개"]);

const tupleUsers: [string, number][] = [
  ["이정환", 1],
  ["이아무개", 2],
  ["김아무개", 3],
  ["박아무개", 4],
  //[5, "조아무개"], // 오류 발생
];

// tupleUsers.push(["조아무개", 5, "asd"]);
