function dizOla() {
  alert("Ola")
}
function olaPessoa(nome){
  alert("Ola " + nome)
}
const nome = "Luiz "
const sobrenome = "Savulski "
const idade = 16

function dadosPessoa(){
  const dados = nome+sobrenome+idade
  console.log(dados)
}
//invocação de função 
dizOla()
olaPessoa("Luiz")
dadosPessoa()
