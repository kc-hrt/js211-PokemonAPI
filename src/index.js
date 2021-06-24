console.clear();

let numReserve = 0;
// get random pokemon
const getPokemon = (side) => {
  let pokeName = document.getElementById("pokeName-" + side);
  // img tag for image
  let pokeImg = document.getElementById("pokeImg-" + side);
  // UL tag for details
  let pokeUL = document.getElementById("pokeUL-" + side);
  let pokemon; // random pokemon
  let randomNum; // random number variable

  // list of Characteristics
  let liHeight = document.createElement("li");
  let liWeight = document.createElement("li");
  let liMoves = document.createElement("li");

  // get random number for Pokemon querey
  do {
    randomNum = Math.floor(Math.random() * 19) + 1;
  } while (randomNum === numReserve);
  numReserve = randomNum; // used to prevent same numer twice in row (duplicate)

  fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}/`)
    .then((res) => res.json())
    .then((data) => {
      pokemon = data;

      pokeName.innerText = pokemon.name.toUpperCase(); // populates name
      pokeImg.src = pokemon.sprites.front_default; // populates image

      liHeight.innerText = "Height: " + pokemon.height;
      pokeUL.appendChild(liHeight);
      liWeight.innerText = "Weight: " + pokemon.weight;
      pokeUL.appendChild(liWeight);

      liMoves.innerText = "Abilities: ";
      pokemon.moves.forEach((move, index) => {
        if (index < 4) {
          console.log("🌴", move.move.name);
          liMoves.innerText += move.move.name + ", ";
        } else if (index === 5) {
          liMoves.innerText += move.move.name;
          console.log("🌈", move.move.name);
        }
      });
      pokeUL.appendChild(liMoves);

      console.log("poke", pokemon.name);
      console.log("height:", pokemon.height);
      console.log("weight:", pokemon.weight);
      console.log("moves:", pokemon.moves);
      console.log("img::", pokemon.sprites.front_default);
      console.log("abilities::", pokemon.abilities);

      // pokeUL.appendChild(li);
      // space for first fighter
    });
  return pokemon;
};

const battleBtn = () => {

};

getPokemon("left");
getPokemon("right");
