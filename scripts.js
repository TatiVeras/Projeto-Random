function generateNumber() {
const min= Math.ceil(document.querySelector ('.input-direita').value)
const max= Math.floor(document.querySelector ('.input-esquerda').value)

if (min >= max) {
    alert ("O valor mínimo não pode ser Maior que o valor máximo" )
} else {
    const result= Math.floor(Math.random() * (max - min + 1) + min)

    alert (result)


}

}


