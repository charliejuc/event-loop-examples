'use strict'

const crypto = require('crypto')

const rounds = 50000

let times = 12

while(times--) {
    console.time(`ready${times}`)
    ;(function(times) {
        crypto.pbkdf2(`password${times}`, `salt${times}`, rounds, 512, 'sha512', () => {
            console.timeEnd(`ready${times}`)
        })
    }(times))
}