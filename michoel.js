const factButton = document.querySelector('#factButton')
const display = document.querySelector('#display')
//
factButton.addEventListener('click', () => {
    fetch('https://api.adviceslip.com/advice')
.then(resp => resp.json())
.then((advice) => {
    renderFacts(advice) })
})
//
function renderFacts(advice) {
   display.textContent = ''

   let p = document.createElement('p')
   let h2 = document.createElement('h2')
   let heading = Object.keys(advice.slip)[1]
   h2.textContent = heading[0].toUpperCase() + heading.slice(1)
   p.textContent = advice.slip.advice
   let div = document.createElement('div')
   div.setAttribute('class', 'innerDiv')
   display.appendChild(div).append(h2, p)
}

