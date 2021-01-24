import animatedDice from "./lib/components/animated-dice/animatedDice.js";
import { createBoardSpaces } from "./lib/boardSpaces.js";
import { battleCard } from "./lib/battleCardMethods.js";
import { cards } from "./lib/components/battleCardDetails.js";
import { game } from "./lib/gameObject.js";
import { turnStatus} from "./lib/centerPanel.js";
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
    game.dice.addEventListener('click', function(event) {
        // Hide narrative
        game.narrative.toast('hide');
        // Display board action
        turnStatus.action("Rolling...");
        setTimeout(function() {
            turnStatus.action("Moving...");
        }, game.timing.dice);
        // Disable dice until next turn
        event.target.offsetParent.style.zIndex = 0;
        // Start new turn
        game.turn.start();
        game.turn.getNextSpace();
        animateToken(game);
        // Deal battle card
        battleCard.dealCard(game, animateCard);
        
        // End this turn after animations have finished
        setTimeout(function() {
            // Update scoreboard
            scoreBoard.update(game);
            // Check if player has enough troops for capital
            checkWinner(game);
            // Show narrative
            game.narrative.toast('show');
            // Switch turns
            turnStatus.action(game.turn.switchTurns(game.turn.diceRoll));
            turnStatus.player(game);
            // Enable dice for new turn
            event.target.offsetParent.style.zIndex = 1000;
            // Autoplay if player2 is computer
            if (!game.turn.player1 && !game.player2.human) {
                game.turn.autoPlayer();
            }
            
        }, game.timing.scoreUpdate);
    });

    // Set game mode
    if (localStorage.getItem('gameMode') === 'singleplayer') {
        game.player2.human = false;
    } else if (localStorage.getItem('gameMode') === 'multiplayer') {
        game.player2.human = true;
    }
    // Decide which player will start
    game.turn.decideFirstTurn();
    game.narrative.toast('show');
    // Set up center panel
    turnStatus.player(game);
    
        

} else {
    // Activate modal to display error message    
    $('#noPlayersSelected').modal();
}
