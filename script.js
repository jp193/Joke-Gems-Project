fetch('https://v2.jokeapi.dev/')
.then(response => {
  if (response.ok) {
         console.log('it worked')
         return response.json()
       } throw new Error ('Request failed!')
     }, networkError => console.log(networkError.message))
 .then(data => {})

 .catch(error => console.log(error))

// function getRandomFact() {
//   $.ajax({
//     url: '/api/v2/facts/random',
//     method: 'GET',
//     success: function(response) {
//       $('#fact-container').text(response.fact);
//     },
//     error: function() {
//       $('#fact-container').text('Failed to retrieve random fact.');
//     }
//   });
// }

// getRandomFact();