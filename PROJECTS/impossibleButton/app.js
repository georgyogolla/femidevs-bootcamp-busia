const btn = document.querySelector('button');

btn.addEventListener('mouseover', function () {
  // console.log('MOUSED OVER ME');
  //use window object to move the button around the screen

  //get the width of the window
  const width = Math.floor(Math.random() * window.innerWidth);

  //get the height of the window
  const height = Math.floor(Math.random() * window.innerHeight);

  //move the button to a random position
  btn.style.left = `${width}px`;
  btn.style.top = `${height}px`;
});

//change the inner text and background color of the button when clicked
btn.addEventListener('click', function () {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  btn.innerText = 'HAHAHAHAHAH .. GAME OVER!';

})