// Javascript variables

var fullName= 'Nishan Bamjan';
let address= 'Kathmandu, Nepal';
const bloodGroup= 'A+';

console.log('Full Name:', fullName);
console.log('Address:', address);
console.log('Blood Group', bloodGroup);

//data types
let name= 'Nishan';
let age = 25;
let isStudent = false;
let hobbies= ['coding', 'Travelling', 'cooking'];//array

console.log(hobbies[0]);

let user = {
    name: 'Nishan',
    age: 25,
    isStudent: false,
    hobbies: ['coding', 'Travelling', 'cooking'],
};//object

 console.log(user['name']);
 console.log(user.name);

 //functions

 function greet(name){
    console.log('Welcome',name);
 }
 greet('Nishan Bamjan');

 //dom manipulation

 const headingElementById=document.getElementById('heading-2');
 console.log('heading element by id', headingElementById);

 const headingElementByQuery = document.querySelector('#heading-2');
 console.log('heading element by query selector', headingElementByQuery);

 headingElementByQuery.textContent='Get element by query selector';
 headingElementByQuery.style.color= 'blue';
 
 const buttonElement = document.querySelector('.btn'); 

 buttonElement.addEventListener('click', function() {
    alert('Button clicked!');
    console.log('Button clicked');
 })


 