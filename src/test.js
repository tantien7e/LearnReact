//Destructuring
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
const numbers = ['1', '2', '3', '4', '5', '6']

const newArray = [alphabet , numbers]

function sumAndMultiply(a,b){
    return [a+b, a*b];
}
const [sum, multiply] = sumAndMultiply(2,3)

const person ={
    name: 'Linh',
    age: 17,
    address: {
        distric: 'Gia Lam',
        city: 'Ha noi'
    }
}

const {name1, age} = person;
console.log(name1);
console.log(age);