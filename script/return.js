function play(){
    hideElementById('home-screen');
    showElementById('play-Ground');
    continueGame()
}

function continueGame(){
const alphabet = getRandomAlphabet();
console.log(alphabet);
const currentAlphabetElement = document.getElementById('current-operand');
currentAlphabetElement.innerText = alphabet;
setBackgroundColor(alphabet)

}