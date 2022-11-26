let cars = new Map([
  ["japan", "toyota"],
  ["germany", "audi"],
  ["usa", "ford"]
]);

for (let name of cars.keys()) {
  console.log(name);
};

for (let elem of cars) {
  console.log(elem)
}