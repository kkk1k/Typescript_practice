let num1: number = 123; // type 주석 : 함께 정의하는 방식

// string
let str1: string = "hello";

// null
let null1: null = null;

// undefined 타입
let unde1: undefined = undefined;

let numA: number = null; // ❌
// 임시로 number에 null값을 부여하고 싶으면
// tsconfig.json에 "strictNullChecks": false, 추가
// strict 의 하위 옵션

// 리터럴 타입
let numB: 10 = 10;
