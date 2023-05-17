const subButton = document.querySelector('#jokeButton')
const addJoke = document.querySelector('#display')
let div = document.createElement('div')
const h2 = document.createElement('h2')

//! generate a random joke category
const urlEndpoint = ['Spooky', 'Pun', 'Christmas', 'Programming', 'Misc']
const randomNumber = Math.floor(Math.random() * urlEndpoint.length)
const randomJoke = urlEndpoint[randomNumber]


function fetchAndProcessData() {
  subButton.addEventListener('click', () => {
    addJoke.textContent = ''
        //!  fetch the joke from the API    
        fetch(`https://v2.jokeapi.dev/joke/${randomJoke}`)
          .then(response => response.json())
          .then(data => {
            console.log(data)
            //!   There are two different types of joke styles in the API. If statement checks for which.
          if (typeof data.joke !== 'undefined') {
            inputJoke('WANNA HEAR A JOKE?')
              setTimeout(() => { 
                inputJoke(`Category Is: ${data.category}`);
                }, 3000);
                setTimeout(() => { 
                  inputJoke(`${data.joke}`);
                  }, 6000);
                } else if (typeof data.setup !== 'undefined') {
            inputJoke(`Ok So: ${data.setup}`);
                    setTimeout(() => {
                      inputJoke(`${data.delivery}`);
                      }, 3000);
                      setTimeout(() => {
                        inputJoke(`LOL`);
                      }, 7000);
                      } else {
                          console.log('Results are undefined. Restarting fetch request...');
          fetchAndProcessData();
        }
      })
      //! catch any errors
      .catch(error => {
          console.log('An error occurred:', error);
        });
  });

}
  
const inputJoke = (joke) => { 
  h2.textContent = joke
  h2.setAttribute('class', 'innerDiv')
  addJoke.append(h2)
         setTimeout(() => { 
              location.reload();
            },10000)
}

  fetchAndProcessData()
