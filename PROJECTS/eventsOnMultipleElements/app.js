const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet'
];

const container = document.querySelector('#boxes');

const h1 = document.querySelector('h1');

function changeColor() {
  h1.style.color = this.style.backgroundColor;
}
for (let color of colors) {
  const box = document.createElement('div');
  box.style.backgroundColor = color;
  box.classList.add('box');
  container.appendChild(box);
  box.addEventListener('click', changeColor);
}