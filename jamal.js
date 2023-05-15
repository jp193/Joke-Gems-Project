const subButton = document.getElementById('jokeButton')
const askJoke = document.getElementById('jokes')
// let newJ = askJoke.innerHTML = 'Ask a joke <br> <input></input>';


subButton.style.background = 'linear-gradient(to left bottom, rgb(182, 95, 95), rgb(223, 4, 4))'
 
subButton.addEventListener('mouseover', () => { 
  subButton.style.background = 'linear-gradient(to left bottom, rgb(182, 95, 95), rgb(223, 4, 4))'
  subButton.style.color = 'white'
})
subButton.addEventListener('mouseout', () => { 
  subButton.style.background = 'linear-gradient(to left bottom, rgb(182, 95, 95), rgb(223, 4, 4))'
  subButton.style.color = 'black'
})

subButton.addEventListener('click', () => {
  fetch('https://v2.jokeapi.dev/joke/Any')
    .then(response => {
      if (response.ok) {
        console.log('it worked')
        return response.json()
      } throw new Error('Request failed!')
    }, networkError => console.log(networkError.message))
    .then(data => {
      console.log(data)
      askJoke.innerHTML = `${data.category} ${data.setup} ${data.delivery}`
    })
    .catch(error => console.log(error))
})