import { tarefas, filtroAtual, setFiltroAtual } from './state.js'
import { criarTarefa } from './tarefas.js'

const filtrosContainer = document.getElementById("filtrosContainer")
const todasFiltro = document.createElement("button")
const pendentesFiltro = document.createElement("button")
const concluidasFiltro = document.createElement("button")
const listaTarefas = document.getElementById("listaTarefas")


function atualizarContador(){
    const total = tarefas.length
    const pendentes = tarefas.filter(t => !t.concluida).length
    const concluidas = tarefas.filter(t => t.concluida).length

    todasFiltro.textContent = `Todas (${total})`
    pendentesFiltro.textContent = `Pendentes (${pendentes})`
    concluidasFiltro.textContent = `Concluidas (${concluidas})`
}


todasFiltro.addEventListener("click", function(){
    setFiltroAtual("todas")
    renderizarTarefas()
})

pendentesFiltro.addEventListener("click", function(){
    setFiltroAtual("pendentes")
    renderizarTarefas()
})

concluidasFiltro.addEventListener("click", function(){
    setFiltroAtual("concluidas")    
    renderizarTarefas()
})

export function renderizarTarefas(){
    let tarefasFiltradas 

    listaTarefas.innerHTML = ""

    todasFiltro.classList.remove("visivel")
    pendentesFiltro.classList.remove("visivel")
    concluidasFiltro.classList.remove("visivel")

    if(filtroAtual === "todas"){
    todasFiltro.classList.add("visivel")
    }

    if(filtroAtual === "pendentes"){
        pendentesFiltro.classList.add("visivel")
    }

    if(filtroAtual === "concluidas"){
        concluidasFiltro.classList.add("visivel")
    }

    atualizarContador()

    filtrosContainer.appendChild(todasFiltro)
    filtrosContainer.appendChild(pendentesFiltro)
    filtrosContainer.appendChild(concluidasFiltro)

    


    if(filtroAtual === "todas") tarefasFiltradas = tarefas
    if(filtroAtual === "pendentes") tarefasFiltradas = tarefas.filter(tarefa => !tarefa.concluida)
    if(filtroAtual === "concluidas") tarefasFiltradas = tarefas.filter(tarefa => tarefa.concluida)

    tarefasFiltradas.forEach(tarefa => {
        criarTarefa(tarefa)
    });
}

