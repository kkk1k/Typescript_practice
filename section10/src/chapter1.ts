interface Post {
  title: string;
  tags: string[];
  content: string;
  id: number;
  thumbnail?: string;
}

// const draft: Post = {
//     title: '임시제목',
//     content: "adasdasdasd",
// }
//이렇게 임시 완성된 포스트에 대한 타입을 지정해야 할때 Partial을 사용
const draft: Partial<Post> = {
  title: "임시제목",
  content: "안녕녕",
};

//Partial 직접 구현
type Partial<T> = {
  [key in keyof T]?: T[key];
};

//thunbnail을 필수적으로 만들어야 할때
const withThumbnailPost: Required<Post> = {
  title: "한입 타스 후기",
  tags: ["ts"],
  content: "",
  id: 10,
  thumbnail: "https://...",
};

type Required<T> = {
  [key in keyof T]-?: T[key];
};

//readonly

const readonlyDraft: Readonly<Post> = {
  title: "한입 타스 후기",
  tags: ["ts"],
  content: "",
  id: 10,
  thumbnail: "https://...",
};

readonlyDraft.content = "asd"; // 오류 생김김
