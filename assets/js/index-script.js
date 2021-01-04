import { sortCharacters } from "./lib/getCharacters.js";

function displayCharacters(items) {
    // Get sorted array of characters
    const characters = sortCharacters.createArray(items);
    
    // Display character cards on page
    console.log(characters);
}

(function() {
    // Load characters from json
    fetch('/assets/json/characters.json')
        .then(result => result.json())
        .then((data) => {
            displayCharacters(data);
        })
        .catch(err => console.log("err"));
})();



