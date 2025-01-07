const promise = new Promise((rs, rj) => {
  setTimeout(() => {
    rs(20);
  }, 3000);
});
// 프로미스는 타입을 추론할 수 없음
// unknown 타입이 됨
promise.then((res) => {
  console.log(res);
});

const promise1 = new Promise<number>((rs, rj) => {
  setTimeout(() => {
    rs(20);
  }, 3000);
});
// 프로미스는 타입을 추론할 수 없음
// 에러 타입은 정의가 불가능
// 타입 좁히기 사용
promise1.then((res) => {
  console.log(res + 10);
});

const promise2 = new Promise<number>((rs, rj) => {
  setTimeout(() => {
    rj("~~때문에 실패");
  }, 3000);
});

promise2.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

// 사례
interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "행복",
        content: "asd",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  console.log(post);
});
