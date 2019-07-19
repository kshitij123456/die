const boxa = document.querySelector('.pla1 h1');
const boxb = document.querySelector('.pla2 h1');
const result = document.querySelector('.result h1');

const btn  = document.querySelector('button');

btn.addEventListener('click',()=>{
    let a = Math.floor(Math.random()*100);
    a = a%6 + 1;
    let b = Math.floor(Math.random()*100);
    b = b%6 + 1;

    boxa.parentElement.style.backgroundImage = `url('images/dice${a}.png')`;
    boxa.parentElement.style.backgroundSize = "cover";
    boxa.parentElement.style.backgroundRepeat = 'no-repeat';

    boxb.parentElement.style.backgroundImage = `url('images/dice${b}.png')`;
    boxb.parentElement.style.backgroundSize = "cover";
    boxb.parentElement.style.backgroundRepeat = 'no-repeat'


    if(a>b) result.innerHTML = `Player 1 Wins`;
    else if(b>a) result.innerHTML = `Player 2 Wins`;
    else result.innerHTML = `The Game Is A Tie`;
});