const neww = [];
function addTask() {
    const taskInput = document.querySelector('.todo');
    const dateInput = document.querySelector('.mmm');

    const taskName = taskInput.value;
    const dueDate = dateInput.value;


    const taskObject = {
        task: taskName,
        date: dueDate
    };

    neww.push(taskObject);

    taskInput.value = '';
    dateInput.value = '';

    updateTodoList();




}
function updateTodoList() {
    let newhtml = '';
    for (let i = 0; i < neww.length; i++) {
        const taskItem = neww[i];
        newhtml = newhtml + `<p>
        ${taskItem.task}-<small>-${taskItem.date}</small>
        <button onClick="deleteTask(${i})">Delete</button></p>`;

    }
    document.querySelector('.todolist').innerHTML = newhtml;

}

function deleteTask(index) {
    neww.splice(index, 1);
    updateTodoList();
}