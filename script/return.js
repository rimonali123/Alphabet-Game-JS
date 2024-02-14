function play(){
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-Ground');

    setTextElementValueById('current-score', 0);
    setTextElementValueById('current-life', 5);

    continueGame()
}

function gameOver(){
    hideElementById('play-Ground');
    showElementById('final-score');

    const score = getTextElementValueById('current-score');
    console.log(score)
    setTextElementValueById('score', score)

    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColor(currentAlphabet)
}

function continueGame(){
const alphabet = getRandomAlphabet();
console.log(alphabet);
const currentAlphabetElement = document.getElementById('current-alphabet');
currentAlphabetElement.innerText = alphabet;
setBackgroundColor(alphabet)

}

function handleByKeyboardPress(){
    const playerPressed = event.key;

    if(playerPressed === 'Escape'){
        gameOver()
    }
    // console.log('player pressed', playerPressed)

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expendAlphabet)

    if(playerPressed  === expectAlphabet){
        const currentScore = getTextElementValueById('current-score');
        const updateScore = currentScore + 1;
        setTextElementValueById('current-score', updateScore);

         // step new round
         removeBackgroundColor(expectAlphabet)
         continueGame();


        // --------------------------------------------------
        // console.log('you got a pont')
        // // step -1 get the current score
        // const currentScoreElement = document.getElementById('current score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText)
        // console.log(currentScore);

        // // step-2 increase / deployment score
        // const newScore = currentScore + 1;

        // // step-3 update the new score
        // currentScoreElement.innerText = newScore;

        //  // step new round
        //  removeBackgroundColor(expectAlphabet)
        //  continueGame();
    }
    else{
        const currentLife = getTextElementValueById('current-life');
        const updateLife = currentLife - 1;
        setTextElementValueById('current-life', updateLife);
        

        if(updateLife === 0){
           gameOver()
        }

        // ------------------------------------------------
        // console.log('you lost a life')
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // const newLife = currentLife - 1;
        // currentLifeElement.innerText = newLife;
    }
}
document.addEventListener('keyup', handleByKeyboardPress)