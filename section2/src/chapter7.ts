// void

function func1(): void {
  console.log("hello");
}

// ✅ Works in TypeScript 5.1!
function f4(): undefined {
  // no returns
}
// never
let anyVar: any;

let a: never;
a = 1;
a = null;
a = undefined;
a = anyVar;
