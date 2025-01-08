// 분산적인 조건부 타입

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<boolean | number | string>;
// 1단계
// StringNumberSwith<boolean> |
// StringNumberSwith<number> |
// StringNumberSwith<string>

// 2단계
// number |
// string |
// number

// 결과 number | string

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1단계
// Exclude<number>
// Exclude<string>
// Exclude<boolean>

// 2단계
// number
// never
// boolean

// 결과 number | boolean

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
// 1단계
// Extract<number>
// Extract<string>
// Extract<boolean>

// 2단계
// never
// string
// never

// 결과 string
