import { itemDaLista } from "./criarItemNaLista.js"
import { verificarListaVazia } from "./verificarListaVazia.js"

const listaDeCompras = document.querySelector("#lista-de-compras")
const elementBtn = document.querySelector("#adicionar-item")


elementBtn.addEventListener('click', (evento) => {
  evento.preventDefault()

  listaDeCompras.appendChild(itemDaLista())
  
  verificarListaVazia(listaDeCompras)

})

verificarListaVazia(listaDeCompras)