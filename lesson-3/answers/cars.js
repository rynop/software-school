class Car {
  topSpeed;
  color;

  constructor(theTopSpeed, theColor) {
    this.topSpeed = theTopSpeed;
    this.color = theColor;
  }

  get about() {
    return `Top speed: ${this.topSpeed} \n\t Color: ${this.color}`;
  }
}

class Ferrari extends Car {
  model;
  horsePower;

  constructor(topSpeed, color, theModel, theHorsePower) {
    super(topSpeed, color);
    this.model = theModel;
    this.horsePower = theHorsePower;
  }

  summary() {
    return `Model: ${this.model} \n\t BHP: ${this.horsePower} \n\t ${this.about}`;
  }
}

const laFerrari = new Ferrari(220, "red", "LaFerrari", 949);
const f50 = new Ferrari(201, "yellow", "F-50", 512);

console.log(laFerrari.summary());
console.log();
console.log(f50.summary());
