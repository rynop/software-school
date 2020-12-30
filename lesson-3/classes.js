class Person {
  name;
  age;
  gender;
  interests = [];
  #displayName = "Person";

  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  getDisplayName() {
    return this.#displayName;
  }

  get displayName() {
    return this.#displayName;
  }

  bio() {
    return `${this.name} is ${this.age} years old. ${
      this.name
    } likes to ${this.interests.join(",")}`;
  }

  addInterest(interest) {
    this.interests.push(interest);
  }
}

const p = new Person("Jane Doe", 32, "female");
p.addInterest("swim");
p.addInterest("swim");
console.log(p.getDisplayName());
console.log(p.displayName);
console.log(p.bio());
