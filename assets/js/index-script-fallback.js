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

// +------ displayCharacters.js start ------+
const displayCharacters = {
	parentContainer: $(".character-select__card-container"),
	grid: "col-12",
	createCards: function(items, parent, grid) {
		// Create a card for each item in array
		for (let i = 0; i < items.length; i++) {
			const card = $('<div></div>'),
				imgTop = $('<img>'),
				cardBody = $('<div></div>');

			// Add classes and attributes to elements
			card.addClass(`card ${grid}`);
			imgTop.addClass('card-img-top');
			cardBody.addClass('card-body');
			imgTop.attr(`src`, `https://via.placeholder.com/200`);
			imgTop.attr(`alt`, `Character placeholder`);
			
			// Append elements
			cardBody.html(`
				<h3 class="card-title">${items[i].name}</h3>
                <p class="card-text">${items[i].born}</p>
			`);
			card.append(imgTop);
			card.append(cardBody);
			parent.append(card);
		}

		



	},
	start: function(items) {
		// this.parentContainer.html("Testing jquery");
		this.createCards(items, this.parentContainer, this.grid);
	}
}

// +------ displayCharacters.js end ------+

function displayCharacterCards(items) {
    // Get sorted array of characters
    const characters = sortCharacters.createArray(items);
    
    displayCharacters.start(characters);
    // Display character cards on page
    console.log(characters);
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