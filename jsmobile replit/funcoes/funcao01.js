function somar(n1, n2)
const res = n1 + n2
console.log(res)



function calculadora2(n1, n2) {
  if (typeof n1 === "number" && typeof n2 === "number") {
    const res = n1 + n2;
    console.log("total: " + res)
  } else { 
    console.log("erro") 
  }
}
calculadora2(1, 2)
calculadora2("carro", 2)