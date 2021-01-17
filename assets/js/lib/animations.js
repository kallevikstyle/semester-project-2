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