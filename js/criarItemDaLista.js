import { editarItem } from "./editarItem.js";
import { excluirItem } from "./excluirItem.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const listaComprados = document.getElementById("lista-comprados");
let contador = 0;

export function criarItemDaLista (item, listaDeCompras) {
    
      // Cria o elemento <li> com a classe estilizada
      const itemDaLista = document.createElement("li");
      const containerItemLista = document.createElement("div") // ----------> NÃO existia, então o "li" está sendo usando inves da DIV...
      containerItemLista.classList.add("item-lista-container"); // Garante que a classe seja aplicada
    
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
        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo");
  
        if (checkboxInput.checked){
          checkboxCustomizado.classList.add("checked");
          itemTitulo.style.textDecoration = "line-through";
          listaComprados.appendChild(itemDaLista)
        } else {
          checkboxCustomizado.classList.remove("checked");
          itemTitulo.style.textDecoration = "none";
          listaDeCompras.appendChild(itemDaLista)
        }
        verificarListaVazia(listaDeCompras);
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
      nomeDoItem.id = "item-titulo";
      nomeDoItem.innerText = item;
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
      
      botaoRemover.addEventListener("click", function(){
        excluirItem(itemDaLista);
      })

      botaoRemover.appendChild(imagemRemover);
    
    
      // Botão de editar
      const botaoEditar = document.createElement("button");
      botaoEditar.classList.add("botao-acao");
      const imagemEditar = document.createElement("img");
      imagemEditar.src = "image/Edição.svg";
      imagemEditar.alt = "Editar item";

      botaoEditar.addEventListener("click", function(){
        editarItem(itemDaLista);
      })

      botaoEditar.appendChild(imagemEditar);
    
      
      // Adiciona os botões ao container
      containerBotoes.appendChild(botaoRemover);
      containerBotoes.appendChild(botaoEditar);
    
      // Monta o item completo
      containerItemLista.appendChild(containerNomeDoItem);
      containerItemLista.appendChild(containerBotoes);
    
      const itemData = document.createElement("p");
      itemData.innerText = `${new Date().toLocaleDateString("pt-br", {weekday: "long"})} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-br", {hour: "numeric", minute: "numeric"})}`;
      itemData.classList.add("texto-data");
      
      itemDaLista.appendChild(containerItemLista);
      itemDaLista.appendChild(itemData);


      return itemDaLista;
}