let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = () => {};

anyVar.toUpperCase(); // 이렇게 런타임 과정에서 생기는 것이 큰 문제임
anyVar.toFixed();
anyVar.a;

let num: number = 10;
num = anyVar;
// any타입의 값은 어떤 타입으로 정의된 변수던 문제 없이 할당이 가능함

let unKnownVal: unknown;
unKnownVal = 5;

unKnownVal * 5;

// 조건문을 통해 타입의 값을 보장한다면 연산 수행 가능
if (typeof unKnownVal === "number") {
  unKnownVal * 2;
}
