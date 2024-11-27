import { dataAtualizada } from "./dataAtualizada.js";

export const editarItem = (elemento) => {
    let novoItem = prompt("Digite o novo nome do item:");

    if (novoItem !== null && novoItem.trim() !== "") {
        const itemTextoAtulizado = elemento.querySelector("#item-titulo");
        itemTextoAtulizado.textContent = novoItem;

        const estavaComprado = elemento.querySelector(".checkbox-input").checked;

        if (estavaComprado) {
            elemento.querySelector(".checkbox-input").checked = true;
            elemento.querySelector(".checkbox-customizado").classList.add("checked");
            itemTextoAtulizado.style.textDecoration = "line-through";
        }
    }
    
    const dataDeCriacao = elemento.querySelector(".texto-data");
        dataDeCriacao.textContent = dataAtualizada();

}