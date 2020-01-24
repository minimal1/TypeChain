/** @format */
const sayHi = (name: string, age: number, gender: string): string => {
  return `Hi ${name}, You are ${age}. You are a ${gender}!`;
};

console.log(sayHi('minimal', 26, 'male'));

export {};
