// My second javascript assignment - MA2

// question 1
var petArray = ["cat", "cow", "dog"];

// question 2

console.log (petArray[1]);

// question 3

petArray.push ("sheep");

// question 4 

console.log (petArray.length);

// question 5

var catObject = {
    name: "Bella",  // name is the key, Bella is the string value 
    color: "Tan",  // color is the key, Tan is the string value 
    age: 8,       // age is the key, 8 is the number value
};

// question 6

console.log (catObject.age);

// question 7 

var catArray = 
[
{
name: "Bella",   
color: "Tan",   
age: 8       
} 

];

// question 8 
    
for(var i=0; i < catArray.length; i++){
    
    console.log(catArray[i].name);
    console.log(catArray[i].color);
    console.log(catArray[i].age);
  
}

// question 9 

function logToConsole (endings) {
    console.log("Huttemeitu " + endings);
}

logToConsole("nå er det høst");


// question 10 

logToConsole("donkey");


