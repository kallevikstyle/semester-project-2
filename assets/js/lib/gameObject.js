import { spaces } from "./components/boardSpaceDetails.js";

// Game object with details about game and players
export let game = {
        dice: document.querySelector('animated-dice'),
        narrative: $('.gameboard__narrative'),
        narrativeTitle: $('.gameboard__narrative-title'),
        narrativeText: $('.gameboard__narrative-text'),
        spacesTotal: 30,
        spaces: spaces,
        cards: [],
        standardArmyGain: 5000,
        armyToWin: 100000,
        timing: {
            // Animation durations named in milliseconds
            dice: 2000,
            moveToken: 2000,
            flipCard: function(){
                return this.dice + this.moveToken + 400;
            }, 
            scoreUpdate: 0
        },
        player1: {
            name: localStorage.getItem('player1'),
            alias: localStorage.getItem('alias1'),
            token: $('.gameboard__token--player1'),
            army: 80000,
            armyChange: false,
            space: 0, 
            position: function() {
                return game.spaces[this.space];
            }    
        },
        player2: {
            name: localStorage.getItem('player2'),
            alias: localStorage.getItem('alias2'),
            token: $('.gameboard__token--player2'),
            army: 80000,
            armyChange: false,
            space: 0, 
            position: function() {
                return game.spaces[this.space];
            }  
        },
        turn: {
            player1: true,
            diceRoll: null,
            token: null,
            moveTop: 0,
            moveLeft: 0,
            xAxisFirst: true,
            battleCard: 0,
            updateNarrative: function(player, zone, soldiers) {
                let armyChange = 0;
                if (soldiers < 0) {
                    armyChange = `lost <span class="loss">${Math.abs(soldiers)}</span> soldiers`;
                } else if (soldiers > 0) {
                    armyChange = `gained <span class="gain">${soldiers}</span> soldiers`;
                } else if (soldiers === 0) {
                    armyChange = `did not gain any soldiers`;
                } else {
                    armyChange = `captured the throne! ${player.name} is the winner!`;
                }
                setTimeout(function() {
                    game.narrativeTitle.html(`${player.name}`);
                    game.narrativeText.html(`${player.alias} went to ${zone} and ${armyChange}`)
                }, 1000);
                
            },
            switchTurns: function(diceRoll) {
                if (diceRoll === 6) {
                    // The player has rolled a 6 and gets another turn
                    this.player1 = this.player1;
                } else {
                    this.player1 = !this.player1;
                }
            },
            getNextSpace: function() {
                const tokenWidth = game.player1.token[0].offsetWidth;
                let top, left, xAxisFirst;

                // Move tokens based on whose turn it is and if a dice has been rolled
                if (this.player1 && this.diceRoll) {
                    // Calculate whether to animate xAxis first
                    xAxisFirst = game.spaces[game.player1.space].xAxisFirst;
                    // Calculate new space
                    game.player1.space = (game.player1.space + this.diceRoll) % game.spaces.length;
                    // Calculate top and left values
                    top = game.player1.position().top() + ((game.player1.position().width / 2) - (tokenWidth / 2));
                    left = game.player1.position().left() + ((game.player1.position().width / 2) - (tokenWidth / 2));
                    // Declare which token to move
                    this.token = game.player1.token;
                    // Check if player has landed on a battle card space
                    if (game.spaces[game.player1.space].battle) {
                        this.battleCard = 1;
                    // Player does not get new soldiers in Kings Landing
                    } else if (game.spaces[game.player1.space].zone === "kingslanding") {
                        this.battleCard = 0;
                        // Update narrative
                        this.updateNarrative(game.player1, game.spaces[game.player1.space].zoneText, 0);
                    } else {
                        this.battleCard = 0;
                        // Player gets standard amount of new soldiers
                        game.player1.army += game.standardArmyGain;
                        game.player1.armyChange = true;
                        // Update narrative
                        this.updateNarrative(game.player1, game.spaces[game.player1.space].zoneText, game.standardArmyGain);


                    }
                } else if (!this.player1 && this.diceRoll) {
                    // Calculate whether to animate xAxis first
                    xAxisFirst = game.spaces[game.player2.space].xAxisFirst;
                    // Calculate new space
                    game.player2.space = (game.player2.space + this.diceRoll) % game.spaces.length;
                    // Calculate top and left values
                    top = game.player2.position().top() + ((game.player2.position().width / 2) - (tokenWidth / 2));
                    left = game.player2.position().left() + ((game.player2.position().width / 2) - (tokenWidth / 2));
                    // Declare which token to move
                    this.token = game.player2.token;
                    // Check if player has landed on a battle card space
                    if (game.spaces[game.player2.space].battle) {
                        this.battleCard = 2;
                    // Player does not get new soldiers in Kings Landing
                    } else if (game.spaces[game.player2.space].zone === "kingslanding") {
                        this.battleCard = 0;
                        // Update narrative
                        this.updateNarrative(game.player1, game.spaces[game.player1.space].zoneText, 0);
                    } else {
                        this.battleCard = 0;
                        // Player gets standard amount of new soldiers
                        game.player2.army += game.standardArmyGain;
                        game.player2.armyChange = true;
                        // Update narrative
                        this.updateNarrative(game.player2, game.spaces[game.player2.space].zoneText, game.standardArmyGain);
                    }
                } else if (!this.diceRoll) {
                    // Place tokens before game starts
                    top = game.player1.position().top() + ((game.player1.position().width / 2) - (tokenWidth / 2));
                    left = game.player1.position().left() + ((game.player1.position().width / 2) - (tokenWidth / 2));

                    game.player1.token.css({'left': `${left}px`, 'top': `${top}px`});
                    game.player2.token.css({'left': `${left}px`, 'top': `${top}px`});
                }

                // Store move values in game object
                this.moveTop = top;
                this.moveLeft = left;
                this.xAxisFirst = xAxisFirst;
            },
            start: function () {
                // Reset battleCard variable
                this.battleCard = 0;
                // Get diceRoll from dice element and move token
                this.diceRoll = Number(game.dice.dataset.diceRoll);
                // TEST DICE ---
                // animateCard(game);
                // this.diceRoll = 13;
                // TEST DICE END ----
                
            }
        }
    }