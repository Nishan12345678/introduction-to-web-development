// Arrow functions and template literals

// () => {}

const greet = (name) => {
   // console.log(`hello ${name}`);
   

};

greet('Nishan');

// array methods

const numbers =[10, 20, 40, 60];

//push and pop
 numbers.push(80);
numbers.push(100);

// console.log(numbers);

 numbers.pop();
// console.log(numbers);

 // map, filter and reduce

 const numberList= [10, 20, 35, 45, 50];

 const doubledNumbers=numberList.map( (number) =>{
    return number * 2;
 });

 console.log(doubledNumbers);

 const evenNumberList=numberList.filter( (number) => {
    return number %  2 === 0;
 });

 console.log(evenNumberList);

const totalSum = numberList.reduce( (accumulator, currentValue) => {
    console.log(accumulator, currentValue);
   return accumulator + currentValue;
 },0);

 console.log(totalSum);

 // slice and splice

 const fruits = ['apple', 'banana', 'orange', 'mango'];

 //const slicedFruits  = fruits.slice(1);

 //console.log(slicedFruits);

 const splicedFruits = fruits.splice(1,2, 'grape', 'kiwi');

 console.log(splicedFruits);
 console.log(fruits);

 // spread operator

 const names = ['Alice', 'bob', 'charlie']:

 const newNames = [ ... names, 'David', 'eve'];
 console.log(newNames);

 const user ={
    name:"Nishan"
    age:20,
    address: kathmandu,Nepal,
 };
  
 const updatedUser ={
    ...user,
    isStudent: false,
 };
 console.log(updatedUser);

