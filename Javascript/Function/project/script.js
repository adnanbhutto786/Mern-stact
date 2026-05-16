// Array
let tasks = [];


// Add Task Function
const addTask = () => {

    const input = document.getElementById("taskInput");

    const task = input.value;

    // Empty check
    if(task === ""){
        alert("Please enter a task");
        return;
    }

    // Push into array
    tasks.push(task);

    // Input clear
    input.value = "";

    // UI render
    renderTasks();
};



// Render Function
const renderTasks = () => {

    const taskList = document.getElementById("taskList");

    // Clear old UI
    taskList.innerHTML = "";

    // Loop
    tasks.forEach((task, index) => {

        taskList.innerHTML += `
        
            <li>
                ${task}

                <button 
                    class="delete-btn"
                    onclick="deleteTask(${index})"
                >
                    Delete
                </button>
            </li>

        `;
    });
};




// Delete Function
const deleteTask = (index) => {

    tasks.splice(index, 1);

    renderTasks();
};
