/** @format */
class Human {
  public name: string;
  public age: number;
  public gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}
const min = new Human('minimal', 26, 'male');

const sayHi = (person: Human): string => {
  return `Hi ${person.name}, You are ${person.age}. You are a ${person.gender}!`;
};

console.log(sayHi(min));

export {};
