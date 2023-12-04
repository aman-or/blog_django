const myCarouselElement = document.querySelector('#carouselExampleIndicators')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 5000,
  touch: false
})

function redirectToSignup() {
  window.location.href = "signup.html";
}

function redirectToSignin() {
  window.location.href = "signin.html";
}