const clock = document.getElementById("clock");
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());

  clock.innerHTML = date.getMonth() + 1;
}, 1000);
