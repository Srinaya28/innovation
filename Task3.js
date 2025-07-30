let tasks = [];

function addTask(task, callback) {
  tasks.push(task);
  callback();
}

function printTasks() {
  console.log("Current Tasks:", tasks);
}

// Using arrow functions
addTask("Learn JavaScript", () => printTasks());
addTask("Build a project", () => printTasks());

// Arbitrary arguments
function addMultipleTasks(...newTasks) {
  tasks.push(...newTasks);
  printTasks();
}

addMultipleTasks("Read docs", "Watch tutorial");

// Variable Scope
let globalVar = "I'm global";

function scopeExample() {
  let localVar = "I'm local";
  console.log(globalVar);
  console.log(localVar);
}

scopeExample();
