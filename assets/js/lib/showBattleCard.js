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
        console.log(battleCard);
        cardContent.html(`
            <h3>${battleCard.zoneText}</h3>
            <p>${battleCard.text}</p>
            <p class="battle-card-dismiss">(click to dismiss)</p>
        `);
        console.log(battleCard.troops);
        // Return troop loss or gain the card gives to the player
        return battleCard.troops;
    }
};