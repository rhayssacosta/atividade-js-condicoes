// Questao 1

let a = +prompt("Digite o valor de A")
let b = +prompt("Digite o valor de B")
let c = +prompt("Digite o valor de C")
let soma = a + b

if (soma < c) {
    console.log ("A soma de A + B é maior que C")
}
else {
    // Não imprimir nada
}

// Questao 2

let nome = prompt("Digite seu nome:").toUpperCase()
let genero = prompt("Digite seu gênero (M para masculino, F para feminino): ").toUpperCase()
let estadoCivil = prompt("Digite seu estado civil:")

if (genero === "F" && estado_civil === "CASADA"){
    tempoCasada = +prompt("Há quanto tempo está casada?")
    console.log ("É uma mulher casada há ${tempoCasada} anos.")
    }
else { 
        console.log ("${nome} não se enquadra na condição de mulher casada.")
    }

    // Questao 3

let num = +prompt("Digite um número")

if (num %2 === 0) {
    console.log ("É um número par")
    }

else {
    console.log ("É um número ímpar")
}

// Questao 4
let A = +prompt("Digite um número")
let B = +prompt ("Digite outro número")
let C = null

if (A === B) {C= A + B;
    console.log ("O resultado da soma soma dos valores é ${C}")
}

else (A != B) 
{C= A * B;
    console.log ("O resultado da multiplicação dos valores é ${C}")
}

// Questao 5

let numero = +prompt("Digite um número:")


if (numero > 0) {
    resultado = numero * 2;
    console.log ("O dobro desse número é ${resultado}")
}
else {
    resultado = numero * 3;
    console.log ("O triplo desse número é${resultado}")
}

// Questao 6
let valor1 = prompt("Digite o primeiro valor: (True or False)")
let valor2 = prompt("Digite o segundo valor: (True or False)")


if (valor1 === valor2) {
    console.log("Ambos valores são VERDADEIROS.")
}
else {
    console.log("Ambos valores são FALSOS.")
}

// Questao 7
let numero = +prompt("Digite um número")


if (numero %2 ===0) {
    resultado = nume + 5;
    console.log ("O resultado dessa soma é ${resultado}")
}
else {
    resultado = numero + 8;
    console.log ("O resultado dessa soma é${resultado}")
}

// Questao 8
let numero1 = parseInt (prompt("Digite o primeiro valor inteiro:"))
let numero2 = parseInt (prompt("Digite o segundo valor inteiro (diferente do primeiro):"))
let numero3 = parseInt (prompt("Digite o terceiro valor inteiro (diferente dos dois primeiros):"))

let menor
let meio
let maior

if (numero1 > numero2 && numero1 > numero3){
    maior = numero1
}
if (numero2 > numero3) {
    meio = numero2
    menor = numero3
}
else {
    meio = numero3
    menor = numero2
}

if (numero2 > numero1 && numero2 > numero3) {
    maior = numero2
}
if (numero1 > numero3) {
    meio = numero1
    menor = numero3
}
else {
    meio = numero3
    menor = numero1
}
if (numero3 > numero1 && numero3 > numero2) {
    maior = numero2
}
if (numero1 > numero2){
    meio = numero1
    menor = numero2
}
else {
    meio = numero2
    menor = numero1
}

console.log ("Números em ordem drecrescente: ${maior}, ${meio}, ${menor}")

// Questao 9
let altura = parseFloat (prompt("Digite a altura em metros:"))
let sexo = prompt("Digite o genero da (M para masculino, F para feminino):")

if (sexo == "M") {
    console.log("Seu peso ideal é", (72.7 * altura) - 58)
}
else { 
    sexo == "F"
    console.log("Seu peso ideal é", (62.1 * altura) - 44.7)
}

// Questao 10
let altura = parseFloat(prompt("Digite sua altura:"))
let peso = parseFloat(prompt("Digite seu peso:"))
let IMC = peso / (altura**2)

if (IMC < 18.5){
        console.log("Seu IMC é ${IMC}.Você está abaixo do peso")
}else if(IMC < 25){
        console.log("Seu IMC é ${IMC}.Seu peso está normal")
}else if(IMC < 31){
        console.log("Seu IMC é ${IMC}.Você está acima do peso")
}else {
        console.log("Seu IMC é ${IMC}.Você está obeso")
    }