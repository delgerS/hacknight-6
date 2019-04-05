const response = {
  data: {
    event: "Hacknight",
    place: "Hub innovation center",
    topic: "Web, Javascript and things...",
    tax: 5000,
    special: true
  }
};

let {
  data: { event, place, ...rest }
} = response;
console.log("Event: ", event);
console.log("Place: ", place);
console.log("Rest: ", rest);
