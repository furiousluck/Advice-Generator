const dice = document.getElementById('dice');
const adviceNum = document.getElementById('advice-number');
const advice = document.querySelector('.advice-text');

window.onload = showQuote();


dice.addEventListener('click', function () {
    showQuote();
});


function showQuote(){
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then((data)=>data.slip)
    .then((data)=>{
        console.log(data.id,data.advice);
        adviceNum.textContent = data.id;
        advice.textContent = data.advice;
    })
    .catch((error)=>{
        alert(`Error: ${error}`);
    })
}