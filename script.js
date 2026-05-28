let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span class="${task.completed ? "completed" : ""}" onclick="toggleTask(${index})">
        ${task.text}
      </span>

      <button onclick="deleteTask(${index})">Delete</button>
    `;

    taskList.appendChild(li);
  });
}

function addTask() {
  const taskInput = document.getElementById("taskInput");

  if(taskInput.value.trim() === "") return;

  tasks.push({
    text: taskInput.value,
    completed:false
  });

  saveTasks();
  renderTasks();

  taskInput.value = "";
}

function deleteTask(index) {
  tasks.splice(index,1);

  saveTasks();
  renderTasks();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;

  saveTasks();
  renderTasks();
}

renderTasks();