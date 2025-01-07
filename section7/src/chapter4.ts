class NumberList {
  constructor(private list: number[]) {}

  push(data: number) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new NumberList([1, 2, 3]);

// 만약 클래스리스트로 만들고 싶다면 똑같은 코드를 string 타입으로 또 만들어야 함
// 제네릭 클래스로 하면 편함

class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    this.list.pop();
  }

  pringt() {
    console.log(this.list);
  }
}

const list = new List([1, 2, 3]);
list.push(1);
