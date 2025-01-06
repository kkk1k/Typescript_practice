// 함수정의

function func(a: number, b: number): number {
  return a + b;
}

const func2 = (a: number, b: number): number => {
  return a + b;
};

//선택적 매개변수는 필수 매개 변수보다 뒤에 와야함함
function introduce(name = "김한경", tall?: number) {
  console.log(`name : ${name}`);
  if (typeof tall === "number") {
    console.log(`tall : ${tall + 10}`);
  }
}

introduce("김한경", 176);

introduce("김한경");

function getSum(...rest: number[]) {
  let sum = 0;
}
