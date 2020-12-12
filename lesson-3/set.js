class Person {
  name;
  age;
  gender;
  interests = new Set();
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
    } likes to ${Array.from(this.interests).join(",")}`;
  }

  addInterest(interest) {
    this.interests.add(interest);
  }
}

const p = new Person("Jane Doe", 32, "female");
p.addInterest("swim");
p.addInterest("swim");
console.log(p.bio());
