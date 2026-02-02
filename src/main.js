// function getPokemon() {
//   // make web request to API
//   // save the respone from the API
//   let response = fetch("https://pokeapi.co/api/v2/pokemon/25")
//     .then((response) => {
//       console.log(response);
//       return response.json();
//     })
//     .then((jsonData) => {
//       // process the saved response from the API
//       console.log(jsonData);

//       // create HTML elements that use the response from the API
//       let pokemonContainer = document.getElementById("pokemonDataContainer");
//       let pokemonNameHeader = document.createElement("h2");
//       pokemonNameHeader.innerText = jsonData.name;

//       // add those HTML elements to the page
//       pokemonContainer.appendChild(pokemonNameHeader);
//     })
//     .catch((error) => {
//       console.log(error);
//if (!response) {}
// message: "nope"
// statusCode: httpStatusCodes.clientError.UNAUTHORIZED
//       console.log("resource does not exist");
//       return;
//     });
//   console.log(response);
// }
// fetch/then is asynchronous non-blocking

async function getPokemon() {
  // make web request to API
  // save the response
  let randomNumber = await delayedRandomNumber()
  let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber);
  let bodyData = await response.json();
  //process the saved response from the API
  console.log(bodyData);

  // create HTML elements that use the response from the API
  let pokemonContainer = document.getElementById("pokemonDataContainer");
  // let pokemonNameHeader = document.createElement("h2");
  let pokemonNameHeader = document.getElementById("pokemonName")
  pokemonNameHeader.innerText = bodyData.name;

  // add those HTML elements to the page
  pokemonContainer.appendChild(pokemonNameHeader);
}
// await fetch is async blocking
//getPokemon();


async function delayedRandomNumber(){

  // async blocking delay within the function
  await new Promise(resolve => setTimeout(resolve, Math.random() * 500));
  return Math.floor(Math.random() * 1025) + 1;

  // set timeout is non-blocking async
  // setTimeout(() => {
  //   return (Math.floor(Math.random()) * 1025) + 1;
  // }, Math.random() * 2000)
}

const button = document.getElementById("pokeButton");
button.addEventListener("click", function () {
  getPokemon()
})
// create an event listener for the click on the button
// to get a random pokemon