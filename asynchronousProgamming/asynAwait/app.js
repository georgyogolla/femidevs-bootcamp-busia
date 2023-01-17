// ERROR HANDLING ASYNC

// ONE OPTION FOR ERROR HANDLING...
async function getPlanets() {
  //Invalid URL...
  const res = await axios.get('https://swapi.co/api/planeklsajdalksts/');
  console.log(res.data);
}

getPlanets().catch((err) => {
  console.log('IN CATCH!!!');
  console.log(err);
});

// ANOTHER OPTION...
async function getPlanets() {
  try {
    const res = await axios.get('https://swapi.co/api/planeklsajdalksts/');
    console.log(res.data);
  } catch (e) {
    console.log('IN CATCH!', e);
  }
}
getPlanets();

// MULTIPLE AWAITS
const moveX = (element, amount, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      const currLeft = element.getBoundingClientRect().left;
      if (elRight + amount > bodyBoundary) {
        reject({
          bodyBoundary,
          elRight,
          amount
        });
      } else {
        element.style.transform = `translateX(${currLeft + amount}px)`;
        resolve();
      }
    }, delay);
  });
};

const btn = document.querySelector('button');
async function animateRight(el, amt) {
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
}
animateRight(btn, 100).catch((err) => {
  console.log('Hit the right edge! Now Moving left!');
  animateRight(btn, -100);
});


// SEQUENTIAL VS PARALLEL 
// SEQUENTIAL REQUESTS!
async function get3PokemonSequential() {
  const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
  const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
  const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
  console.log(poke1.data);
  console.log(poke2.data);
  console.log(poke3.data);
}

// PARALLEL REQUESTS!
async function get3Pokemon() {
  const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
  const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
  const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
  const poke1 = await prom1;
  const poke2 = await prom2;
  const poke3 = await prom3;
  console.log(poke1.data);
  console.log(poke2.data);
  console.log(poke3.data);
}

get3Pokemon();

// *******************************************
// A better demonstration of the difference...
// *******************************************
function changeBodyColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
}

// IN SEQUENCE
async function lightShow() {
  await changeBodyColor('teal', 1000);
  await changeBodyColor('pink', 1000);
  await changeBodyColor('indigo', 1000);
  await changeBodyColor('violet', 1000);
}
// IN PARALLEL...
// Everything is "sent off" at the same time
// async function lightShow() {
// 	const p1 = changeBodyColor('teal', 1000);
// 	const p2 = changeBodyColor('pink', 1000);
// 	const p3 = changeBodyColor('indigo', 1000);
// 	const p4 = changeBodyColor('violet', 1000);
// 	await p1;
// 	await p2;
// 	await p3;
// 	await p4;
// }

lightShow();


// PARALLEL REQUESTS WITH PROMISE.ALL
async function get3Pokemon() {
  const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
  const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
  const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
  const results = await Promise.all([prom1, prom2, prom3]);
  printPokemon(results);
}

function printPokemon(results) {
  for (let pokemon of results) {
    console.log(pokemon.data.name);
  }
}

get3Pokemon();


function find_max(nums){
  let max_num = Number.NEGATIVE_INFINITY;
  for(let num of nums){
    if(num > max_num){

    }
  }
  return max_num;
}