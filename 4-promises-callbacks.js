'use strict'

setImmediate(() => {
    console.log('setImmediate')
})

setTimeout(() => {
    console.log('setTimeout')
}, 0)

Promise
    .resolve()
    .then(() => {
        console.log('Promise')
    })

process.nextTick(() => {
    console.log('process.nextTick')
})