class Car {
  topSpeed;
  color;

  constructor(topSpeed, color) {
    this.topSpeed = topSpeed;
    this.color = color;
  }

  summary() {
    return `Top speed: ${this.topSpeed}, Color: ${this.color}`;
  }
}

class Ferrari extends Car {
  model;

  constructor(model, topSpeed, color) {
    super(topSpeed, color);
    this.model = model;
  }

  summary() {
    return `Model: ${this.model} \n\t Top speed: ${this.topSpeed} \n\t Color: ${this.color}`;
  }
}

const laFerrari = new Ferrari("LaFerrari", 300, "yellow");
const f50 = new Ferrari("F-50", 120, "red");

console.log(laFerrari.summary());
console.log();
console.log(f50.summary());
