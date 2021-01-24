import { game } from "./gameObject.js";

export const scoreBoard = {
    avatar1: $('.scoreboard__avatar--player1'),
    avatar2: $('.scoreboard__avatar--player2'),
    titlePlayer1: $('.scoreboard__status-title.player1'),
    titlePlayer2: $('.scoreboard__status-title.player2'),
    armyPlayer1: $('.scoreboard__status-body--army-count.player1'),
    armyPlayer2: $('.scoreboard__status-body--army-count.player2'),
    winStatusPlayer1: $('.scoreboard__status-footer.player1'),
    winStatusPlayer2: $('.scoreboard__status-footer.player2'),
    winStatusMessage: function(army, container) {
        let message = "";
        if (army < game.armyToWin) {
            message = `<p class="needMore">${game.armyToWin - army} more soldiers needed</p>`; 
        } else {
            message = `<p class="ready">Ready to challenge capital!</p>`;
        }
        // Display status message
        container.html(message);
    },
    formatNumber: function(number) {
        // Format numbers to international format
        return new Intl.NumberFormat().format(number);
    },
    setup: function(game) {
        // Insert player avatars
        this.avatar1.html(`<img src="assets/images/characters/${game.player1.avatar}" alt="${game.player1.name}">`);
        this.avatar2.html(`<img src="assets/images/characters/${game.player2.avatar}" alt="${game.player2.name}">`);
        // Insert player names
        this.titlePlayer1.html(`${game.player1.name}`);
        this.titlePlayer2.html(`${game.player2.name}`);
        // Insert army count
        this.armyPlayer1.html(`${this.formatNumber(game.player1.army)}`);
        this.armyPlayer2.html(`${this.formatNumber(game.player2.army)}`);
        // Insert win status message
        this.winStatusMessage(game.player1.army, this.winStatusPlayer1);
        this.winStatusMessage(game.player2.army, this.winStatusPlayer2);
    },
    update: function(game) {
        
        // Update army count
        if (game.player1.armyChange) {
            this.armyPlayer1.html(`${this.formatNumber(game.player1.army)}`);
            
            // Update status message below army count
            this.winStatusMessage(game.player1.army, this.winStatusPlayer1);
            // Reset armyChange boolean
            game.player1.armyChange = false;
        } else if (game.player2.armyChange) {
            this.armyPlayer2.html(`${this.formatNumber(game.player2.army)}`);
            // Update status message below army count
            this.winStatusMessage(game.player2.army, this.winStatusPlayer2);
            // Reset armyChange boolean
            game.player2.armyChange = false;
        }
    }
}