function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function increment(n) {
    return ++n
}

function decrement(n) {
    return --n
}

function makeInt(string, n) {
    console.log(parseInt(string, n))
}

function preserveDecimal(string) {
    console.log(parseFloat(string))
}

console.log(makeInt('22.22', 10))

console.log(preserveDecimal("22.22"))

console.log(increment(3))

console.log(decrement(3))

console.log(add(1, 2))

console.log(subtract(2, 1))

console.log(multiply(3,2))

console.log(divide(8,4))

