const input = document.querySelector('.input-tarea');
const addButton = document.querySelector('.add-button');
const taskList = document.querySelector('.task-list');
const mainTaskContainer = document.querySelector('.main-task-container');
const mainContainer = document.querySelector('main');
const noHayTareas = document.querySelector('.no-tasks');

let id = 1;
let title = ``;
let completed = false;
let taskArr = [];
let newTask = {};

let checkedTasks = [];

function handleSubmit(event) {
    event.preventDefault();
    if(input.value !== ''){
    
    noHayTareas.classList.remove('no-tasks');
    noHayTareas.classList.add('si-tasks');

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');

    const checkbox = document.createElement('input');
    checkbox.classList.add(`checkbox${id}`);
    checkbox.setAttribute('id', id);
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('name', `tarea${id}`);
    checkbox.setAttribute('type', 'checkbox');
    checkbox.addEventListener('change', function handleCheckTask() {
        if (checkbox.checked) {
            checkbox.classList.add('checked');
            label.classList.add('checked');
            lineaDivisoria.classList.add('checked');
            checkedTasks.push(
                taskText)
            console.log(checkedTasks);
            } else {
            checkbox.classList.remove('checked');
            label.classList.remove('checked');
            lineaDivisoria.classList.remove('checked');
            indice = checkedTasks.indexOf(taskText);
            if (indice !== -1 ) {
                checkedTasks.splice(indice, 1);
            }
            console.log(checkedTasks);
        } 
    
    })

    //creación del label
    const label = document.createElement('label');
    label.classList.add(`checkbox${id}`);
    label.setAttribute('for', `tarea${id}`);
    label.innerText = input.value;
    const taskText = input.value.trim();
    input.value = '';

    //creación de la colección de objetos
    newTask = {id, title: taskText, completed};
    taskArr.push(newTask);
    console.log(taskArr);

    

    const lineaDivisoria = document.createElement('hr');
    lineaDivisoria.classList.add(`linea${id}`);

    id = id + 1;

    mainTaskContainer.appendChild(taskContainer);
    taskContainer.appendChild(checkbox);
    taskContainer.appendChild(label);
    taskContainer.appendChild(lineaDivisoria)

    
if(id === 2){
        const deleteButton = document.createElement('div');
        deleteButton.classList.add('delete-button');
        deleteButton.classList.remove('hide-button')

        const buttonDelete = document.createElement('button');
        buttonDelete.innerHTML = 'Delete all done';

        mainContainer.appendChild(deleteButton);
        deleteButton.appendChild(buttonDelete);

        deleteButton.addEventListener('click', function handleDelete(){
                const checkedBoxes = document.querySelectorAll('.checked');
                //console.log(checkedBoxes);
                checkedBoxes.forEach(function(checkbox) {
                    const listItem = checkbox.parentNode;
                    if (listItem !== null && listItem.parentNode !== null) {
                        listItem.parentNode.removeChild(listItem);
                    }
                })
                checkedTasks=[]; 

                if(mainTaskContainer.childElementCount === 0){
                    taskArr = [];
                    id = 1;
                    buttonDelete.style.display = 'none';
                    noHayTareas.classList.add('no-tasks');
                    noHayTareas.classList.remove('si-tasks');
                    }else {
                        buttonDelete.style.display = 'block';
                    }
            })
        

        }
    }


}



addButton.addEventListener('click', handleSubmit)
