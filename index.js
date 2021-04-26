// Follow along with the examples here
console.log('Hello, world')
console.log('Hello, world')
console.log('Hello, world')
console.log('Hello, world')
console.log('Hello, world')
console.log('Hello, world')
console.log('Hello, world')
console.log('Hello, world')

function sayHello() {
    console.log('Hello!')
}

sayHello()
sayHello()
sayHello()
sayHello()
sayHello()
sayHello()

function sayHelloToIsabel() {
    console.log('Hello, Isabel!')
}

function sayHelloToSofia() {
    console.log('Hello, Sofia!')
}

function sayHelloToBrendan() {
    console.log('Hello, Brendan!')
}

sayHelloToIsabel()
sayHelloToSofia()
sayHelloToBrendan()

function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}`)
}

sayHelloTo('Isabel')
sayHelloTo('Jane')
sayHelloTo('R2-D2')
sayHelloTo(1)

function say(greeting, firstName) {
    console.log('firstName: ', firstName)
    console.log('greeting: ', greeting)
    console.log(`${greeting}, ${firstName}!`)
}

say('Goodbye', 'Julio')
say('Julio', 'hello')

function add(x, y) {
    return x + y
}

console.log(add(1, 2))
console.log(add(80, 9000))

function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`
}

console.log(say('Hello', 'Sofia'))
console.log(say('Howdy', 'partner'))


function fun(person) {
   if (person === 'Jacob') {
        return `You are learning ${person}`
    } else {
        return 'Not cool enough'
    }
}

console.log(fun('Jacob'))
console.log(fun('Henry'))
