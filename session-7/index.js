// ****************************************************TASK 1****************************************************


const animals = ['cat', 'dog', 'pig']

animals.pop()
console.log(animals)


// ****************************************************TASK 2****************************************************


const names = [
  'Monique',
  'Shantelle',
  'Aaron',
  'Wendy',
  'Charles',
  'Keir',
  'Karmell',
  'Vicki',
  'Blake',
  'Gia'
]

names.reverse()
console.log(`before`, names)

names.sort()
console.log(`after`, names)


const numbers = [-5, 325, 67, 100000, 150]

numbers.sort()
console.log(numbers)

// ****************************************************TASK 3****************************************************

// Notice the backticks enclosing Vicki. Read https://www.javascripttutorial.net/es6/javascript-template-literals/ for an explanation on template literals
const people = [
  { name: `Vicki`, age: 61 },
  { name: 'Anastasia', age: 16 },
  { name: 'Iman', age: 32 },
];

// This is a helper function that should be used in the final task of the session.
// You should pass this function to the sort method to sort the ages of each individiual in the people array of objects
function compare(a, b) {
  return a.age - b.age;
}

const sortedPeople = people.sort(compare).map(item => item.name)
console.log(sortedPeople);