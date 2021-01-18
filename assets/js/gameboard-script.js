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
        // Get diceRoll from dice element and move token
        game.turn.diceRoll = Number(dice.dataset.diceRoll);
        animateToken(game.turn.moveToken());
        // Check if player has landed on a battle card space
        if (game.turn.battleCard === 1) {
            animateCard();
            battleCard.show(cards, spaces[game.player1.space].zone, 'player1');
        } else if (game.turn.battleCard === 2) {
            animateCard();
            battleCard.show(cards, spaces[game.player2.space].zone, 'player2');
        } else {
            console.log(game.turn.battleCard)
        }
        
        // Switch turns
        game.turn.switchTurns(game.turn.diceRoll);
        
    });

} else {
    // Create error handling
    console.log("No players are selected. Please go back to home page and select players");
}
