function updateWinnerPanel(name) {
    const winnerPanel = $('.winner-panel'),
        winnerName = $('.winner-panel__winner-name');

    winnerName.html(`${name}`);
    winnerPanel.css('display', 'block');

}

export function checkWinner(game)  {
    const dice = $('animated-dice');

    if (game.turn.player1 
        && game.player1.army >= game.armyToWin 
        && game.spaces[game.player1.space].zone === "kingslanding") {
            // Player 1 is the winner
            localStorage.clear();
            localStorage.setItem('winner', game.player1.name);
            localStorage.setItem('avatar', game.player1.avatar);
            game.turn.updateNarrative(game.player1, game.spaces[game.player1.space].zoneText, null);
            dice.remove();
            updateWinnerPanel(game.player1.name);
        } else if (!game.turn.player1 
            && game.player2.army >= game.armyToWin 
            && game.spaces[game.player2.space].zone === "kingslanding") {
                // Player 2 is the winner
                localStorage.clear();
                localStorage.setItem('winner', game.player2.name);
                localStorage.setItem('avatar', game.player2.avatar);
                game.turn.updateNarrative(game.player2, game.spaces[game.player2.space].zoneText, null);
                dice.remove();
                updateWinnerPanel(game.player2.name);
            }
}