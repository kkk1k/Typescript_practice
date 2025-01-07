// keyof 연산자
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "김한경",
  age: 15,
};

function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

getPropertyKey(person, "name");

// typeof 연산자

const person1 = {
  name: "김한경",
  age: 28,
  birth: "1998",
};

type Person1 = typeof person1;

function getPropertyKey1(person: Person1, key: keyof typeof person1) {
  return person[key];
}
