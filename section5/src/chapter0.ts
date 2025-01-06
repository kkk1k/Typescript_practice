// 인터페이스

interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number): void;
  sayHi(a: number, b: number): void;
}

// type Person = {
//   readonly name: string;
//   age?: number;
//   sayHi: () => void;
//   sayHi: (a: number, b: number) => void; // ❌
// };

interface Func2 {
  (a: number): string;
  b: boolean;
}

const func: Func2 = (a) => "hello";
func.b = true;
