import { fetchTodos, findTodo } from "./todo-service.js";

const loaded = await fetchTodos();
console.log(loaded);

const found = await findTodo();
console.log(`未完了件数： ${found}`);

