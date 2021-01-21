export const turnStatus = {
    turnParagraph: $('.center-panel__turn'),
    actionParagraph: $('.center-panel__action'),
    formatName: function(name) {
        // Format name to use only first name
        name = name.substr(0, name.indexOf(" ")) || name.substr(0, name.length);
        if (name.substr(-1) === "s") {
            return name + "\'";
        } else {
            return name + "\'s"
        }
    },
    player: function(game) {
        // Display whose turn it is
        let firstName = 'player';
        if (game.turn.player1) {
            firstName = this.formatName(game.player1.name);
        } else {
            firstName = this.formatName(game.player2.name);
        }
        this.turnParagraph.html(`It's ${firstName} turn`);
    }
}