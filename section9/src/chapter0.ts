// 조건부 타입

function removeSpace(text: string) {
  return text.replaceAll(" ", "");
}

let str1 = removeSpace("Hello type script");

// 만약 undefined나 null값이 제공될 수 있다고 가정
function removeSpace1(text: string | undefined | null) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  }
}

let result = removeSpace1("hi im winterlood");
// result.toUpperCase()

function removeSpace2<T>(text: T): T extends string ? string : undefined;

function removeSpace2<T>(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}
