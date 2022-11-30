const userWord = prompt("Immetti una parola");

function checkPalindromeWord(word) {
    
    const length = userWord.length;

    for (let i = 0; i < length / 2; i++) {

        if (word[i] !== word[length - 1 - i]) {
            return "Non è palindroma!";
        }
    }
    return "È palindroma!";
}

const result = checkPalindromeWord(userWord);

console.log(result);


function oddOrEven(num) {
    if (num % 2 == 0){
        return "pari";
    } 
    return "dispari";
}

function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
} 

const userChoice = prompt("Pari o dispari?").toLocaleLowerCase().trim();
console.log("L'utente ha scelto " + userChoice);

const userNumber = parseInt(prompt("Scegli un numero"), 10);
console.log("L'utente ha scelto " + userNumber);

const pcNumber = getRandomNumber(1, 6);
console.log("Il PC ha scelto " + pcNumber);

const sum = userNumber + pcNumber;  

if (oddOrEven(sum) === userChoice){
    console.log("Hai vinto");
} else {
    console.log("Non hai vinto");
}