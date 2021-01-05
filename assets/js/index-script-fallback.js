// +------- getCharacters.js module start-------+
const sortCharacters = {
	sortByNames: function(data) {
        // Sort input array of objects by name property
        return data.sort((a, b) => (a.Name > b.Name) ? 1 : -1);
    },
    pickRandomAlias: function(items) {
        // Pick a random alias for each character name
        return items[Math.floor(Math.random() * items.length)];

    },
    createArray: function(data) {
        let characters = this.sortByNames(data),
            playable = [];
        
        // Create array of playable characters
        characters.forEach(function(item) {
            let itemObj = {
                name: item.Name,
                alias: sortCharacters.pickRandomAlias(item.Aliases),
                born: item.Born
            };
        
            playable.push(itemObj);

        });
        
        return playable;   
    }
}
// +------ getCharacters.js end ------+

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