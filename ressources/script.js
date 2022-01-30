const createTaskElement = (function() {
  let newTaskId = 1;
  return function(task) {
    const container = document.createElement("div");
    container.classList.add("TaskItem");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `task-${newTaskId}-done`;
    checkbox.classList.add("TaskItem-checkbox");

    const label = document.createElement("label");
    label.setAttribute("for", checkbox.id);
    label.classList.add("TaskItem-title");
    label.textContent = task;
    
    const done = document.createElement('span');
    done.textContent = ' (fait)';
    done.classList.add('Hidden', 'TaskItem-doneText', 'ScreenReaderOnly');
    label.append(done);

    const button = document.createElement("button");
    button.type = "button";
    button.title = `Supprimer ${task}`;
    button.classList.add("TaskItem-deleteButton");
    button.textContent = "Supprimer";

    container.append(checkbox, label, button);
    newTaskId++;

    return container;
  };
})();

const addTaskInList = (taskElement, listElement) => {
  const li = document.createElement("li");
  li.append(taskElement);
  listElement.append(li);
};

const initTaskList = (tasks, listElement) => {
  tasks.forEach(task => addTaskInList(createTaskElement(task), listElement));
};

const taskList = document.querySelector(".TaskList");
const newTaskForm = document.querySelector(".NewTaskForm");
const newTaskInput = newTaskForm.querySelector('[name="new-task-name"]');

initTaskList(
  [
    "Révisions HTML/CSS",
    "Créer une liste de tâches avec du JS classique",
    "Apprendre des syntaxes JS avancées"
  ],
  taskList
);

newTaskForm.addEventListener("submit", event => {
  event.preventDefault();

  const task = newTaskInput.value;
  if (!task) {
    return;
  }
  addTaskInList(createTaskElement(task), taskList);
});

taskList.addEventListener("click", event => {
  if (event.target.classList.contains("TaskItem-deleteButton")) {
    event.target.closest("li").remove();
  }
  if (event.target.classList.contains("TaskItem-checkbox")) {
    const checked = event.target.checked;
    const currentTask = event.target.closest('.TaskItem');
    currentTask.classList.toggle('TaskItem--done', checked);
    currentTask.querySelector('.TaskItem-doneText').classList.toggle('Hidden', !checked);
  }
});
