//identificar elementos html
const menu = document.querySelector('.menu');
const vermelho = document.querySelector('#vermelho');
const azul = document.querySelector('#azul');
const verde = document.querySelector('#verde');
const amarelo = document.querySelector('#amarelo');
const box = document.querySelector('.box');
const texto = document.querySelector('#texto');

//manipular esses elementos
vermelho.addEventListener('click', function() {
  box.style.backgroundColor = "#a80000";
  texto.style.color = "#ffa8a8";
})

azul.addEventListener('click', function() {
  box.style.backgroundColor = "#0800a1";
  texto.style.color = "#6e75ff";
})

verde.addEventListener('click', function() {
  box.style.backgroundColor = "#1d6e00";
  texto.style.color = "#a0ff7d";
})

amarelo.addEventListener('click', function() {
  box.style.backgroundColor = "#b89900";
  texto.style.color = "#fbff7d";
})
