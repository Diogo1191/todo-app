export let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
export let filtroAtual = "todas"
export function setFiltroAtual(novoFiltro){
    filtroAtual = novoFiltro
}

export function removerTarefa(tarefa){
    tarefas = tarefas.filter(t => t !== tarefa)
}