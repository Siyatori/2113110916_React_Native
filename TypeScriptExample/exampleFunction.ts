interface Person{
    name: string;
    age: number;
}

const people: Person[] = [
    {name: "John Doe", age: 30},
    {name: "Jane Doe", age: 25},
    {name: "Jim Beam", age: 35}
];

function filterAdults(persons:Person[]):Person[]{
    return persons.filter(person=>person.age>=30);
}

const adults = filterAdults(people);
console.log(adults);