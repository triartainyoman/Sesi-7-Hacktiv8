const person = {
  name: "Komang",
  age: 20,
  address: {
    city: "Gianyar",
    country: "Indonesia",
  },
  interest: ["Workout", "Watching Youtube"],
};

const { name, age } = person;
// console.log(name);
const [hoby1, hoby2] = person.interest;
console.log(hoby2);
