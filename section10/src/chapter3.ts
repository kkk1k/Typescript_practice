// Exclude<T, U>
// T로 부터 U 제거
type A = Exclude<string | boolean, string>;
// boolean

// 직접 구현
type Exclude<T, U> = T extends U ? never : T;

// Extract<T,U>
// T로 부터 U를 추출
type B = Extract<string | boolean, string>;

//직접 구현
type Extract<T, U> = T extends U ? T : never;

// ReturnType<T>
type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;

function funcA() {
  return "hello";
}

function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>;
// string

type ReturnB = ReturnType<typeof funcB>;
// number
