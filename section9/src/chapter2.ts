// infer
type ElementType<T> = T extends (infer R)[] ? R : never;

// 사용 예시
type T1 = ElementType<string[]>; // string
type T2 = ElementType<number[]>; // number
type T3 = ElementType<boolean>; // never

type ReturnType<T> = T extends () => infer R ? R : never;

// 사용 예시
type RT1 = ReturnType<() => string>; // string
type RT2 = ReturnType<() => boolean>; // boolean
type RT3 = ReturnType<number>; // never

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

type PromiseA = PromiseUnpack<Promise<number>>;
type PromiseB = PromiseUnpack<Promise<string>>;
