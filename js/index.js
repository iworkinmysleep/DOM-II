// Your code goes here
const pics = document.querySelectorAll('img');
console.log(pics);
pics.forEach(pic => {
  pic.addEventListener('mouseover', () => {
    pic.style.transform = 'scale(1.2)'
    pic.style.transition = 'all 0.3s'
  })
})

pics.forEach(pic => {
  pic.addEventListener('mouseleave', () => {
    pic.style.transform = 'scale(1)'
  })
})

const changeHeading = document.querySelector(".logo-heading");
console.log(changeHeading);
changeHeading.addEventListener("dblclick", () => {
  changeHeading.innerText = "Boring Bus";
});

const navBar = document.querySelector(".main-navigation");

window.addEventListener('scroll', () => {
    navBar.style.background = '#85C6CB';
});

const wheelEvent = document.querySelector('.text-content');
wheelEvent.addEventListener('wheel', (e) => {
  e.target.style.fontSize = "35px";
});

window.addEventListener('resize', () => {
  changeHeading.innerText = 'Skinny Bus';
})

const welcome = document.querySelector('.intro h2');
console.log(welcome);
welcome.addEventListener('focus', (event) => {
  event.target.style.backgroundColor = 'pink';    
});

welcome.addEventListener('blur', (event) => {
  event.target.style.backgroundColor = '';    
});

const body = document.querySelector('body');
body.addEventListener('click', () => {
  body.style.backgroundColor = "blue";
});
const container = document.querySelector('.intro');
container.addEventListener('click', (event) => {
  container.style.backgroundColor = "pink";
  event.stopPropagation();
});
const content = document.querySelector('.content-section');
content.addEventListener('click', (event) => {
  content.style.backgroundColor = "yellow";
  event.stopPropagation();
});

const preventRefresh = document.querySelectorAll('.nav-link');
preventRefresh.addEventListener('click', (event) => {
    event.target.preventDefault();
});
 

