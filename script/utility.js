function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');

}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');

}

function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz/';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random()*26;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    // console.log(alphabet)
    return alphabet;
}

function setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}
function removeBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
}



function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}
function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}