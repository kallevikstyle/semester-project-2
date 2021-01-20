import animatedDice from "./lib/components/animated-dice/animatedDice.js";
import { createBoardSpaces } from "./lib/boardSpaces.js";
import { spaces } from "./lib/components/boardSpaceDetails.js";
import { battleCard } from "./lib/showBattleCard.js";
import { cards } from "./lib/components/battleCardDetails.js";
import { game } from "./lib/gameObject.js";
import { scoreBoard } from "./lib/scoreBoard.js";
// Animations
import { token as animateToken, battleCard as animateCard } from "./lib/animations.js";

// Check if players exist in localStorage
if (localStorage.getItem('player1') && localStorage.getItem('player2') && localStorage.getItem('alias1') && localStorage.getItem('alias2')) {
    // Place spaces on board
    createBoardSpaces.start(spaces);
    // Place player tokens on board
    game.turn.moveToken();
    // Set up scoreboard
    scoreBoard.setup(game);
    // Dice click event
    game.dice.addEventListener('click', function() {
        // Start new turn
        game.turn.start(animateToken, animateCard, battleCard, cards, scoreBoard);
        // Switch turns
        game.turn.switchTurns(game.turn.diceRoll);
    });
        

} else {
    // Create error handling
    console.log("No players are selected. Please go back to home page and select players");
}
