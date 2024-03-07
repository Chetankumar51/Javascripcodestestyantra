console.log("js2 file");


var person = {
    firstName: "Allu Arjun",
    lastName: "Arvind",
    age: 39,
    gender: "male",
    isMarried: true,
    getFullName: function(){
        return this.firstName + " " + this.lastName
    }
}


console.log("person", person);

const fName = person.firstName
console.log("First Name -", fName);

const lName = person.lastName
console.log("Last Name -", lName);

const pAge = person.age
console.log("Age -", pAge);

var pGender = person.gender
console.log("Gender -", pGender);

var pIsMarried = person.isMarried
console.log("Is Married -", pIsMarried);

var fullName = person.getFullName()
console.log("Full Name -", fullName);



//Another way of accessing the properties of an object

console.log(person["age"]);

console.log(person["getFullName"]());