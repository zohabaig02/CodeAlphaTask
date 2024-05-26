function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <span onclick="toggleTask(this)">${taskInput.value}</span>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(taskItem);
    taskInput.value = '';
}

function toggleTask(taskElement) {
    taskElement.parentElement.classList.toggle('completed');
}

function deleteTask(buttonElement) {
    buttonElement.parentElement.remove();
}
