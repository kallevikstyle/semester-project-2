// Animations
import { winner as animateWinner } from "./lib/animations.js";

(function() {
    const announceWinner = $('.game-victory__announcement'),
        avatarContainer = $('.game-victory__ceremony-winner'),
        winner = localStorage.getItem('winner'),
        avatar = localStorage.getItem('avatar');

    // Announce the winner
    announceWinner.html(`${winner} has won the throne!`);
    // Display winner avatar
    avatarContainer.css("background-image", `url('assets/images/characters/${avatar}')`)
    animateWinner(avatarContainer);

})();