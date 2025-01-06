// 서로소 유니온 타입

// 아래와 같은 형식으로 데이터가 온다고 가정
const loading = {
  state: "LOADING",
};

const failed = {
  state: "FAILED",
  error: {
    message: "오류 발생 원인운 ~",
  },
};

const success = {
  state: "SUCCESS",
  response: {
    data: "데이터 ~~",
  },
};

type LoadingTask = {
  state: "LOADING";
};

type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

function process(task: AsyncTask) {
  switch (task.state) {
    case "LOADING": {
      console.log("로딩");
      break;
    }
    case "FAILED": {
      console.log(`에러 발생 ${task.error.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`성공 ${task.response.data}`);
      break;
    }
  }
}
