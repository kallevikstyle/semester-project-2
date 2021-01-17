import { spaces } from "./components/boardSpaceDetails.js";

// Game object with details about game and players
export let game = {
        spacesTotal: 30,
        player1: {
            name: localStorage.getItem('player1'),
            alias: localStorage.getItem('alias1'),
            token: $('.gameboard__token--player1'),
            troops: 0,
            space: 0,
            position: function() {
                return spaces[this.space]
            }    
        },
        player2: {
            name: localStorage.getItem('player2'),
            alias: localStorage.getItem('alias2'),
            token: $('.gameboard__token--player2'),
            troops: 0,
            space: 0,
            position: function() {
                return spaces[this.space]
            }  
        },
        turn: {
            player1: true,
            diceRoll: null,
            switchTurns: function(diceRoll) {
                if (diceRoll === 6) {
                    // The player has rolled a 6 and gets another turn
                    this.player1 = this.player1;
                } else {
                    this.player1 = !this.player1;
                }
            },
            moveToken: function() {
                const tokenWidth = game.player1.token[0].offsetWidth;
                let top, left, xAxisFirst;

                // Move tokens based on whose turn it is and if a dice has been rolled
                if (this.player1 && this.diceRoll) {
                    // Calculate whether to animate xAxis first
                    xAxisFirst = spaces[game.player1.space].xAxisFirst;
                    // Calculate new space
                    game.player1.space = (game.player1.space + this.diceRoll) % spaces.length;
                    // Calculate top and left values
                    top = game.player1.position().top() + ((game.player1.position().width / 2) - (tokenWidth / 2));
                    left = game.player1.position().left() + ((game.player1.position().width / 2) - (tokenWidth / 2));
                    // Return data about token and board space
                    return {token: game.player1.token, top, left, xAxisFirst};

                } else if (!this.player1 && this.diceRoll) {
                    // Calculate whether to animate xAxis first
                    xAxisFirst = spaces[game.player2.space].xAxisFirst;
                    // Calculate new space
                    game.player2.space = (game.player2.space + this.diceRoll) % spaces.length;
                    // Calculate top and left values
                    top = game.player2.position().top() + ((game.player2.position().width / 2) - (tokenWidth / 2));
                    left = game.player2.position().left() + ((game.player2.position().width / 2) - (tokenWidth / 2));
                    // Return data about token and board space
                    return {token: game.player2.token, top, left, xAxisFirst};

                } else if (!this.diceRoll) {
                    // Place tokens before game starts
                    top = game.player1.position().top() + ((game.player1.position().width / 2) - (tokenWidth / 2));
                    left = game.player1.position().left() + ((game.player1.position().width / 2) - (tokenWidth / 2));

                    game.player1.token.css({'left': `${left}px`, 'top': `${top}px`});
                    game.player2.token.css({'left': `${left}px`, 'top': `${top}px`});
                    
                }
            }
        }
    }