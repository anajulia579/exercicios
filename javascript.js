
const tarefas = ["Estudar JavaScript", "Fazer exercícios", "Ler um livro"];


function listarTarefas() {
    console.log("Tarefas:");
    for (let i = 0; i < tarefas.length; i++) {
        console.log((i + 1) + ". " + tarefas[i]);
    }
}


function adicionarTarefa(novaTarefa) {
    tarefas.push(novaTarefa);
    console.log(TarefaAdicionada= "${novaTarefa}");
    listarTarefas(); // Chama a função para listar tarefas atualizadas
}


function removerTarefa(indice) {
    if (indice >= 0 && indice < tarefas.length) {
        const tarefaRemovida = tarefas.splice(indice, 1);
        console.log(Tarefaremovida= "${tarefaRemovida}");
        listarTarefas(); // Chama a função para listar tarefas atualizadas
    } else {
        console.log("Índice inválido! Tente novamente.");
    }
}


listarTarefas(); // Lista as tarefas iniciais
adicionarTarefa("Fazer uma caminhada"); // Adiciona uma nova tarefa
removerTarefa(1); // Remove a segunda tarefa (índice 1)