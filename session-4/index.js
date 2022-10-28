// ****************************************************TASK 1 - OBJECTS****************************************************


const personA = {
    name: "Monique",
    age: 22,
    location: "Monaco",
    likes: "coding",
};

const personB = {
    name: "Shantelle",
    age: 40,
    location: "Singapore",
    likes: "studying"
};

const personC = {
    name: "Aaron",
    age: 7,
    location: "Dubai",
    likes: "mathematics",
};

const personD = {
    name: "Wendy",
    age: 8,
    location: "Los Angeles",
    likes: "gymnastics",
}

function biograghy(person) {
    return `Hi, my name is ${person.name},
      I am ${person.age},
      I live in ${person.location}, 
      I like ${person.likes}`
}


console.log(biograghy(personA));


// ****************************************************TASK 2 - MATHS OPERATORS****************************************************
// ***Uncomment the code below to begin the task***

const x = 6;
const y = 4;

const addition = x + y;

console.log("Addition: x + y " + addition);

const subtraction = x - y;

console.log("Subtraction: x - y " + subtraction);

const multiplication = x * y;

console.log("multiplication: x * y " + multiplication);

const division = x * y;

console.log("Division: x + y " + division);

// ****************************************************TASK 3****************************************************

const myAge = 22;
const minDrivingAge = 17;
const drivingAge = (myAge > minDrivingAge);
console.log("Am I old enough to drive, " + drivingAge);


// ************************************************HOME WORK TASK 1 *********************************************

function addition(x, y) {
    return x + y;
}
function subtraction(x, y) {
    return x - y;
}
function multiplication(x, y) {
    return x * y;
}
function division(x, y) {
    return x / y;
}
const calculator = {
    add: addition,
    subtract: subtraction,
    multiply: multiplication,
    divide: division,
};

console.log(calculator.multiply(5, 8))
    * /


function whoIsOlder(personA, personB) {

    const ageDifference = personA.age - personB.age

    return `${personA.name} is ${ageDifference} years older than ${personB.name}`
};

console.log(whoIsOlder(personA, personB))






