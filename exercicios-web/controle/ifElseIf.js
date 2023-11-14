Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprtimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)) {
        console.log("Recuperação")
    } else if (nota.entre(0, 3.99)) { 
        console.log("Reprovado") 
    } else {
        console.log("Nota inválida")
    }
}

imprtimirResultado(10)
imprtimirResultado(8.9)
imprtimirResultado(6.55)
imprtimirResultado(2.3)
imprtimirResultado(-1)
imprtimirResultado(11)





