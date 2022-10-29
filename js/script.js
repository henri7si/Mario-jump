const pipe = document.querySelector('.pipe');
const mario = document.querySelectorAll('.mario')[0];

const jump = () => {
    mario.classList.add("jump");
    setTimeout(()=>{
        mario.classList.remove('jump');
    },600);
}
const loop = setInterval(() => {

    const pipePosition = pipe.offsetLetf;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition > 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${pipePosition}px`;

    }


} ,10);

document.addEventListener('keydown' , jump);
