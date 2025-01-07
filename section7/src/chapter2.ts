// map 메서드

function map<T, U>(arr: T[], callback: (item: T) => U): U[] {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

let arr = ["1", "2"];
let abc = map(arr, (item) => item.charCodeAt(0));

// forEach 메서드

function forEach<T>(arr: T[], callback: (item: T) => void): void {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr, (item) => {
  console.log(item.charCodeAt(0));
});

console.log(arr); // ["1", "2"]
console.log(abc); // [ 49, 50 ]
