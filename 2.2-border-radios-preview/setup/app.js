
let circle = document.getElementById('circle')

document.addEventListener('oninput', comprobar)

function comprobar() {
    /* Buscamos el valor del campo input */
    let input = document.getElementById('value').value;

    let input1 = document.getElementById('value1').value;
    console.log(input)
    circle.style.cssText = `border-radius: ${input}%;width: ${input1}px;height: ${input1}px;`

}
