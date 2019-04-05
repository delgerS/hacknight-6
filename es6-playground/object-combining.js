const speakerInfo = {
  name: "Oleg",
  lastName: "Gantumur",
  skills: ["javascript", "golang", "react", "backend", "frontend"]
};
const speakerSkills = {
  castReactMagic() {
    console.log('import React from "react"; ⚛︎');
  },
  castVueJS() {
    console.log("Vue.extend! 𝕍");
  },
  castBackendMagic() {
    console.log("🚀 Server is running on port 3000!");
  },
  castCSSmagic() {
    console.log("@media screen and (max-width: over 9000)! 📱");
  }
};

const speaker = { ...speakerInfo, ...speakerSkills };
console.log(speaker);
