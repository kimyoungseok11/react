const INSERT = "profile/INSERT";

export const insert = () => ({ type: INSERT });

const initialState = {
  profile: {
    velopert: {
      id: 1,
      name: "김민준",
      description: "리액트를 좋아하는 개발자",
    },
    gildong: {
      id: 2,
      name: "홍길동",
      description: "리액트를 공부하는 개발자",
    },
  },
};

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case INSERT:
      return;

    default:
      return state;
  }
}

export default profileReducer;
