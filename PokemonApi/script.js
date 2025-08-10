const imageContainer = document.getElementById('image-container');

const image = imageContainer.querySelector('img');

const API_URL = "https://pokeapi.co/api/v2/pokemon/fennekin";

async function fetchData(){

    try{
        const response = await fetch(API_URL);

        if(!response.ok){
            throw new Error(`HTTP error ${response.status}`)
        }

        const pokemonData = await response.json();
        console.log(pokemonData);


            const imageUrl = pokemonData.sprites.front_default;

            image.src = imageUrl;
            image.alt = "fennekin";

    }

    catch(error){
        imageContainer.innerHTML = `<p style="color: red;" >Failed to load pokemon data ${error.message}</p>`
        console.error("An error has occured!", error);
    }
}
fetchData();