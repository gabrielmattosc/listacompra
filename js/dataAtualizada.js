export function dataAtualizada () {

    return `${new Date().toLocaleDateString("pt-br", {weekday: "long"})} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-br", {hour: "numeric", minute: "numeric"})}`;

}