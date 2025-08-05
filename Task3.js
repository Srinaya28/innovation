let tasks = [];
function addTask(task, callback) {
  tasks.push(task);
  callback();
}
function printTasks() {
  console.log("Current Tasks:", tasks);
}
addTask("Learn JavaScript", () => printTasks());
addTask("Build a project", () => printTasks());
function addMultipleTasks(...newTasks) {
  tasks.push(...newTasks);
  printTasks();
}
addMultipleTasks("Read docs", "Watch tutorial");
let globalVar = "I'm global";
function scopeEx() {
  let localVar = "I'm local";
  console.log(globalVar);
  console.log(localVar);
}
scopeEx();
