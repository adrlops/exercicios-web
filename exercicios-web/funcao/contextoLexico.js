const valor = 'Global'

function minhaFuncao () {
    console.log(valor) // Local, não global
}

function exec() {
    const valor = 'Local'
    minhaFuncao()  
}

exec()