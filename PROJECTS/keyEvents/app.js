const input = document.querySelector('#username');

//Happens when you hold down a key
input.addEventListener('keydown', function (e) {
  console.log('KEY DOWN');
});

//Happens when you release a key
input.addEventListener('keyup', function (e) {
  console.log('KEY UP');
});

//Only happens when a key is typed
input.addEventListener('keypress', function (e) {
  console.log('PRESSED A KEY');
});

//select the add items input
const addItemInput = document.querySelector('#addItem');

//select the ul
const itemsUL = document.querySelector('#items');

addItemInput.addEventListener('keypress', function (e) {
  // console.log(e);
  if (e.key === 'Enter') {
    if (!this.value) return;
    const newItemText = this.value;
    const newItem = document.createElement('li');
    newItem.innerText = newItemText;
    itemsUL.appendChild(newItem);

    //clear the input whene you press enter after typing
    this.value = '';
  };
})