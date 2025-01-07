// 제너릭

// function func(value: unknown) {
//   return value;
// }

// let num = func(10);
// if (typeof num === "number") {
//   num.toFixed();
// }

// let str = func("hello");
// str.toUpperCase();

function func<T>(value: T): T {
  return value;
}

let num = func(10);

let arr = func<[number, number, number]>([1, 1, 1]);
