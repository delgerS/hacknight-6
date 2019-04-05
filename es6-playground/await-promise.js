function asyncPrint(data) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(data);
      resolve();
    }, 5000);
  });
}

async function goodWaitForEvents() {
  let printEvents = [];
  for (let i = 0; i < 10; i++) printEvents.push(asyncPrint({ goodPrint: i }));
  await Promise.all(printEvents);
}
async function badWaitForEvents() {
  let printEvents = [];
  for (let i = 0; i < 10; i++) printEvents.push(asyncPrint({ badPrint: i }));
  for (let i = 0; i < 10; i++) await printEvents[i];
}

badWaitForEvents();
goodWaitForEvents();
