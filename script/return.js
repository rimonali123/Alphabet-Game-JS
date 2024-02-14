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

function handleByKeyboardPress(){
    const playerPressed = event.key;
    // console.log('player pressed', playerPressed)

    const currentAlphabetElement = document.getElementById('current-operand');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expendAlphabet)

    if(playerPressed  === expectAlphabet){
        console.log('you got a pont')
        // step -1 get the current score
        const currentScoreElement = document.getElementById('current score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText)
        console.log(currentScore);

        // step-2 increase / deployment score
        const newScore = currentScore + 1;

        // step-3 update the new score
        currentScoreElement.innerText = newScore;

        // step new round
        removeBackgroundColor(expectAlphabet)
        continueGame();
    }
    else{
        console.log('you lost a life')
    }
}
document.addEventListener('keyup', handleByKeyboardPress)