interface User {
  name: string;
  age: number;
}

function join(name: string, age: number): User;
function join(name: string, age: string): string;
function join(name: any, age: any): any {
  if (typeof age === "number") {
    return { name, age };
  } else {
    return "나이는 숫자로 입력해 주세요";
  }
}

const sma = join("Sam", 30);
const jame = join("Jane", "30");

type User1 = {
  id: number;
  name: string;
};

type A = User1 & {
  age: number;
};

const a: A = {
  id: 1,
  name: "KHK",
  age: 28,
};

console.log(a);
