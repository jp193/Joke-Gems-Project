//! Global Variables
const quoteBtn = document.querySelector('#quoteButton');
const factButton = document.querySelector('#factButton');
const subButton = document.querySelector('#jokeButton');
const allBtn = document.querySelector('#allButton');
const saveBtn = document.querySelector('#save');
const display = document.querySelector('#display');
const alreadySavedButton = document.querySelector('#savedButton')
const imageDiv = document.querySelector('#container');
const header = document.querySelector('#myHeader');


//! Click event listeners
quoteBtn.addEventListener('click', () => {
  imageDiv.style.backgroundImage = 'url(https://media.istockphoto.com/photos/vintage-old-red-quill-pen-with-inkwell-on-wooden-table-front-gradient-picture-id1055062454?b=1&k=20&m=1055062454&s=612x612&w=0&h=SZLDqcpErhD927Yb1TgvXLb4FK2XKe83YcQ1kQ8Jaic='
  header.style.color = 'black';
    fetchFn(displayFetch)
    clearDiv()
})

factButton.addEventListener('click', () => {
  imageDiv.style.backgroundImage = 'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9d93b732-63f7-46af-b8e6-63f1cff45ed9/deqa0c7-892c58f0-5972-42d3-b8d6-e5e36fce0c6f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzlkOTNiNzMyLTYzZjctNDZhZi1iOGU2LTYzZjFjZmY0NWVkOVwvZGVxYTBjNy04OTJjNThmMC01OTcyLTQyZDMtYjhkNi1lNWUzNmZjZTBjNmYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NydjPUVhfl6mYIGlfUol1sDbgo8HYL6BJ9IZWLV82r0)'
  header.style.color = 'black';
    adviceFetch()
    clearDiv()
})

function fetchAndProcessData() {
  subButton.addEventListener('click', () => {
    imageDiv.style.backgroundImage = 'url(https://npr.brightspotcdn.com/legacy/sites/kmuw/files/201703/stand-up-comedy.jpg)'
    header.style.color = 'white';
    clearDiv()
      fetchJoke()
    });
}

allBtn.addEventListener('click', () => {
  imageDiv.style.backgroundImage = 'url(https://www.techrepublic.com/wp-content/uploads/2021/08/gettyimages-carlosgaw-e1642695622636.jpg)';
  header.style.color = 'white';
  clearDiv()
  fetchFn(displayFetch)
  setTimeout(adviceFetch(), 10000)
  setTimeout(fetchJoke(), 10000)
});

//! Save button event listener/Functionality
  let key = 0
  const saved = []
saveBtn.addEventListener('click', () => {
    let arr = []
    let pTag = display.firstChild.querySelector('p')
    if (pTag === null) {
        arr.push([display.firstChild.querySelector('h2').textContent])
    } else {
        arr.push([display.firstChild.querySelector('h2').textContent])
        arr.push([display.firstChild.querySelector('p').textContent])
    }
    saved.push(arr)
    renderSavedElements(saved)
})

function clearDiv() {
  display.textContent = '';
  
}
function renderSavedElements(saved) {
       clearDiv()
       if (document.querySelector('.saved').textContent !== '') {
        document.querySelector('.saved').textContent = ''
       }
       for (const element of saved) {
        console.log(element[1])
        let div = document.createElement('div')
        let h2 = document.createElement('h2')
        let p = document.createElement('p')
        let deleteButton = document.createElement('button')
        deleteButton.textContent = 'delete'
        deleteButton.classList.add('deleteBtn')
        h2.textContent = element[0]
        p.textContent = element[1]
        h2.classList.add('savedElements')
        p.classList.add('savedElements')
        div.classList.add('innerDiv')
        
        div.append(h2, p, deleteButton)
        document.querySelector('.saved').append(div)
        deleteButton.addEventListener('click', (e) => {
          deleteButton.parentNode.remove()
        })
       }
       
}


alreadySavedButton.addEventListener('click', () => {
  clearDiv()
  if (alreadySavedButton.textContent === 'Saved Content') {
    alreadySavedButton.textContent = 'Close Saved'
    document.querySelector('#lastDiv').classList.toggle("saved");
    quoteBtn.classList = 'saved'
    factButton.classList = 'saved'
    subButton.classList = 'saved'
    allBtn.classList = 'saved'
    saveBtn.classList = 'saved'
  } else if (alreadySavedButton.textContent === 'Close Saved') {
    alreadySavedButton.textContent = 'Saved Content'
    document.querySelector('#lastDiv').classList.toggle("saved");
    quoteBtn.classList = ''
    factButton.classList = ''
    subButton.classList = ''
    allBtn.classList = ''
    saveBtn.classList = ''
  }
})

//! Fetch requests
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



function fetchJoke() {
  fetch(`https://v2.jokeapi.dev/joke/${randomJoke}`)
  .then(response => response.json())
  .then(data => {
      if (typeof data.setup !== 'undefined') {
          inputJoke(`Ok so: ${data.setup} ${data.delivery} `);
      } else if (typeof data.joke !== 'undefined') {
          inputJoke(`${data.joke}`)
      } else {
        fetchAndProcessData();
      }
  })
}

const inputJoke = (joke) => {
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  h2.textContent = joke;
  h2.setAttribute('class', 'innerDiv');
  div.appendChild(h2);
display.appendChild(div);
}

fetchAndProcessData()