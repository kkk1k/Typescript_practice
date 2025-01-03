// 타입 단언

type Person = {
  name: string;
  age: number;
};

// 빈배열을 선언해야 할 때 타입 단언을 통해
let person: Person = {} as Person; // 오류가 난다.

person.name = "김한경";
person.age = 12;

let person2: {
  name: string;
  age: number;
  breed: number;
} = {
  name: "김한경",
  age: 15,
  breed: 1,
};

let person1: Person = person2;

let person3 = {
  name: "",
  age: 1,
  breed: 2,
} as Person;

// 타입 규칙
let num1 = 10 as never;
let num2 = 10 as unknown;

// let num3 = 10 as string // 오류
// Conversion of type 'number' to
// type 'string' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.ts(2352)
