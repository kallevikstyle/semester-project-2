export const displayCharacters = {
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
            } else if (displayCharacters.howManySelected() === 2) {
                // The user tries to select a 3rd character
                console.log("You can not select more than 2 characters");
            } else if (displayCharacters.howManySelected() === 1) {
                // Player 2 is selected
                card.addClass('card--selected');
            } else if (displayCharacters.howManySelected() === 0) {
                // Player 1 is selected
                card.addClass('card--selected');
            } else {
                console.log("Sorry, there was an unexpected error... Please try again.")
            }
            
            displayCharacters.howManySelected();
            // console.log(selectedCount);
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
	},
	start: function(items) {
		// Pass items to createCards method
		this.createCards(items);
	}
}