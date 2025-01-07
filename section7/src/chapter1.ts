// 2개의 타입 변수가 필요한 상황
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

// 다양한 배열 타입을 인수로 받는 제네릭 함수
function returnFirstValue<T>(data: T[]) {
  return data[0];
}

let num = returnFirstValue([1, 2, 3]);

let str = returnFirstValue(["1", 2, 3]);

// 첫번째 요소의 타입에 대해서만 지정
function returnFirstValue1<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let str1 = returnFirstValue1([1, "hello", "mynameis"]);

// 타입 변수를 제한ㅃㅃ
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

getLength("123"); // ✅ string은 length 프로퍼티 존제

getLength([1, 2, 3]); // ✅ 배열은 length 프로퍼티 존재

getLength({ length: 1 }); // ✅ 객체 안 length 프로퍼티 존재

// getLength(undefined);        // ❌

// getLength(null);             // ❌
