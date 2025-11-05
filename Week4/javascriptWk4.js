// write a variable that is a string and output to console (hint: it's console.log(variable name))
let greeting = "Welcome!";
console.log(greeting);

// write a variable that is a number and output to console (hint: it's console.log(variable name))
let num = 1;
console.log(num);

// write a variable that takes any two numbers and adds them 
let add = 2+1;
console.log(add);

// write a variable that takes any two numbers and subtracts them and output to console
let sub = 3-1;
console.log(sub);

// write a variable that takes any two numbers and performs a modulo that has a value of 1  and output to console 
let mod = 25%6;
console.log(mod);

// write a variable that takes any two numbers and perform an exponential value and output to console
let exp = 2**3;
console.log(exp);

// write a statement that is false using a conditional statement and output to console 
let go;
let light = "red";

if (light =="red"){
    go = false;
}

console.log(go);

// I have created an object below, output to console the value of "breed" (hint: the structure is ObjectName.value you want to call)
// the keyword "this" is self referencing the object 

let siggy = {
    breed : "cat", 
    baby: "big baby", 
    fluffy: "fluffy", 
    output: function() {

        return `Siggy is a ${this.breed} that is a ${this.fluffy} ${this.baby}`

    }
}

console.log(siggy.breed)

// methods! You call methods the same way you call a function.  I'll call siggy.output() below. 

console.log(siggy.output()); 

// copy + paste the siggy object below and rename the variable from Siggy to an animal or name of your choice 
// then, I want you to change the object to the value of your choosing  

let sunny = {
    animal: "kitty",
    attribute: "sleepy",
    occupation: "screamer",
}

// console.log the values of that object one by one. 

console.log(sunny.animal);
console.log(sunny.attribute);
console.log(sunny.occupation);

// create an array 

let basket = ["apple", "orange", "pear"];

// call the value in the 3 position of this array and output to console 

let someArray = ["Ishrat", "Is", "Really", "Proud", "Of", "You"]

// I think the question asks for the value in the third position (not the one indexed at 3), but I did both just in case
console.log(someArray[2]); //third position but indexed 2
console.log(someArray[3]); //fourth position but indexed 3

// call all values in the array using a loop 
for (let i=0; i <someArray.length; i++){
    console.log(someArray[i])
}

// what is the value of the variable ifStatement, leave your answer in the console. 

let ifStatement; 
let value = 5; 

if(value < 5)
{
    ifStatement = true;
}

else{
    ifStatement = false; 
}

console.log(false);

