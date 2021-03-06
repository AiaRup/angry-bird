'use strict';

const kissBtn = document.querySelector('.love-btn');
const page = document.querySelector('.page');

let heartArr = [];
let screenWidth = document.documentElement.clientWidth;
let counter = 0;
let temp;

const createHeart = () => {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  const speed = Math.floor(Math.random() * 16) + 5;
  const position = Math.floor(Math.random() * screenWidth) + 1;
  const anim = Math.floor(Math.random() * 2) + 1;
  heart.style.animation = `falling${anim} ${speed}s ease-out infinite`;
  heart.style.left = `${position}px`;
  page.appendChild(heart);
  counter++;
  if (counter === 20) {
    clearInterval(temp);
  }
};

const setup = () => {
  temp = setInterval(createHeart, 300);
};

const kissMe = () => {
  setup();
};

const onResizeWindow = () => {
  screenWidth = window.innerWidth;
};

kissBtn.addEventListener('click', kissMe);
window.addEventListener('resize', onResizeWindow);
