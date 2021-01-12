import animatedDice from "./lib/components/animated-dice/animatedDice.js";

// Check if players exist in localStorage
if (localStorage.getItem('player1') && localStorage.getItem('player2') && localStorage.getItem('alias1') && localStorage.getItem('alias2')) {
    // Declare game object
    let game = {
        player1: {
            name: localStorage.getItem('player1'),
            alias: localStorage.getItem('alias1'),
            troops: 0
        },
        player2: {
            name: localStorage.getItem('player2'),
            alias: localStorage.getItem('alias1'),
            troops: 0
        }
    }


} else {
    // Create error handling
    console.log("No players are selected. Please go back to home page and select players");
}
