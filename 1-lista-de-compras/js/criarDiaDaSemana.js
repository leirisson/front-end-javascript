


export function gerarDiaDaSemana(){
  const diaDaSemana = new Date().toLocaleDateString('pt-BR', {
    weekday: "long",
  })
  const horario = new Date().toLocaleTimeString('pt-BR', { hour: 'numeric', minute: 'numeric' })
  const data = new Date().toLocaleDateString('pt-BR')
  const dataCompleta = `${diaDaSemana} ${data} às ${horario}`

  return dataCompleta
}