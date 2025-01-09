type TypeName<T> = T extends string
  ? string
  : T extends number
  ? number
  : T extends boolean
  ? boolean
  : T extends undefined
  ? undefined
  : T extends Function
  ? Function
  : object;

type T0 = TypeName<string>;
type T1 = TypeName<() => {}>;

// 분산 조건부 타입
type IsStringType<T> = T extends string ? "yes" : "no";

type T2 = IsStringType<string | number>; // type yes | no 가 된다.
// 분산 조건부 타입은 타입을 인스턴스화 중에 자동을 유니언 타입으로 분산되는데,
// T에 대한 타입 인수 A | B | C 를 사용하여 T extends U ? X : Y 를 인스턴스화하면 (A extends U ? X : Y) | (B extends U ? X : Y) | (C extends U ? X : Y) 로 결정되게 된다.
// 유니온으로 묶인 타입 하나하나 마다 조건부 타입 검사

type T3 = string | number extends string ? "yes" : "no"; //결과가 no 나옴
// 조건부 타입은 type parameter가 사용되는 경우에만 분산 방식이 동작한다.


// 정리
type T10 = (1 | 3 | 5 | 7) extends number ? 'yes' : 'no'; // naked 타입이 아니라서 분산이 되지 않는다.
type T20<T> = T extends number ? T[] : 'no'; // 제네릭 T는 naked 타입이라 분산이 된다.
type T30<T> = T[] extends number ? 'yes' : T[]; // 제네릭이지만 T[] 와 같이 변형된 타입 파라미터는 naked 타입이 아니라서 분산이 일어나지 않는다.

type T4 = T10; // "yes"
type T5 = T20<(1 | 3 | 5 | 7)>; // 1[] | 3[] | 5[] | 7[]
type T6 = T30<(1 | 3 | 5 | 7)>; // (1 | 3 | 5 | 7)[]