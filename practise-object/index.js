const bird = {
  name: "B",
  color: "green",
};

const horse = {
  name: "H",
  color: "brown",
};

const cat = {
  name: "p",
  price: "£6",
};

const rabbit = {
  name: "S",
  color: "white",
};

const pets = {
  species: ["mammal", "bird"],

  dog: {
    name: "x",
    price: "$2",
  },

  cat,
  rabbit,

  name: "A",
  price: "£5",
};
console.log(pets.species);

pets.species[2] = "reptile";

console.log(pets.dog.price);
console.log(pets["dog"].name);
console.log(pets["dog"]["name"]);

pets["weight"] = "10kg";

pets["horse"] = horse;

pets.bird = bird;
pets.price = "£10";

pets.color = "red";
rabbit.price = "£10";
pets["name"] = "B";
pets.dog["color"] = "black";
pets.cat.color = "pink";
console.log(pets);
