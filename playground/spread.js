function add (a, b) {
    return a + b;
}

console.log(add(4, 3));

var toAdd = [1,2];
console.log(add(...toAdd));

var groupA = ['Sammy' , 'Alva'];
var groupB = ['Vikram'];
var final = [3,...groupA, ...groupB];

console.log(final);


var person = ['Sammy', 27];
var personTwo = ['Alicia', 69];

function greet (name, age){
    console.log(`hi ${name} you are ${age}`);
}
greet(...person);
greet(...personTwo);

var names = ['sammy', 'oscar'];
var finalNames = ['alva', ...names];

finalNames.forEach(function (name) {
    console.log(`Hello ${name}`);
});
