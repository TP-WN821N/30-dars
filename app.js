const user = querySelector('.user')


const myTime = () => {
  let now = new Date()

  let hour = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
  let minute = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
  let seconds = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();

  document.querySelector('.magic_hours').innerHTML = hour;
  document.querySelector('.magic_min').innerHTML = minute;
  document.querySelector('.magic_second').innerHTML = seconds;
}
let interval = setInterval(myTime, 1000)
myTime()

