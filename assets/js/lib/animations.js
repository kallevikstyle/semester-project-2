// Animation for player tokens moving on the game board
export function token(data) {
    data.token.animate({
        // TO DO:
        // Use xAxis property to decide which axis to animate first
        left: `${data.left}px`,
        top: `${data.top}px`
    }, 2000);
}