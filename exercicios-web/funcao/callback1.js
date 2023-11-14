const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`) //+1 para contar o índice do array começando em
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))