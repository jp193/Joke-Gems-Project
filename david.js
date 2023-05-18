const quoteBtn = document.querySelector('#quoteButton');
const factButton = document.querySelector('#factButton');
const subButton = document.querySelector('#jokeButton');
const allBtn = document.querySelector('#allButton');
const display = document.querySelector('#display');

quoteBtn.addEventListener('click', () => {
    fetchFn(displayFetch)
    clearDiv()
})

factButton.addEventListener('click', () => {
    adviceFetch()
    clearDiv()
})

function fetchAndProcessData() {
    subButton.addEventListener('click', () => {
      clearDiv()
      fetchJoke()
    });
}

allBtn.addEventListener('click', () => {
    clearDiv()
    adviceFetch()
    fetchFn(displayFetch)
    setTimeout(fetchJoke, 250)
})

function fetchFn(callBack) {
    fetch('https://api.quotable.io/quotes/random?limit=3')
.then(resp => resp.json())
.then(data => callBack(data))
}

function adviceFetch() {
    fetch('https://api.adviceslip.com/advice')
    .then(resp => resp.json())
    .then((advice) => {
        renderFacts(advice) })
}

function fetchJoke() {
    fetch(`https://v2.jokeapi.dev/joke/${randomJoke}`)
    .then(response => response.json())
    .then(data => {
        if (typeof data.setup !== 'undefined') {
            inputJoke(`OK So: ${data.setup} ${data.delivery} `);
        } else if (typeof data.joke !== undefined) {
            inputJoke(`${data.joke}`)
        } else {
          fetchAndProcessData();
        }
    })
}

function clearDiv() {
    display.textContent = '';
}

function displayFetch(info) {
    const quoteAuthor = document.createElement('h2');
    const quote = document.createElement('p');
    const div = document.createElement('div')
    
    quoteAuthor.textContent = `Author: ${info[0].author}`;
    quote.textContent = info[0].content;

    display.appendChild(div).append(quoteAuthor, quote)
    div.setAttribute('class', 'innerDiv')

}

function renderFacts(advice) {
   let p = document.createElement('p')
   let h2 = document.createElement('h2')
   let heading = Object.keys(advice.slip)[1]
   h2.textContent = heading[0].toUpperCase() + heading.slice(1) + ':'
   p.textContent = advice.slip.advice
   let div = document.createElement('div')
   div.setAttribute('class', 'innerDiv')
   display.appendChild(div).append(h2, p)
}

//! generate a random joke category
const urlEndpoint = ['Spooky', 'Pun', 'Christmas', 'Programming' ]
const randomNumber = Math.floor(Math.random() * urlEndpoint.length)
const randomJoke = urlEndpoint[randomNumber]

const inputJoke = (joke) => {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.textContent = joke;
    h2.setAttribute('class', 'innerDiv');
    div.appendChild(h2);
    display.appendChild(div);
  }

fetchAndProcessData()