// 템플릿 리터럴
type Color = "red" | "black" | "green";
type Animal = "dog" | "cat" | "chicken";
// 이경우는 너무 불편함함
type ColoredAnimal = `red-dog` | "red-cat" | "red-chicken" | "black-dog";

type ColoredAnimal1 = `${Color}-${Animal}`;
