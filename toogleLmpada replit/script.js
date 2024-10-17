//idemtificar os elementosdom(arvore html)
const btnTrocar = document.getElementById('btn-trocar')
const lampada = document.getElementById('lampada')
let baseURL = "https://f5b45ab5-0448-4f48-8522-98cd916f6498-00-1ngktw8gj2p4r.worf.replit.dev/"

btnTrocar.addEventListener('click', function() {
  //alert(lampada.src == baeURL + "lampada00.png")
  if (lampada.src == baseURL + "lampada00.png") {
    lampada.src = "lampada02.png"
  } else {
    lampada.src = "lampada00.png"
  }
})