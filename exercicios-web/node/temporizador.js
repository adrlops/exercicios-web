const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('/5*****', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout( function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 2000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 14
regra.second = 0

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})