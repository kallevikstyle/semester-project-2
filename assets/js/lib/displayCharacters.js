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
    selectedCharacters: function(player, character, selected) {
        if (player > 0 && selected) {
            localStorage.setItem(`player${player}`, character.name);
            localStorage.setItem(`alias${player}`, character.alias);
            localStorage.setItem(`avatar${player}`, character.img);
        } else {
            localStorage.removeItem(`player${player}`);
            localStorage.removeItem(`alias${player}`);
            localStorage.removeItem(`avatar${player}`);
        }
    },
	eventListener: function(card, character) {
        const playButton = $('.character-select__play-btn'),
            playButtonTooltip = $('.character-select__play-btn-tooltip');
        // Create event listener for card
        card.click(function() {
            let selected;
            
            // Check how many cards are selected
            if (card.hasClass('card--selected')) {
                // Deselect the card which is clicked
                selected = false;
                if (card.hasClass('card--player1')) {
                    charactersMethods.selectedCharacters(1, character, selected);
                } else {
                    charactersMethods.selectedCharacters(2, character, selected);
                }
                card.removeClass();
                card.addClass('card');
                // Disable 'play' button and enable tooltip
                playButton.addClass('disabled');
                playButtonTooltip.tooltip('enable');

            } else if (charactersMethods.howManySelected() === 2) {
                // The user tries to select a 3rd character
                console.log("You can not select more than 2 characters");
            } else if (charactersMethods.howManySelected() === 1) {
                // Select player when another player is already selected
                card.addClass('card--selected');

                // If a player 1 is already selected
                if ($('.card--player1')[0]) {
                    selected = true;
                    charactersMethods.selectedCharacters(2, character, selected);
                    card.addClass('card--player2');
                } else {
                    // A player 2 is already selected
                    selected = true;
                    charactersMethods.selectedCharacters(1, character, selected);
                    card.addClass('card--player1');
                }
                // Enable 'play' button and disable tooltip
                playButton.removeClass('disabled');
                playButtonTooltip.tooltip('disable');
                
            } else if (charactersMethods.howManySelected() === 0) {
                // Select player 1
                selected = true;
                charactersMethods.selectedCharacters(1, character, selected);
                card.addClass('card--selected');
                card.addClass('card--player1');
            } else {
                alert("Sorry, there was an unexpected error... Please go back and try again.")
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
			imgTop.attr(`src`, `assets/images/characters/${items[i].img}`);
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
}

export const displayCharacters = function(items) {
	charactersMethods.createCards(items);
}