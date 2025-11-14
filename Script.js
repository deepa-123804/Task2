const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', function () {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <button class="delete-btn">X</button>
  `;

  li.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-btn')) return;
    li.classList.toggle('completed');
  });

  li.querySelector('.delete-btn').addEventListener('click', function () {
    li.remove();
  });

  taskList.appendChild(li);
  taskInput.value = '';
});
