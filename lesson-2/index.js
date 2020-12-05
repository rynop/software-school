const myProgramName = `I like trains`;

for (let i = 0; i < 3; i++) {
  console.log(`Hello world: ${myProgramName} (${i})`);
  if (2 === i) {
    console.error("Exiting program...");
  }
}
