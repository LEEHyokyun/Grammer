const input_delayed = new Promise((resolve, reject) => {
  reject(console.log("error catched"));
});

//resolve
input_delayed
  .then(() => {
    console.log("after error cathced");
  })
  .catch((err) => {
    console.log;
  });
