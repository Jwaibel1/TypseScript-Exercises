var car = {
  brand: "Toyota",
  speed: 120,
  accelerate: function () {
    console.log("The ".concat(this.brand, " is accelerating"));
  },
  brake: function () {
    console.log("the ".concat(this.brand, " is stopping"));
  },
};
car.accelerate();
car.brake();
