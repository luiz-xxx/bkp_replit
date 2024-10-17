//alert('OK')

const idade = 18;

if (idade >= 18) {
  console.log("Maior de idade");
}
else if (idade < 18) {
  console.log("Menor de idade");
}
else {
  console.log("Idade inválida");
}

//refatoração:refazer com melhorias
//if , if para if/ else if
//CASE SENSITIV - maiuscula diferem de minuscula
/**
*PROMPT("DAKDJFAKD")!!!
*escreva um codigo que pergunte qual a cor favorita, se for vermelho, imprima "vermelho", e se for azul, imprima "azul"
*SENÃO não conheço essa cor
*/

const cor = prompt("Qual a sua cor favorita? ")
if (cor == "vermelho") {console.log("Vermelho")} 
else if (cor == "azul") {console.log("azul") }
else {console.log("não conheço essa cor") }

console.log(cor.length)//comprimento da string





