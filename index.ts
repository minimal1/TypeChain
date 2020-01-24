/** @format */
const name = 'minimal',
  age = 26,
  gender = 'male';

const sayHi = (name, age, gender?) => {
  console.log(`Hi ${name}, You are ${age}. You are a ${gender}`);
};

sayHi(name, age);

export {};
