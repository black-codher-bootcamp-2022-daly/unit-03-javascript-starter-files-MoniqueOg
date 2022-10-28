// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14
const userName = 'Monique';

function sayHey() {
    console.log('Hello  ' + userName);
}


function conversation() {
    sayHey();
    console.log('How are you?');
    console.log('Goodbye');
}

conversation()

function futureAge(name, age) {
    const calculatedAge = age + 3;
    return "Hi " + name + " you will be " + calculatedAge + " in 3 years.";
}

console.log(futureAge("Monique", 22)