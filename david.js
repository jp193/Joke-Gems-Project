const quoteBtn = document.querySelector('#quoteButton');

quoteBtn.addEventListener('click', () => {
    fetch('https://api.quotable.io/quotes/random')
.then(resp => resp.json())
.then(data => displayFetch(data))
})

// display results on the dom 
function displayFetch(info) {
    const quoteDiv = document.querySelector('#quotes');
    quoteDiv.textContent = ''

    const quoteAuthor = document.createElement('h2');
    const quote = document.createElement('p');

    quoteAuthor.textContent = `Author: ${info[0].author}`;
    quote.textContent = info[0].content;

    quoteDiv.append(quoteAuthor, quote)

    quoteDiv.classList = ''

    console.log(info)
}
