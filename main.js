function alertt() {
    alert('Привет! Пожалуйста, включи звук! :)')
  }
alertt();
let circle = document.querySelector('.circle');
let mainSound = document.querySelector('.main-sound');
function playSound() {
    mainSound.play();
}


let container = document.querySelector('.containner');
let section = document.querySelector('.section');
let mainText = document.querySelector('.main-text');


function animateCircle() {
    document.querySelector('.circle_inner').remove();
    circle.classList.add('animate-circle');
    section.classList.remove('displayNone');
    mainText.classList.remove('displayNone');
    mainSound.play();
}
circle.onclick = animateCircle;

