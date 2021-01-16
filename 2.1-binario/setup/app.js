let count = 0;
const value = document.getElementById('value-num');

const binario = document.querySelector('#value-binario');

const btnD = document.querySelector('.transform');




btnD.addEventListener('click', ()=>{
    let num = value.value
    let v = [],i=0
    do {
        v[i] = num % 2
        num = Math.floor(num / 2)
        i++
    }while (num != 0)
    let numero = 0
    v.forEach((item, index) => {
        numero = numero + item * Math.pow(10, index)
        //console.log(item)
    })
    binario.textContent = numero
})
