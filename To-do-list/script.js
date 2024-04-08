document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const dateTime = document.getElementById('dateTime');

    function addTask(taskContent) {
        // Verifica se a tarefa já existe na lista
        const existingTasks = Array.from(taskList.querySelectorAll('li'));
        const taskExists = existingTasks.some(task => task.textContent.trim() === taskContent.trim());

        if (taskExists) {
            alert("Tarefa já adicionada");
            return; // Não adiciona a tarefa se ela já existir
        }

        // ADICIONA a tarefa à lista
        const li = document.createElement('li');
        li.textContent = taskContent;
        taskList.appendChild(li);

        li.addEventListener('click', function () {

            if (confirm("Quer editar?")) {
                const newContent = prompt("Digite o novo conteúdo da tarefa:");
                const existingTasks = Array.from(taskList.querySelectorAll('li'));

                if (newContent !== null) {
                    editTask(existingTasks.indexOf(li), newContent);
                }
            }
        });
    }

    // Função para EDITAR uma tarefa existente
    function editTask(taskIndex, newContent) {
        const tasks = Array.from(taskList.querySelectorAll('li'));
        const taskToUpdate = tasks[taskIndex];

        if (!taskToUpdate) {
            alert("Tarefa não encontrada");
            return;
        }

        taskToUpdate.textContent = newContent;
    }

    taskForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const taskContent = taskInput.value.trim();
        if (taskContent !== '') {
            addTask(taskContent);
            taskInput.value = '';
        }
    });
});


// Função para REMOVER uma tarefa

function removeTask(taskIndex) {
    const tasks = Array.from(taskList.querySelectorAll('li'));
    const taskToRemove = tasks[taskIndex];
    const tarefaRemovida = prompt("Qual tarefa você gostaria de remover?")

    if (confirm("Quer excluir?")) {
        const existingTasks = Array.from(taskList.querySelectorAll('li'));

        removeTask(existingTasks.indexOf(li) == tarefaRemovida);

        console.log(taskList)
    }
}



// Função para LISTAR TODAS as tarefas




// Atualizar hora a cada minuto
function updateDateTime() {
    const now = new Date();
    const formattedDateTime = now.toLocaleString('pt-BR');
    dateTime.textContent = formattedDateTime;
}

// Chamar a função para atualizar a hora inicialmente
updateDateTime();

// Chamar a função a cada minuto
setInterval(updateDateTime, 60000);
