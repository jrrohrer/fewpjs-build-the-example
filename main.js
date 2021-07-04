// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


addEventListener('DOMContentLoaded', function() {
  const hearts = document.getElementsByClassName("like-glyph");
  const hearts_arr = [...hearts];

  hearts_arr.forEach(addEventListener('click', handleHeartClicked));
});

function handleHeartClicked(event){
  mimicServerCall()
    .then(() => {
      if (event.toElement.classList.contains('activated-heart')) {
        event.toElement.classList.remove("activated-heart");
      } else {
        event.toElement.classList.add("activated-heart");
      }
    })
    .catch((failure) => {
      const errorModal = document.getElementById("modal");
      errorModal.classList.remove("hidden")

      setTimeout(() => errorModal.classList.add("hidden"), 5000);
      document.getElementById("modal-message").innerText = failure;
    })
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

// 