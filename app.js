const myTime = () => {
  let now = new Date()

  let soat = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
  let minute = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
  let seconds = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();

  document.querySelector('.magic_hours').innerHTML = soat;
  document.querySelector('.magic_min').innerHTML = minute;
  document.querySelector('.magic_second').innerHTML = seconds;
  console.log(`${soat}:${minute}:${seconds}`)
}
let interval = setInterval(myTime, 1000);
const menu = document.querySelector('.navMenu')
const headerRight = document.querySelector('.header_right')
const xmark = document.getElementById('xmark')
const backdrop = document.getElementById('backdrop')

menu.addEventListener('click', () => {
  menu.classList.toggle('dn')
  xmark.classList.toggle('dn')
  headerRight.classList.add('toggle_sidebar')
  backdrop.classList.add('overflow')

})
xmark.addEventListener('click', () => {
  menu.classList.toggle('dn')
  xmark.classList.toggle('dn')
  headerRight.classList.remove('toggle_sidebar')
  backdrop.classList.remove('overflow')
})

if (window.matchMedia("(max-width: 910px)").matches) {
  menu.classList.remove('dn')
  headerRight.classList.add('dn')
} else {
  menu.classList.add('dn')
  headerRight.classList.remove('dn')
}

const header = document.querySelector('.header');
console.log(header)
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add('header_shodow')
  } else {
    header.classList.remove('header_shodow')
  }
})