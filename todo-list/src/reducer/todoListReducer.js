export default function todoListReducer(todoItems, action) {
  switch (action.type) {
    case "add": {
    }
    case "update":
    case "delete":
    case "default": {
      throw Error(`알 수 없는 action type ; ${action.type}`);
    }
  }
}
