export function checkWinner(game)  {

    if (game.turn.player1 
        && game.player1.army >= game.armyToWin 
        && game.spaces[game.player1.space].zone === "kingslanding") {
            // Player 1 is the winner
            console.log("Player1 is da winner!!");
        } else if (!game.turn.player1 
            && game.player2.army >= game.armyToWin 
            && game.spaces[game.player2.space].zone === "kingslanding") {
                // Player 2 is the winner
                console.log("Player2 is da winner!!");
            }
}