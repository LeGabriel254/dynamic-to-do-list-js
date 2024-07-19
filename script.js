//  Event Listener for Page Load
document.addEventListener('DOMContentLoaded', (Event) => {
  // My code
  const form = document.getElementById('To-Do List Appplication');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
  })
})

// Add Task Button
const addbutton = document.getElementById('add-task-btn','addButton');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// An addTask Function
function addTask(){
const addTask= taskInput.Value.trim();
  if (taskText === "");{
    alert('Please enter a task');
    return;

  }

}