const justFunction = function() {
  return 2;
};
const arrowFunction = () => 2;

console.log(
  "justFunction vs arrowFunction:",
  justFunction() === arrowFunction()
);

const justFunctionWithObject = function() {
  return { cool: false };
};
const arrowFunctionWithObject = () => ({ cool: true });
