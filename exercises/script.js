const name = "Htun";
let university = "UCS(Mdy)";
let learning = "JavaScript";
let project = 1;
let internship = true;


console.log(`My name is ${name}`);
console.log(`I study at ${university}`);
console.log(`I'm learning ${learning}`);
console.log(`I've completed ${project} project`);
console.log(`Looking for an internship: ${internship}`);

let age = 17;
let final_year = true;
if(age >= 18 || final_year){
    console.log("You can apply.");
}else{
    console.log("You're too young to apply.")
}