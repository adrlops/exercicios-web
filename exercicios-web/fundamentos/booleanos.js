let isAtivo = false
console.log(isAtivo)

isAtivo = true 
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo=true))

console.log('os falsos...')
console.log(!!0) //false, pois é zero e não tem nada dentro dele
console.log(!!'')//false, vazio ou string vazia
console.log(!!' ')//false, tem espaço em branco
console.log(!!null)//false, null significa ausência de valor
console.log(!!NaN)//false, NaN significa Not a Number (não um número), que ocorre quando se tenta realizar uma
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ''))

let nome = 'Lucas'
console.log(nome || 'Desconhecido')
