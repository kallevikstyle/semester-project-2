// Animation for player tokens moving on the game board
export function token(data) {
    // Delay animation until dice animation is completed (2 seconds)
    setTimeout(function() {
        if (data.xAxisFirst) {
            // Move on x-axis first
            data.token.animate({left: `${data.left}px`}, 1000);
            data.token.animate({top: `${data.top}px`}, 1000);
            
        } else {
            // Move on y-axis first
            data.token.animate({top: `${data.top}px`}, 1000);
            data.token.animate({left: `${data.left}px`}, 1000);
        }
    }, 2400);
}

// Flip battle cards
export function battleCard() {
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
    }, 4000);
}