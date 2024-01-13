function webDom(){
    const mainContent = document.querySelector('.main-content');
    const form = document.querySelector('.form');
    const taskList = document.createElement('ol');

    // Add new task?
    form.addEventListener(
        'submit',
        (e) => {
            e.preventDefault();
            const newTaskValue = form.querySelector('#new-task').value.trim();

            if (newTaskValue !== ''){
                const newTask = document.createElement('li');

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';

                const label = document.createElement('label');
                label.textContent = newTaskValue;

                const buttonDelete = document.createElement('button');
                buttonDelete.textContent = 'Delete';
                buttonDelete.classList.add('delete');

                newTask.appendChild(checkbox);
                newTask.appendChild(label);
                newTask.appendChild(buttonDelete);
                taskList.appendChild(newTask);
                mainContent.appendChild(taskList);
                form.reset();
            }
        }
    )
    
    // Delete task?
    document.addEventListener(
        'click',
        (e) => {
            const element = e.target;
            const classDelete = element.classList.contains('delete');

            if (classDelete){
                const listItem = element.parentNode;
                taskList.removeChild(listItem);
            }
        }
    )

    // Done task?
    document.addEventListener(
        'change',
        (e) => {
            const element = e.target;

            if(element.type === 'checkbox'){
                const label = element.nextElementSibling;
                label.innerHTML = element.checked ? `<del>${label.textContent}</del>` : label.textContent;
            }
        }
    )
};

webDom();

