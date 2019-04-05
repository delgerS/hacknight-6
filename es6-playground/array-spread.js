const arr = [
  { event: "Hacknight-1", topic: undefined },
  { event: "Hacknight-2", topic: "AWS Cognito" },
  { event: "Hacknight-3", topic: "Docker" },
  { event: "Hacknight-4", topic: "CI/CD with CircleCI" },
  { event: "Hacknight-5", topic: "Kubernetes" },
  {
    event: "Hacknight-6",
    topic: "Web, Javascript and things...",
    special: true
  }
];

let [first, second, ...rest] = arr;
console.log("First event:", first);
console.log("Second event:", second);
console.log("Other events:", rest);
