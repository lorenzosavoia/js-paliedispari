// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// (prima senza funzione e poi con funzione)

const userWord = prompt(`scrivi la parola che credi sia palindroma: `).replaceAll(" ", "");
// console.log(userWord);

const word = userWord.toLowerCase();
// console.log(word);

const wordReverse = userWord.split("").reverse().join("").toLowerCase();
// console.log(wordReverse);

if (word === wordReverse) {
    console.log('true')
}
else {
    console.log('false')
}