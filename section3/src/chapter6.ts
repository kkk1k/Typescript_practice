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

let num4 = 10 as const

let cat = {
    name: "야옹이",
    color: "black"
} as const

// Non Null

type Post = {
    title: string,
    author?: string 
}

let post: Post = {
    title: "게시글",
    author: "김한경"
}

const len: number = post.author?.length // 옵셔널체이닝으로 인해 undefined가 발생할 수 있다

const len2: number = post.author!.length // ! -> null이나 undefined가 아닐 것이라고 말하기