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

export function battleCard() {
    const cardContent = $('.gameboard__battle-card-content'),
        cardInner = $('.gameboard__battle-card-inner');

    setTimeout(function() {
        cardInner.addClass('gameboard__battle-card-inner--flip');
        // Make this card a modal somehow
        // https://stackoverflow.com/questions/13183630/how-to-open-a-bootstrap-modal-window-using-jquery
    }, 4000);
}