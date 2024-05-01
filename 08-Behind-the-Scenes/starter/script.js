'use strict';

let age = 30;
let olgAge = age;
age = 31;

console.log(age);
console.log(olgAge);

const me = {
  name: 'jonas',
  age: 30,
};

const friend = me;
friend.age = 27;
friend.name = 'friend';

console.log('friend:', friend);
console.log('Me', me);
console.log('----------------');

//----------------------------------

let lastName = 'Willians';
let oldLastName = lastName;
lastName = 'David';
console.log('All last name: ', lastName, oldLastName);

const jessica = {
  fisrtName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
console.log('before marriage', jessica.lastName);

let marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

console.log('before marriage', jessica.lastName);
console.log('After marriage', marriedJessica.lastName);
//----------------
//Copy objs

const jessica_2 = {
  fisrtName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['alice', 'silvia'],
};
const jessica_copy = Object.assign({}, jessica_2);
jessica_copy.lastName = 'David';

console.log('-----------------');
console.log('After Object.assign({}, obj)');

console.log('before married', jessica_2.lastName);
console.log('Family before married', jessica_copy.family);

//Family increce after married
jessica_copy.family.push('Mary');
jessica_copy.family.push('John');

console.log('After marriage', jessica_copy.lastName);
console.log('Family increce after married', jessica_copy.family);
