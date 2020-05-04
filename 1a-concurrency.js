'use strict'

console.time('ready1')
setTimeout(() => {
    console.log('Ready!')
    console.timeEnd('ready1')
}, 100)

console.time('ready2')
setTimeout(() => {
    console.log('Ready again!')
    console.timeEnd('ready2')
}, 100)