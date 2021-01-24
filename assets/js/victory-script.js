(function() {
    const announceWinner = $('.game-victory__announcement'),
        winner = localStorage.getItem('winner');

    announceWinner.html(`${winner} has won the throne!`);
})();