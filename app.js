const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['John', 'Jack', 'Adam', 'Leonardo', 'Robb'];
const femaleNames = ['Ann', 'Courtney', 'Angelina', 'Serene', 'Venus'];
const lastNames = ['Wick', 'Stark', 'Maguire', 'Kane', 'Cox'];
const emails = ['gmail.com', 'yahoo.com']

const randChoice = (arr) => {
  const randomObject = Math.floor(Math.random() * arr.length);
  return randomObject;
};

const people = [];

for(let i = 0; i < 20; i++) {

  const person = {};

  person.gender = genders[randChoice(genders)];
  if(person.gender === 'M') person.name = maleNames[randChoice(maleNames)];
  if(person.gender === 'F') person.name = femaleNames[randChoice(maleNames)];
  person.lastName = lastNames[randChoice(lastNames)];
  person.age = Math.floor(Math.random() * 60 + 18);
  person.email = person.name.toLowerCase() + '.' + person.lastName.toLocaleLowerCase() + '@' + emails[randChoice(emails)];
  person.phone = '+1' + Math.floor(Math.random() * 1000000000 + 9999999999);

  people.push(person);
}

const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
  if (err) throw err;
  console.log(people, 'The file has been saved!');
});