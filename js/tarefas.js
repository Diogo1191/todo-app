import { tarefas, removerTarefa } from "./state.js"
import { renderizarTarefas } from "./ui.js"

export function criarTarefa(tarefa){
    const li = document.createElement("li")
 
    const deleteButton = document.createElement("button")
    const concluidaButton = document.createElement("button")
    const editarButton = document.createElement("button")
    const texto = document.createElement("span")
    const buttonsContainer = document.createElement("div")
    const listaTarefas = document.getElementById("listaTarefas")

    
    buttonsContainer.appendChild(editarButton)
    buttonsContainer.appendChild(concluidaButton)
    buttonsContainer.appendChild(deleteButton)

    buttonsContainer.classList.add("buttonContainer")

    texto.textContent = tarefa.texto
    li.appendChild(texto)

    deleteButton.textContent = "Apagar"
    concluidaButton.textContent = tarefa.concluida ? "Desmarcar" : "Concluir"
    editarButton.textContent = "Editar"
    
    deleteButton.addEventListener("click", function(){
        li.remove()
        removerTarefa(tarefa)
        localStorage.setItem("tarefas", JSON.stringify(tarefas))
        renderizarTarefas()
    })

    concluidaButton.addEventListener("click", function(){
        tarefa.concluida = !tarefa.concluida
        li.classList.toggle("concluida")
        localStorage.setItem("tarefas", JSON.stringify(tarefas))
        renderizarTarefas()
    })

    editarButton.addEventListener("click", function(){
        editarTarefa(tarefa)
    })

    deleteButton.classList.add("deleteButton")
    concluidaButton.classList.add("concluidaButton")
    
    li.appendChild(buttonsContainer)
    
    if(tarefa.concluida){
        li.classList.add("concluida")
    }


    listaTarefas.appendChild(li)
}

function editarTarefa(tarefa){
    const novoTexto = prompt("Editar Tarefa")
    if(novoTexto === null || novoTexto.trim() === ""){
        return
    }

    tarefa.texto = novoTexto.trim()
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
    renderizarTarefas()
}