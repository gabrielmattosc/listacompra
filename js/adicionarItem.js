import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const item = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");

export function adicionarItem(evento) {
    evento.preventDefault();
  
    // Verifica se o input está vazio
    if (item.value.trim() === "") {
        alert("Por favor, insira um item válido!");
        return;
      }

    const itemDaLista = criarItemDaLista(item.value, listaDeCompras);
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);

    // Limpa o input
    item.value = "";
    
  }