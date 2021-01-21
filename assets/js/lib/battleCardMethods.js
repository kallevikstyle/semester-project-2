const cardContent = $('.gameboard__battle-card-content');

export const battleCard = {
    findCard: function(cards, zone) {
        // Find all cards specific to given zone
        let zoneCards = cards.filter(function(item) {
            return item.zone === zone;
        });
        // Pick a random card
        return zoneCards[Math.floor(Math.random() * zoneCards.length)];
    },
    show: function(cards, zone) {
        const battleCard = this.findCard(cards, zone);
        cardContent.html(`
            <h3>${battleCard.zoneText}</h3>
            <p>${battleCard.text}</p>
            <p class="battle-card-dismiss">(click to dismiss)</p>
        `);
        // Return troop loss or gain the card gives to the player
        return battleCard.soldiers;
    },
    dealCard: function(game, animateCard) {
        // Check if player has landed on a battle card space
        if (game.turn.battleCard === 1) {
            animateCard(game);
            // Player gets more or less soldiers from the battle card
            game.player1.army += this.show(game.cards, game.spaces[game.player1.space].zone);
            game.player1.armyChange = true;
            // Update timing variable to delay score update
            game.timing.scoreUpdate = game.timing.flipCard() + 2000;
        } else if (game.turn.battleCard === 2) {
            animateCard(game);
            // Player gets more or less soldiers from the battle card
            game.player2.army += this.show(game.cards, game.spaces[game.player2.space].zone);
            game.player2.armyChange = true;
            // Update timing variable to delay score update
            game.timing.scoreUpdate = game.timing.flipCard() + 2000;
        } else {
            // Update timing variable to delay score update
            game.timing.scoreUpdate = game.timing.dice + game.timing.moveToken;
        }
    }
};

