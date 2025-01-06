//기준1. 반환값이 호환되는 가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// a를 b로 취급하는 것은 가능하지만 숫자와 리터럴,
// b를 a로 취급하는 것은 리터럴을 숫자로 취급하는 것이어서 불가능능
// b=a

//기준2. 메개변수가 호환되는가
// 2-1 메게변수의 개수가 같을 때,

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc; // ❌
dogFunc = animalFunc; // ✅

// let animalFunc = (animal: Animal) => {
//   console.log(animal.name); // ✅
//   console.log(animal.color); // ❌
// };

// 2-2 매개변수의 개수가 다를 때적어도 같은 타입의 매개변수가 있어야 함
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // ✅
// func2 = func1; // ❌
