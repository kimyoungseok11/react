export function getTodoList() {
  let todoListArray;
  if (localStorage.getItem("todoList") === null) {
    localStorage.setItem("todoList", JSON.stringify([]));
  }
  todoListArray = JSON.parse(localStorage.getItem("todoList"));

  return todoListArray;
}

export function setTodoList(array) {
  localStorage.removeItem("todoList");
  localStorage.setItem("todoList", JSON.stringify(array));
}
