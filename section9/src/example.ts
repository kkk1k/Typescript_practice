type PropertyType<T, K extends keyof T> = T[K] extends infer U ? U : never;

interface Example {
  getName: () => string;
  getAge: () => number;
}

// 'getName' 프로퍼티의 타입을 추출
type GetNameType = PropertyType<Example, "getName">; // () => string

// 'getAge' 프로퍼티의 타입을 추출
type GetAgeType = PropertyType<Example, "getAge">; // () => number
