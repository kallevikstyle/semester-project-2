import { sortCharacters } from "./lib/getCharacters.js";
import { displayCharacters } from "./lib/displayCharacters.js";

function displayCharacterCards(items) {
    // Get sorted array of characters
    const characters = sortCharacters.createArray(items);
    // Clear localStorage
    localStorage.clear();
    // Display playable characters on page
    displayCharacters(characters);
    
}

(function() {
    // Load characters from json
    fetch('/assets/json/characters.json')
        .then(result => result.json())
        .then((data) => {
            displayCharacterCards(data);
        })
        .catch(err => console.log("err"));
})();



