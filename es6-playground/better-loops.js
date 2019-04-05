const iterateMe = {
  firstKey: 1,
  secondKey: 2,
  thirdKey: 3
};

for (let key in iterateMe) {
  console.log("Key:", key);
  console.log("Value:", iterateMe[key]);
}

const iterateMyValues = ["Hi", "I", "am", "array"];
for (let word of iterateMyValues) console.log(word);
