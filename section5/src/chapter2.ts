// 선업 합치기
// 모듈보강

interface Lib {
  a: number;
  b: number;
}

// 같은 이름의 모듈 보강
interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
