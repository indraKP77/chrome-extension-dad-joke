document.addEventListener('DOMContentLoaded', function() {
    const jokeElement = document.getElementById('joke');
    const newJokeButton = document.getElementById('newJokeButton');
  
    function fetchJoke() {
      fetch('https://icanhazdadjoke.com/', {
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        jokeElement.textContent = data.joke;
      })
      .catch(error => {
        jokeElement.textContent = 'Failed to fetch joke.';
      });
    }
  
    newJokeButton.addEventListener('click', fetchJoke);
  
    fetchJoke(); // Fetch a joke when the popup opens
  });
  