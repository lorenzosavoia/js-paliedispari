// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari
// Dichiariamo chi ha vinto
// (corrispondenza tra scelta pari e dispari e somma pari o dispari)
// In un secondo momento creiamo delle funzioni per i numeri random e per il check pari dispari

const pari = document.querySelector(".pari");
const dispari = document.querySelector(".dispari");
const container = document.querySelector(".container");

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function evenFunction(sum1, number1, computer1) {

    if (sum1 % 2 == 0) {
        container.innerHTML = `<h1>User ${number1} Pc ${computer1} Sum ${sum1} u win</h1>`
    } else {
        container.innerHTML = `<h1>User ${number1} Pc ${computer1} Sum ${sum1} u lose</h1>`
    }
}

function oddFunction(sum1, number1, computer1) {

    if (sum1 % 2 == 1) {
        container.innerHTML = `<h1>User ${number1} Pc ${computer1} Sum ${sum1} u win</h1>`
    } else {
        container.innerHTML = `<h1>User ${number1} Pc ${computer1} Sum ${sum1} u lose</h1>`
    }
}


pari.addEventListener("click", function () {

    let number = parseInt(prompt("inserisci un numero da 1 a 5"))
    while (number > 5 || number < 1) {
        number = parseInt(prompt("il numero dev'eseere da 1 a 5"))
        console.log(number);
    }


    const computer = getRndInteger(1, 5);
    let sum = computer + number;

    evenFunction(sum, number, computer);


})

dispari.addEventListener("click", function () {

    let number = parseInt(prompt("inserisci un numero da 1 a 5"))
    while (number > 5 || number < 1) {
        number = parseInt(prompt("il numero dev'eseere da 1 a 5"))
    }
    const computer = getRndInteger(1, 5);
    let sum = computer + number;


    oddFunction(sum, number, computer)
})