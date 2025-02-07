const mensagemListaVazia = document.querySelector('.mensagem-lista-vazia')


export function verificarListaVazia(listaDeCompras){
  const itensDalista = listaDeCompras.querySelectorAll('li')
 
  if(itensDalista.length === 0){
    mensagemListaVazia.style.display='block'
  } else {
    mensagemListaVazia.style.display='none'
  }

}
