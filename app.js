function moverPositionRandom(elm){
    elm.style.position = 'absolute'
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

let btnSi = document.getElementById('btn_si');
let btnNo = document.getElementById('btn_no');
let divModoLearn = document.getElementsByClassName('modo_learn')[0];

btnNo.addEventListener('mouseenter', function(e) { moverPositionRandom(e.target)});
btnSi.addEventListener('click', function(e) {
    alert("Lo sabia 🤓");
    divModoLearn.style.display = 'block';
    const musica = new Audio("Media\\audio-ejemplo.mp3");
    musica.play();
});