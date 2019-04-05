let varActions = [];
for (var i = 0; i < 5; i++) varActions.push(() => i);

let letActions = [];
for (let i = 0; i < 5; i++) letActions.push(() => i);

letActions.forEach((fn, index) => console.log(`letAction(${index}): ${fn()}`));
varActions.forEach((fn, index) => console.log(`varAction(${index}): ${fn()}`));
