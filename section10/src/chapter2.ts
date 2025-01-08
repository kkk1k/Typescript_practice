interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnail?: string;
}

// Pick
// 객체 타입으로 부터 특정 프로퍼티 추출

// 레거시라 tags 프로퍼티가 존재하지 않는다면?
// const legacyPost: Post = {
//     title: "",
//     content: ""
// }

// Pick<사용할 타입, 뽑아낼 프로퍼티>
const legacyPost: Pick<Post, "title" | "content"> = {
  title: "asd",
  content: "asd",
};

// K가 T의 key로 이뤄졌다는 것을 보장하기 위해해
type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
};

// Omit
// 객체 타입으로 부터 특정 프로퍼티 제거
const newPost: Omit<Post, "tags"> = {
  title: "asd",
  content: "asd",
};

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// Record
// 객체 타입을 만들어주는 유틸리티 함수

type Thumbnail = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
};

// 이렇게 계속 같은 프로퍼티 추가한다면?

type Thumbnail1 = Record<"large" | "medium" | "small", { url: string }>;

type Record<K extends keyof any, V> = {
  [key in K]: V;
};
