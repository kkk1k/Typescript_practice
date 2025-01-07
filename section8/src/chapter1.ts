// 인덱스드 액세스 타입
// 객체에 프로퍼티를 추가해야한다면 하나하나 인터페이스와 사용할 함수의 타입에 지정을 해줘야함함
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
  },
};

function printAuthorInfo(author: { id: number; name: string }) {
  console.log(`${author.id} - ${author.name}`);
}

// 인덱스드 액세스 타입을 사용한다면 interface에만 지정해주면 된다.
function printAuthorInfo1(author: Post["author"]) {
  console.log(`${author.id} - ${author.name}`);
}

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

const post1: PostList[0] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
    age: 27,
  },
};
