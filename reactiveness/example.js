let reactiveStorage = {};

const defineReactiveProp = (prop, callback, initialValue) => {
  let v = initialValue;
  Object.defineProperty(reactiveStorage, prop, {
    get: () => v,
    set: newValue => {
      v = newValue;
      callback(newValue);
    }
  });
};

let sum = 0;
const updateSum = () => {
  sum = reactiveStorage.a + reactiveStorage.b;
  console.log("Sum is updated:", sum);
};
defineReactiveProp("a", updateSum, 0);
defineReactiveProp("b", updateSum, 0);

reactiveStorage.a = 4;
reactiveStorage.b = 5;
