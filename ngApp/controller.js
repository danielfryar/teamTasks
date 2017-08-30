class taskController {
  contructor() {
this.tasks = [
  {taskName:'Get Milk', todo: true},
  {taskName:'Walk Dog', todo: true},
  {taskName: 'Wash Dishes', todo: true}
]}};

// addTask(newTaskName) {
//   this.task.push({
//     name: newTaskName;
//   })
// }
// }};

angular.module('teamTasksApp').controller('taskController', taskController);
