const userWord = prompt("Immetti una parola");

function checkPalindromeWord(userWord) {
    
    const length = userWord.length;

    for (let i = 0; i < length / 2; i++) {

        if (userWord[i] !== userWord[length - 1 - i]) {
            return "Non è palindroma!";
        }
    }
    return "È palindroma!";
}

const result = checkPalindromeWord(userWord);

console.log(result);