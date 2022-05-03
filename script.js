let input = document.getElementById('input-tarefa')
//o que a pessoa escreveu
let tarefas = document.getElementById('tarefas')
//div onde aparece as tarefas

function addTarefa(){
    if(input.value === ''){
        return ''
    }
    else{
        tarefas.innerHTML += `
        <div class="task" id='task-remove'>
            <div id="task">
                <input type="checkbox">
                <textarea>${input.value}</textarea>
            </div>
            <img src="imagens/mais.png" onclick='removeTask()'>
        </div>
            `
    }

    input.value = ''//tirar o texto do input depois de ser adicionado
}

function removeTask(){
    let taskRemove = document.getElementById('task-remove')

    if(taskRemove.parentNode){
        taskRemove.parentNode.removeChild(taskRemove)
    }
}


function duvidas(){
    let duvida = document.getElementById('duvida-container')

    duvida.classList.toggle('active')
}
    