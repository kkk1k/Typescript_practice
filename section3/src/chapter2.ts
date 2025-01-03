function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownValue: unknown;

  // let a1: number = unknownValue; // 오류X
}

function neverExaxm() {
  function errorFunc(): never {
    throw new Error();
  }

  let a: number = errorFunc(); // never -> number
  let b: string = errorFunc(); // never -> string
  let c: boolean = errorFunc(); // never -> boolean
  let d: null = errorFunc(); // never -> null
  let e: undefined = errorFunc(); // never -> undefined
  let f: [] = errorFunc(); // never -> Array
  let g: {} = errorFunc(); // never -> Object

  //   let a: never = 1; // number -> never ❌
  //   let b: never = "hello"; // string -> never ❌
  //   let c: never = true; // boolean -> never ❌
  //   let d: never = null; // null -> never ❌
  //   let e: never = undefined; // undefined -> never ❌
  //   let f: never = []; // Array -> never ❌
  //   let g: never = {}; // Object -> never ❌
}

function voidExam() {
  function noReturnFuncB(): void {
    return;
  }
  // let a: number = noReturnFuncB(); // void -> number ❌

  // let a: undefined = noReturnFuncB(); // void -> undefined ❌

  let voidVar: void = undefined;
}

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  anyVar = unknownVar;

  let neverVar: never = anyVar;
}
