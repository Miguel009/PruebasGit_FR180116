var skill:Array<string> = ['Javascript', 'TypeScript', 'Angular'];
var numberArray:number[]=[123, 123, 1213, 1231];

console.log("todos: "+skill);

console.log("1: "+skill[0]);
console.log("2: "+skill[1]);
console.log("3: "+skill[2]);
console.log("------------------------------------------------");
console.log("todos los numeros: "+numberArray);
console.log("1: "+numberArray[0]);
console.log("2: "+numberArray[1]);
console.log("3: "+numberArray[2]);
console.log("3: "+numberArray[3]);

enum ROLE {employee, Manager, admin, Developer};

var role:ROLE = ROLE.Developer;
console.log("------------------------------------------------");
console.log("role:"+role)