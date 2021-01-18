import animatedDice from "./lib/components/animated-dice/animatedDice.js";
import { createBoardSpaces } from "./lib/boardSpaces.js";
import { spaces } from "./lib/components/boardSpaceDetails.js";
import { battleCard } from "./lib/flipBattleCard.js";
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
        // Get diceRoll from dice element and move token
        game.turn.diceRoll = Number(dice.dataset.diceRoll);
        animateToken(game.turn.moveToken());
        // Execute actions based on which space player has landed on
        // battleCard.flip(cards);
        animateCard();
        // Switch turns
        game.turn.switchTurns(game.turn.diceRoll);
        
    });

} else {
    // Create error handling
    console.log("No players are selected. Please go back to home page and select players");
}
