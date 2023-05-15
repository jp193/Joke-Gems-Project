const quoteBtn = document.querySelector('#quoteButton');

quoteBtn.addEventListener('click', () => {
    fetch('https://api.quotable.io/quotes/random')
.then(resp => resp.json())
.then(data => {})
})

function displayFetch(info) {
    
}
