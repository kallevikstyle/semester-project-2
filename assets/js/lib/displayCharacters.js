export const displayCharacters = {
    parentContainer: $(".character-select__card-container"),
    eventListener: function(card, character) {
        // Create event listener for card
        card.click(function() {
            const allCards = $('.card');
            let selectedCount = 0;
            console.log(character.name);
            // console.log(character.id);
            $(`#character-${character.id}`).toggleClass('card--selected');
            for (let i=1; i < allCards.length; i++) {
                if (allCards[i].classList.contains('card--selected')) {
                    selectedCount++;
                }
            }
            console.log(selectedCount);
            
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