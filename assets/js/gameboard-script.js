import animatedDice from "./lib/components/animated-dice/animatedDice.js";
import { createBoardSpaces } from "./lib/boardSpaces.js";
import { spaces } from "./lib/components/boardSpaceDetails.js";

// Check if players exist in localStorage
if (localStorage.getItem('player1') && localStorage.getItem('player2') && localStorage.getItem('alias1') && localStorage.getItem('alias2')) {
    const dice = document.querySelector('animated-dice');
    // Declare game object and store player details
    let game = {
        player1: {
            name: localStorage.getItem('player1'),
            alias: localStorage.getItem('alias1'),
            token: document.querySelector('.gameboard__player1'),
            troops: 0,
            space: 0,
            position: function() {
                return spaces[this.space]
            }    
        },
        player2: {
            name: localStorage.getItem('player2'),
            alias: localStorage.getItem('alias1'),
            token: document.querySelector('.gameboard__player2'),
            troops: 0,
            space: 0,
            position: null
        },
        turn: {
            player1: true,
            diceRoll: null,
            moveToken: function() {
                const tokenWidth = game.player1.token.offsetWidth;

                // Move tokens based on whose turn it is and if a dice has been rolled
                if (this.player1 && this.diceRoll) {
                    game.player1.space += game.turn.diceRoll;
                    console.log(game.player1.space);
                    const top = game.player1.position().top() + ((game.player1.position().width / 2) - (tokenWidth / 2)),
                        left = game.player1.position().left() + ((game.player1.position().width / 2) - (tokenWidth / 2));

                    game.player1.token.style.left = `${left}px`;
                    game.player1.token.style.top = `${top}px`;
                    
                } else if (!this.player1 && this.diceRoll) {
                    game.player2.space += game.turn.diceRoll;
                    const top = game.player2.position().top() + ((game.player2.position().width / 2) - (tokenWidth / 2)),
                        left = game.player2.position().left() + ((game.player2.position().width / 2) - (tokenWidth / 2));

                    game.player2.token.style.left = `${left}px`;
                    game.player2.token.style.top = `${top}px`;

                } else if (!this.diceRoll) {
                    const top = game.player1.position().top() + ((game.player1.position().width / 2) - (tokenWidth / 2)),
                        left = game.player1.position().left() + ((game.player1.position().width / 2) - (tokenWidth / 2));

                    game.player1.token.style.left = `${left}px`;
                    game.player1.token.style.top = `${top}px`;
                    // game.player2.token.style.left = `${left}px`;
                    // game.player2.token.style.top = `${top}px`;
                }
            }
        }
    }
    
    game.turn.moveToken();

    // Place spaces on board
    createBoardSpaces.start(spaces);
    // Event listener for dice
    dice.addEventListener('click', function() {
        game.turn.diceRoll = Number(dice.dataset.diceRoll);
        // TO DO
        // Modulus med spaces array.length
        game.turn.moveToken();
        
    });

} else {
    // Create error handling
    console.log("No players are selected. Please go back to home page and select players");
}
