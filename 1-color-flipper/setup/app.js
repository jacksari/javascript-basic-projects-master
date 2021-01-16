
const btn = document.getElementById('btn');
const color = document.querySelector('.color');


btn.addEventListener('click', function(){
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const num3 = getRandomNumber();
    const colors = `rgb(${num1},${num2},${num3})`
    document.body.style.backgroundColor = colors
    color.textContent = colors
})

function getRandomNumber(){
    return Math.floor(Math.random() * 255);
}
