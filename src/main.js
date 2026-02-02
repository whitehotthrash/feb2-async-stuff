function getPokemon() {
  // make web request to API
  // save the respone from the API
  let response = fetch("https://keapi.co/api/v2/pokemon/25")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((jsonData) => {
      // process the saved response from the API
      console.log(jsonData);

      // create HTML elements that use the response from the API
      let pokemonContainer = document.getElementById("pokemonDataContainer");
      let pokemonNameHeader = document.createElement("h2");
      pokemonNameHeader.innerText = jsonData.name;

      // add those HTML elements to the page
      pokemonContainer.appendChild(pokemonNameHeader);
    })
    .catch((error) => {
      console.log(error);
      console.log("resource does not exist");
      return;
    });
  console.log(response);
}

getPokemon();
