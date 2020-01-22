// Your code goes here
const pic = document.querySelector('img');
console.log(pic);
pic.addEventListener("mouseover", () => {
  pic.style.transform = "scale(1.2)";
  pic.style.transition = "all 0.3s"
});
pic.addEventListener("mouseleave" , () => {
  pic.style.transform = "scale(1)";
});

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
})