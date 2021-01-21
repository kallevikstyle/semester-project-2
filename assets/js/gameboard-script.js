import animatedDice from "./lib/components/animated-dice/animatedDice.js";
import { createBoardSpaces } from "./lib/boardSpaces.js";
import { battleCard } from "./lib/battleCardMethods.js";
import { cards } from "./lib/components/battleCardDetails.js";
import { game } from "./lib/gameObject.js";
import { scoreBoard } from "./lib/scoreBoard.js";
import { checkWinner } from "./lib/checkWinner.js";
// Animations
import { token as animateToken, battleCard as animateCard } from "./lib/animations.js";

// Check if players exist in localStorage
if (localStorage.getItem('player1') && localStorage.getItem('player2') && localStorage.getItem('alias1') && localStorage.getItem('alias2')) {
    // Place spaces on board
    createBoardSpaces.start(game.spaces);
    // Place player tokens on board
    game.turn.getNextSpace();
    // Add battlecards to game
    game.cards = cards;
    // Set up scoreboard
    scoreBoard.setup(game);
    // Dice click event
    game.dice.addEventListener('click', function() {
        // Start new turn
        game.turn.start();
        game.turn.getNextSpace();
        animateToken(game);
        // Deal battle card
        battleCard.dealCard(game, animateCard);
        
        // Update scoreboard after turn animations have finished
        setTimeout(function() {
            scoreBoard.update(game);
        }, game.timing.scoreUpdate);

        // Check if player has enough troops for capital
        checkWinner(game);
        // Switch turns
        game.turn.switchTurns(game.turn.diceRoll);
    });
        

} else {
    // Create error handling
    console.log("No players are selected. Please go back to home page and select players");
}
