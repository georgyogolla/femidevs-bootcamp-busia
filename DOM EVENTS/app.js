const btn = document.querySelector('#clicker');
//Doesn't allow you to add more than one event listener
//if you add more than one event listener, it will overwrite the previous one
// btn.onclick = function () {
//   alert('You clicked me!');
// }

//EFFICENT WAY OF ADDING EVENT LISTENER
//allows you to add more than one event listener without overwriting the previous one

btn.addEventListener('click', function () {
  console.log('YOU CLICKED ME!');
});

btn.addEventListener('click', function () {
  console.log('YOU CLICKED ME AGAIN!');
});

// when you hover over the button, the text changes
btn.addEventListener('mouseover', function () {
  btn.innerText = 'STOP TOUCHING ME!';
});

// when you hover out of the button, the text changes back
btn.addEventListener('mouseout', function () {
  btn.innerText = 'Click me!';
});