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
				id: item.Id,
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
const charactersMethods = {
	parentContainer: $(".character-select__card-container"),
    howManySelected: function() {
        const allCards = $('.card');
        let selectedCount = 0;

        for (let i=0; i < allCards.length; i++) {
            if (allCards[i].classList.contains('card--selected')) {
                selectedCount++;
            }
        }

        return selectedCount;
    },
	eventListener: function(card, character) {
        // Create event listener for card
        card.click(function() {
            
            console.log(character.name);
            // Check how many cards are selected
            if (card.hasClass('card--selected')) {
                // Deselect the card which is clicked
                card.removeClass();
                card.addClass('card');
            } else if (charactersMethods.howManySelected() === 2) {
                // The user tries to select a 3rd character
                console.log("You can not select more than 2 characters");
            } else if (charactersMethods.howManySelected() === 1) {
                // Player 2 is selected
                card.addClass('card--selected');
            } else if (charactersMethods.howManySelected() === 0) {
                // Player 1 is selected
                card.addClass('card--selected');
            } else {
                console.log("Sorry, there was an unexpected error... Please try again.")
            }
            
        });
    },
	createCards: function(items) {
		// Create a card for each item in array
		for (let i = 0; i < items.length; i++) {
			const card = $('<div></div>'),
				imgTop = $('<img>'),
				cardBody = $('<div></div>');

			// Add classes and attributes to elements
			card.addClass(`card`);
			card.attr('id', `character-${items[i].id}`);
			imgTop.addClass('card-img-top');
			cardBody.addClass('card-body');
			imgTop.attr(`src`, `https://via.placeholder.com/200`);
			imgTop.attr(`alt`, `Character placeholder`);
			
			// Append elements
			cardBody.html(`
				<h3 class="card-title">${items[i].name}</h3>
				<p class="card-alias">${items[i].alias}</p>
                <p class="card-text">${items[i].born}</p>
			`);
			card.append(imgTop);
			card.append(cardBody);
			this.parentContainer.append(card);

			// Create event listener for click
            this.eventListener(card, items[i]);
		}
	}
}

// +------ displayCharacters.js end ------+

function displayCharacterCards(items) {
    // Get sorted array of characters
    const characters = sortCharacters.createArray(items);
    
    charactersMethods.createCards(characters);
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