let count = 0;
const value = document.getElementById('value-num');

const binario = document.querySelector('#value-binario');

const btnD = document.querySelector('.transform');




btnD.addEventListener('click', ()=>{

    var digits = binario.value.toString().split('').reverse();
    let decimal = 0
    digits.forEach((num,index)=>{
        decimal = decimal + num * Math.pow(2,index)
    })
    value.innerText = decimal

})
