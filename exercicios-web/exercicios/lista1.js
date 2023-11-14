// 1
function operadoresAritmeticos (operador1, operador2){
    console.log(operador1+operador2, operador1-operador2, operador1*operador2, operador1/operador2)
}
operadoresAritmeticos (1,2)

// 2
function classificaTriangulo(lado1, lado2, lado3) {
    if (lado1 === lado2 && lado2 === lado3) {
        console.log('Equilátero');
    } else if (lado1 === lado2 || lado1 === lado3 || lado1 === lado3) {
        console.log("Isósceles");
    } else {
        console.log("Escaleno")
    }
}
console.log(classificaTriangulo(2, 2, 2));
console.log(classificaTriangulo(2, 3, 3));
console.log(classificaTriangulo(2, 3, 4));

// 3
function expoente (base, expoente){
    resultado = base ** expoente
    return resultado
}
console.log(expoente(2, 3))