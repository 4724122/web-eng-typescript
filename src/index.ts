const todos = [
    { id: 1, title: "型を復習する", completed: true },
    { id: 2, title: "配列を学ぶ", completed: false },
    { id: 3, title: "レポートを書く", completed: true },
    { id: 4, title: "課題に挑戦する", completed: true},
    { id: 5, title: "第5回の内容を見直す", completed: false}
];


for (const todo of todos) {
    const status = todo.completed ? "完了" : "未完了";
    console.log(`${todo.id}: ${todo.title} [${status}]`);
}

const completedBefore = todos.filter((todo) => todo.completed).length;

for (const todo of todos) {
    if (todo.completed === false) {
        todo.completed = true;
        console.log(`更新後: ${todo.title} [完了]`);
    }
}

const completedAfter = todos.filter((todo) => todo.completed).length;
console.log(`完了件数: 更新前 ${completedBefore}件 -> 更新後 ${completedAfter}件`);

