/** @format */
interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: 'minimal',
  age: 22,
  gender: 'male'
};

const sayHi = (person: Human): string => {
  return `Hi ${person.name}, You are ${person.age}. You are a ${person.gender}!`;
};

console.log(sayHi(person));

export {};
