export const displayCharacters = {
    parentContainer: $(".character-select__card-container"),
	createCards: function(items, parent) {
		// Create a card for each item in array
		for (let i = 0; i < items.length; i++) {
			const card = $('<div></div>'),
				imgTop = $('<img>'),
				cardBody = $('<div></div>');

			// Add classes and attributes to elements
			card.addClass(`card`);
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
			parent.append(card);
		}
	},
	start: function(items) {
		// Pass items to createCards method
		this.createCards(items, this.parentContainer);
	}
}