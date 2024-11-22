const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados")
let contador = 0;
botaoSalvarItem.addEventListener("click", adicionarItem);

function adicionarItem(evento) {
    evento.preventDefault();
  
    // Verifica se o input está vazio
    if (item.value.trim() === "") {
      alert("Por favor, insira um item válido!");
      return;
    }
  
    // Cria o elemento <li> com a classe estilizada
    const itemDaLista = document.createElement("li");
    itemDaLista.classList.add("item-lista-container"); // Garante que a classe seja aplicada
  
    // Cria o container do nome e checkbox
    const containerNomeDoItem = document.createElement("div");
    containerNomeDoItem.classList.add("container-nome-compra");
  
    // Cria o checkbox
    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("checkbox-input");
    checkboxInput.id = "checkbox-" + contador++;
  
    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id);
    checkboxLabel.addEventListener("click", function (evento) {
      const checkboxInput = evento.currentTarget.querySelector(".checkbox-input");
      const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado");

      if (checkboxInput.checked){
        checkboxCustomizado.classList.add("checked")
      } else {
        checkboxCustomizado.classList.remove("checked")
      }
    })

    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado");
  
    // Monta o checkbox dentro do label
    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustomizado);
  
    // Adiciona o label ao container do nome/checkbox
    containerNomeDoItem.appendChild(checkboxLabel);
  
    // Cria o parágrafo com o texto do item
    const nomeDoItem = document.createElement("p");
    nomeDoItem.innerText = item.value;
    containerNomeDoItem.appendChild(nomeDoItem);
  
    // Cria o container dos botões (editar e remover)
    const containerBotoes = document.createElement("div");
    containerBotoes.classList.add("container-botoes");
    containerBotoes.classList.add("container-botao-acao");
  
    // Botão de remover
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("botao-acao");
    const imagemRemover = document.createElement("img");
    imagemRemover.src = "image/Excluir.svg";
    imagemRemover.alt = "Excluir item";
    botaoRemover.appendChild(imagemRemover);
  
  
    // Botão de editar
    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("botao-acao");
    const imagemEditar = document.createElement("img");
    imagemEditar.src = "image/Edição.svg";
    imagemEditar.alt = "Editar item";
    botaoEditar.appendChild(imagemEditar);
  
  
    // Adiciona os botões ao container
    containerBotoes.appendChild(botaoRemover);
    containerBotoes.appendChild(botaoEditar);
  
    // Monta o item completo
    itemDaLista.appendChild(containerNomeDoItem);
    itemDaLista.appendChild(containerBotoes);
  
    // Adiciona o item na lista
    listaDeCompras.appendChild(itemDaLista);
  
    // Limpa o input
    item.value = "";
  }