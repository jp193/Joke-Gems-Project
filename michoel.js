
const adviceDiv = document.querySelector('#facts')
const factButton = document.querySelector('#factButton')
factButton.addEventListener('click', () => {
    fetch('https://api.adviceslip.com/advice')
.then(resp => resp.json())
.then((advice) => {
    console.log(advice.slip.advice)
    renderFacts(advice) })
})

function renderFacts(advice) {
   
}

