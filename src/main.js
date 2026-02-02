
function getPokemon() {
  // make web request to API
  
  //  save the respone from the API 
  let response = fetch("https://pokeapi.co/api/v2/pokemon/25").then((response) => {
    console.log(response)
    return response.json();
    
  }).then((jsonData) => {
    // process the saved response from the API
    console.log(jsonData);

  });
  console.log(response)
  
  // create HTML elements that use the response from the API
  
  // add those HTML elements to the page

}


getPokemon()
// https://pokeapi.co/api/v2/pokemon