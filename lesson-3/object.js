const person = {
  name: "Jane Doe",
  age: 32,
  gender: "female",
  interests: ["swim"],
  bio: function () {
    console.log(
      `${this.name} is ${this.age} years old. ${
        this.name
      } likes to ${this.interests.join(",")}`
    );
  },
  greeting: function () {
    console.log(`Hi I am ${this.name}`);
  },
};
person.bio();
