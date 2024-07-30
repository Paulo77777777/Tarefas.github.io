function getInputValue() {
  var campoTarefa = document.getElementById('campoTarefa')
  var inputElement = document.getElementById('myInput');
  var inputValue = inputElement.value;
  
  var quantidadeTarefas = document.querySelectorAll(".tarefa")
  
  var textLength = inputValue.length;
  
  if (textLength > 0 && textLength < 39 && quantidadeTarefas.length < 5) {
    
  var tarefa = document.createElement('div')
  
  
  var conteudoTarefa = `
    <div class="tarefa">
      ${inputValue}
    </div>
    <box-icon onclick="removerTarefa()" class="remover" color="red" type='solid' name='trash-alt'></box-icon>
  `
  
  tarefa.innerHTML = conteudoTarefa;
  campoTarefa.append(tarefa);  
  } else {
    alert('● O maximo de caracteres é 39.                                            ● O mínimo de caracteres é 1.                                                  ● Você atingiu o limite de 5 tarefas complete e retire algumas.')
  }
}

function removerTarefa(){
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove()
}