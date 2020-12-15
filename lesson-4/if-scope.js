// let x = 1;
// let y = "Y";

// if (true) {
//   x = 2;
//   let y = "Z";
// }

// console.log(x, y);

// let test = false;
// if (test) {
//   console.log("test was true!");
// } else if ("hi there" === test) {
//   console.log('test was "hi there"');
// } else {
//   console.log('test was not true or "hi there"');
// }

let sentence = `software school is cool`;
if (sentence.endsWith("cool")) console.log("Yup, software school is cool");

let pokemonTrainers = ["Brock", "Liam", "Jerry"];
pokemonTrainers.forEach((trainer) => {
  if ("Liam" === trainer) {
    console.log("We found Liam!");
  }
});
if (pokemonTrainers.includes("Liam")) {
  console.log("Yup Liam is in the list of trainers");
}
