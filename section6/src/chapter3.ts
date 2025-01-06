// 인터페이스와 클래스
interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string
  ) {}
  move(): void {
    console.log(`${this.moveSpeed}로 이동`);
  }
}

let character = new Character("KHK", 20, "str");

character.move();

class Character2 {
  constructor(public id: number, public date: Date) {}

  print() {
    console.log(`print ${this.id} ${this.date}`);
  }
}

let date = new Date();

let character2 = new Character2(1, date);
character2.print();
