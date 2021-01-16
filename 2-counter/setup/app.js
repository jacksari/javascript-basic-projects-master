let count = 0;
const value = document.querySelector('#value')

const btnD = document.querySelector('.decrease');
const btnI = document.querySelector('.increment');
const btnR = document.querySelector('.reset');

btnD.addEventListener('click', ()=>{
    counter(count - 1)
})
btnI.addEventListener('click', (e)=>{
    counter(count + 1)
})
btnR.addEventListener('click', (e)=>{
    counter(0)
})

function counter(num){
    count = num ;
    value.textContent = count;
    count > 0 ? value.style.color = 'green' : count < 0 ? value.style.color = 'red' : value.style.color = '#222'
}