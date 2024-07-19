document.addEventListener('DOMContentLoaded', (Event) => {
  // My code
  const form = document.getElementById('To-Do List Appplication');
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

// event
  form.addEventListener('submit', function(e) {
    e.preventDefault();
  })

  // AddTask creation function      
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }
    const li = document.createElement('li');
    li.textContent = taskText;
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.className = 'remove-btn';
    removeButton.onclick = function() {
        taskList.removeChild(li);
    };
    li.appendChild(removeButton);
    classList.add(li);
    taskInput.value = "";
}


// this will disable reload on click
addButton.addEventListener('click', function(e) {
    e.preventDefault();
    addTask();
});


taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        addTask();
    }
});

// document.addEventListener('DOMContentLoaded', function() {
//     addTask();
// });
})

