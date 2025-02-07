import {gerarDiaDaSemana} from './criarDiaDaSemana.js'
const inputItem = document.querySelector("#input-item")
let contador = 0


export function itemDaLista(){
  const valorInput = inputItem.value
  if (!valorInput) {
    alert('por favor, insira um item !')
    return
  }

  const itemDaLista = document.createElement('li')
  const containerItemDaLista = document.createElement('div')
  containerItemDaLista.classList.add('lista-item-container')

  const checkboxItem = document.createElement('input')
  checkboxItem.type = 'checkbox'
  checkboxItem.id = 'chebox-' + contador++
  const nomeItem = document.createElement('p')
  nomeItem.textContent = valorInput

  checkboxItem.addEventListener('click', () => {
    if (checkboxItem.checked) {
      nomeItem.style.textDecoration = "line-through"
    } else {
      nomeItem.style.textDecoration = "none"
    }
  })

  const itemData = document.createElement('p')
  itemData.classList.add('texto-data')

  itemData.textContent = gerarDiaDaSemana()

  // aninhando itens da lista
  containerItemDaLista.appendChild(checkboxItem)
  containerItemDaLista.appendChild(nomeItem)
  itemDaLista.appendChild(containerItemDaLista)
  itemDaLista.appendChild(itemData)
 
  return itemDaLista
}