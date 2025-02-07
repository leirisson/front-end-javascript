// selecionar os elementos 
const inputItem = document.querySelector("#input-item")
const elementBtn = document.querySelector("#adicionar-item")
let contador = 0


elementBtn.addEventListener('click', () => {

  const valorInput = inputItem.value
  if (!valorInput) {
    alert('por favor, insira um item !')
    return
  }


  // contruindo elementos dinamicamente 
  const itemDaLista = document.createElement('li')
  const containerItemDaLista = document.createElement('div')
  containerItemDaLista.classList.add('lista-item-container')

  const checkboxItem = document.createElement('input')
  checkboxItem.type = 'checkbox'
  checkboxItem.id = 'chebox-' + contador++

  const nomeItem = document.createElement('p')
  nomeItem.textContent = valorInput

  // VAI SER ADICIONADO O 
  // itemDaLista.appendChild()
})

