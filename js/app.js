import { renderizarTarefas } from "./ui.js";
import { tarefas } from "./state.js";

const tarefaInput = document.getElementById("tarefaInput")
const tarefaButton = document.getElementById("tarefaButton")


tarefaInput.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        tarefaButton.click()
    }
})

tarefaButton.addEventListener("click", enviar)

function enviar(){
    const tarefa = tarefaInput.value.trim()
    
    if(tarefa === ""){
        return
    }
    
    const novaTarefa = {
        texto: tarefa,
        concluida: false
    }

    tarefas.push(novaTarefa)

    localStorage.setItem("tarefas", JSON.stringify(tarefas))

    tarefaInput.value = ""

    renderizarTarefas()
}

renderizarTarefas()