type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: number;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "kkk",
  color: "black",
  breed: 5,
};

// dog = animal // ❌ NO
animal = dog; // ✅ OK

let animal2: Animal = {
  name: "호랑",
  color: "green",
  // breed: 5
};
// 초과 프로퍼티 검사로 인해 오류가 발생

let animal3: Animal = dog;

function func(animal: Animal) {}

func({ name: "호랑", color: "green", breed: 5 }); // 매개변수일 때도 오류 발생
