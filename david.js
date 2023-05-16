const quoteBtn = document.querySelector('#quoteButton');

quoteBtn.addEventListener('click', () => {
    fetchFn(displayFetch)
})

// display results on the dom 
function displayFetch(info) {
    const quoteDiv = document.querySelector('#display');
    quoteDiv.textContent = ''

    const quoteAuthor = document.createElement('h2');
    const quote = document.createElement('p');
    const div = document.createElement('div')

    quoteAuthor.textContent = `Author: ${info[0].author}`;
    quote.textContent = info[0].content;

    quoteDiv.appendChild(div).append(quoteAuthor, quote)
    div.setAttribute('class', 'innerDiv')
    quoteDiv.classList = '';
    console.log(info)
}

// fetch function
function fetchFn(callBack) {
    fetch('https://api.quotable.io/quotes/random?limit=3')
.then(resp => resp.json())
.then(data => callBack(data))
}