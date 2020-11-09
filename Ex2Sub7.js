let person = {};
person.name = 'Alex';
person.lastName = 'Smith';
delete person.name;
delete person.lastName;

console.log(person);