const input = document.querySelector('.input-tarea');
const addButton = document.querySelector('.add-button');
const taskList = document.querySelector('.task-list');
const mainTaskContainer = document.querySelector('.main-task-container');
const mainContainer = document.querySelector('main');

let id = 1;

function handleSubmit(event) {
    event.preventDefault();
    if(input.value !== ''){

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('name', `tarea${id}`);
    checkbox.setAttribute('type', 'checkbox');

    const label = document.createElement('label');
    label.setAttribute('for', `tarea${id}`);
    label.innerText = input.value;
    input.value = '';

    const lineaDivisoria = document.createElement('hr');

    id = id + 1;

    mainTaskContainer.appendChild(taskContainer);
    taskContainer.appendChild(checkbox);
    taskContainer.appendChild(label);
    mainTaskContainer.appendChild(lineaDivisoria)

    
if(id === 2){
        const deleteButton = document.createElement('div');
        deleteButton.classList.add('delete-button');

        const buttonDelete = document.createElement('button');
        buttonDelete.innerHTML = 'Delete all done';

        mainContainer.appendChild(deleteButton);
        deleteButton.appendChild(buttonDelete);

        }
    }
}

addButton.addEventListener('click', handleSubmit)