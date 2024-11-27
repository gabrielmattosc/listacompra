const listaComprados = document.getElementById("lista-comprados");

export function verificarListaComprados(lista) {

    if (lista.childElementCount === 0) {
        listaComprados.style.display = "none";
    } else {
        listaComprados.style.display = "block";
    }
}