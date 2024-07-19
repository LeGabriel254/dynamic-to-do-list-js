document.addEventListener('DOMContentLoaded', (Event) => {
  // My code
  const form = document.getElementById('To-Do List Appplication');

  form.addEventListener('AddTask', function(e) {
    e.preventDefault();
  })
})

// Add Task Button
const addbutton = document.getElementById('add-task-btn','addButton');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// An addTask Function
function addTask(){
const addTask= ["taskInput.value.trim()"]
  if (taskText === "");{
    alert('Please enter a task');
    return;
  }
  const li = document.createElement('li');
  li.textContent = taskText;
  const removeButton = document.createElement('button');
  removeButton.textContent = "Remove";
  removeButton.className = 'remove-btn';
    removeButton.onclick = function() {
        classList.removeChild(li);
    };
    li.appendChild(removeButton);
    classList.appendChild(li);
    taskInput.value = "";

}