import { sortCharacters } from "./lib/getCharacters.js";
import { displayCharacters } from "./lib/displayCharacters.js";

function displayCharacterCards(items) {
    const singlePlayer = $('#singleplayer')[0],
        multiPlayer = $('#multiplayer')[0],
        playButton = $('.character-select__play-btn');
    // Get sorted array of characters
    const characters = sortCharacters.createArray(items),
        playButtonTooltip = $('.character-select__play-btn-tooltip');
    // Clear localStorage
    localStorage.clear();
    // Display playable characters on page
    displayCharacters(characters);
    // Activate tooltip on play button    
    playButtonTooltip.tooltip();
    // Store game mode in localStorage
    playButton.click(function() {
        if (singlePlayer.checked) {
            localStorage.setItem('gameMode', 'singleplayer');
        } else if (multiPlayer.checked) {
            localStorage.setItem('gameMode', 'multiplayer');
        }
    });
    
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



