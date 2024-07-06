var people = [
    { name: "John Doe", age: 30 },
    { name: "Jane Doe", age: 25 },
    { name: "Jim Beam", age: 35 }
];
function filterAdults(persons) {
    return persons.filter(function (person) { return person.age >= 30; });
}
var adults = filterAdults(people);
console.log(adults);
