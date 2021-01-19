// Animation for player tokens moving on the game board
export function token(game) {
    // Delay animation until dice animation is completed
    setTimeout(function() {
        if (game.turn.xAxisFirst) {
            // Move on x-axis first
            game.turn.token.animate({left: `${game.turn.moveLeft}px`}, (game.timing.moveToken / 2));
            game.turn.token.animate({top: `${game.turn.moveTop}px`}, (game.timing.moveToken / 2));
            
        } else {
            // Move on y-axis first
            game.turn.token.animate({top: `${game.turn.moveTop}px`}, (game.timing.moveToken / 2));
            game.turn.token.animate({left: `${game.turn.moveLeft}px`}, (game.timing.moveToken / 2));
        }
    }, (game.timing.dice + 400));
}

// Flip battle cards
export function battleCard(game) {
    const cardInner = $('.gameboard__battle-card-inner'),
        windowWidth = $(window).width();
    // Flip out card
    setTimeout(function() {
        cardInner.addClass('gameboard__battle-card-inner--flip');
        cardInner.animate({
            left: `${(windowWidth / 2)}px`,
            top: `-40vh`
        }, "fast");
        // Click event to close card
        cardInner.click(function() {
            cardInner.removeClass('gameboard__battle-card-inner--flip');
            cardInner.animate({
                left: `0px`,
                top: `0px`
            }, 50);
        });
    }, game.timing.flipCard());
}