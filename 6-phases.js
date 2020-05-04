'use strict'

/*
    PHASES:
            => process.nextTick()
        1. Timers (setTimeout, setInterval)
            => process.nextTick()
        2. Pending callbacks including setImmediate
            => process.nextTick()
        3. Idle, prepare (Only used internally)
            => process.nextTick()
        4. Poll: Retrieve I/O events and timers whose threshold has elapsed
            => process.nextTick()
        5. Check: setImmediate
            => process.nextTick()
        6. Close callbacks: (socket.on('close', ...))
            => process.nextTick()
*/

const fs = require('fs')
const path = require('path')

function cb(timerFunc, maxTimerCount=1, timerCount=0) {
    if ( timerCount >= maxTimerCount ) {
        return
    }

    let i = 1
    while(i > 0) {
        if ( i % 4e8 === 0 ) {
            console.log(`Executed ${i} times`)
            break
        }

        ++i
    }

    timerFunc(cb, timerFunc, maxTimerCount, ++timerCount)
}

const filePath = path.join('.', 'data','users-mini.json')
// const filePath = path.join('.', 'data','users-big.json')

console.time('readFile')
fs.readFile(filePath, 'utf8', function readFileCb(err, data) {
    console.timeEnd('readFile')
})

const times = 10

// Blocking
console.log('***[process.nextTick]***')
process.nextTick(cb, process.nextTick, times)

// Non-blocking
// console.log('***[setImmediate]***')
// setImmediate(cb, setImmediate, times)

// Non-blocking
// console.log('***[setTimeout]***')
// setTimeout(cb, 0, (cb, ...args) => setTimeout(cb, 0, ...args), times)