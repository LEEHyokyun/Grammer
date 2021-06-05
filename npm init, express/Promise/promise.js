const variable_promise = new Promise((resolve, reject) => {
  resolve(console.log("Do Promise"));
});

variable_promise.then(() => {
  console.log("Finish Promise");
});

const variable_promise_setTimeout = new Promise((resolve, reject) => {
  console.log("Start promise");
  setTimeout(() => {
    resolve(console.log("Doing promise"));
  }, 1000);
});
variable_promise_setTimeout.then(() => {
  console.log("Finish promise");
});
