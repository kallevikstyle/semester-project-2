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
    show: function(cards, zone, player) {
        const battleCard = this.findCard(cards, zone);
        console.log(battleCard);
        cardContent.html(`
            <h3>${zone}</h3>
            <p>Blablabla</p>
        `);
    }
};