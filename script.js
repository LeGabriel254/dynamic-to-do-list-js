document.addEventListener('DOMContentLoaded', (Event) => {
  // My code
  const form = document.getElementById('To-Do List Appplication');

  form.addEventListener('AddTask', function(e) {
    e.preventDefault();
  })
})

const addButton = document.getElementById('add-button');
        const taskInput = document.getElementById('task-input');
        const taskList = document.getElementById('task-list');

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
            taskList.add(li);
            taskInput.value = "";
        }

        addButton.addEventListener('click', addTask);
        taskInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                addTask();
            }
        });

        document.addEventListener('DOMContentLoaded', function() {
            addTask();
        });