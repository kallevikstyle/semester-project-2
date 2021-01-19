import animatedDice from "./lib/components/animated-dice/animatedDice.js";
import { createBoardSpaces } from "./lib/boardSpaces.js";
import { spaces } from "./lib/components/boardSpaceDetails.js";
import { battleCard } from "./lib/showBattleCard.js";
import { cards } from "./lib/components/battleCardDetails.js";
import { game } from "./lib/gameObject.js";
// Animations
import { token as animateToken, battleCard as animateCard } from "./lib/animations.js";

// Check if players exist in localStorage
if (localStorage.getItem('player1') && localStorage.getItem('player2') && localStorage.getItem('alias1') && localStorage.getItem('alias2')) {
    const dice = document.querySelector('animated-dice');
    
    // Place spaces on board
    createBoardSpaces.start(spaces);
    // Place player tokens on board
    game.turn.moveToken();
    // Dice click event
    dice.addEventListener('click', function() {
        // Reset battleCard variable
        game.turn.battleCard = 0;
        // Get diceRoll from dice element and move token
        game.turn.diceRoll = Number(dice.dataset.diceRoll);
        // TEST DICE ---
        // animateCard(game);
        // game.turn.diceRoll = 3;
        // TEST DICE END ----
        game.turn.moveToken();
        animateToken(game);
        // Check if player has landed on a battle card space
        if (game.turn.battleCard === 1) {
            animateCard(game);
            // Player gets more or less troops from the battle card
            // Insert delay
            game.player1.troops += battleCard.show(cards, spaces[game.player1.space].zone);
        } else if (game.turn.battleCard === 2) {
            animateCard(game);
            // Player gets more or less troops from the battle card
            // Insert delay
            game.player2.troops += battleCard.show(cards, spaces[game.player2.space].zone);
        } else {
            console.log(game.turn.battleCard)
        }
        console.log("Player1: " + game.player1.troops);
        console.log("Player2: " + game.player2.troops);
        // Switch turns
        game.turn.switchTurns(game.turn.diceRoll);
        
    });

} else {
    // Create error handling
    console.log("No players are selected. Please go back to home page and select players");
}
