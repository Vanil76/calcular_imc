let peso = document.getElementById('peso')
let altura = document.getElementById('altura')
let resultado = document.getElementById('resultado')

function CalcularIMC(){
    if (altura.value == "" || peso.value == ""){
        if(altura.value == "" && peso.value == ""){
            altura.style.backgroundColor = "#FFBFBF"
            peso.style.backgroundColor = "#FFBFBF"            
        } else if (altura.value == ""){
            altura.style.backgroundColor = "#FFBFBF"
        } else {
            peso.style.backgroundColor = "#FFBFBF"
        }
    } else {
        altura.style.backgroundColor = "#fff"
        peso.style.backgroundColor = "#fff"
        let imc = parseFloat(peso.value) / (parseFloat(altura.value) * parseFloat(altura.value))
        resultado.style.backgroundColor = '#ffebcd'
        if(imc < 18.5){
            document.getElementById('resultado').value = `Abaixo do peso (seu IMC atual é ${imc.toFixed(2)})`
        } else if (imc >= 18.5 && imc <= 24.9){
            document.getElementById('resultado').value = `Peso normal (seu IMC atual é ${imc.toFixed(2)})`
        } else if (imc >= 25 && imc <= 29.9){
            document.getElementById('resultado').value = `Sobrepeso (seu IMC atual é ${imc.toFixed(2)})`
        } else if (imc >= 30 && imc <= 34.9){
            document.getElementById('resultado').value = `Obesidade grau 1 (seu IMC atual é ${imc.toFixed(2)})`
        } else if (imc >= 35 && imc <= 39.9){
            document.getElementById('resultado').value = `Obesidade grau 2 (seu IMC atual é ${imc.toFixed(2)})`
        } else {
            document.getElementById('resultado').value = `Obesidade grau 3 (seu IMC atual é ${imc.toFixed(2)})`
        }
    }
}