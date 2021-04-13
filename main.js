// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// const modal = document.querySelector("#modal");
// modal.classList.add("hidden")

const like_glyph = document.querySelectorAll(".like-glyph");
like_glyph.forEach((heartIcon) => {
  heartIcon.addEventListener("click", e => {
    mimicServerCall()
    .then(obj => {
      console.log(obj);
      flipHeart(e);
    })
    .catch(error => {
      console.log(error);
      const modal = document.querySelector("#modal");
      const modal_message = document.querySelector("#modal-message");
      // console.log(modal.firstElementChild.innerHTML);
      modal_message.innerHTML = error;
      modal.classList.remove("hidden");
      setTimeout(() => { modal.classList.add("hidden"); }, 5000);
    });
  });
});

function flipHeart(event) {
  if(event.target.textContent == '♡') {
    event.target.textContent = FULL_HEART;
    console.log(event.target)
    event.target.classList.add("activated-heart");
  } else {
    event.target.textContent = EMPTY_HEART;
    event.target.classList.remove("activated-heart");
    console.log(event.target)
  }
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
