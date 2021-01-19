export const scoreBoard = {
    avatar1: $('.scoreboard__avatar--player1'),
    avatar2: $('.scoreboard__avatar--player2'),
    statusPanel: $('.scoreboard__status-panel'),
    setup: function(game) {
        this.statusPanel.html(`
            <!-- Player 1 -->
            <div class="scoreboard__status scoreboard__status--player1">
                <div class="scoreboard__status-header">
                    <div class="player-badge">
                        <span class="badge badge-pill badge-primary">Player 1</span>
                    </div>
                    <h3 class="scoreboard__status-title">${game.player1.name}</h3>
                </div>
                
                <div class="scoreboard__status-body">
                    <p><span class="scoreboard__status-body--army-count">${game.player1.troops}</span> soldiers</p>
                </div>
                <div class="scoreboard__status-footer">
                    <p>need at least 90000 more</p>
                </div>
            </div>
            <!-- Player 2 -->
            <div class="scoreboard__status scoreboard__status--player2">
                <div class="scoreboard__status-header">
                    <div class="player-badge">
                        <span class="badge badge-pill badge-secondary">Player 2</span>
                    </div>
                    <h3 class="scoreboard__status-title">${game.player2.name}</h3>
                </div>
                <div class="scoreboard__status-body">
                    <p><span class="scoreboard__status-body--army-count">${game.player2.troops}</span> soldiers</p>
                </div>
                <div class="scoreboard__status-footer">
                    <p>need at least 90000 more</p>
                </div>
            </div>
        `);
    },
    update: function(game) {
        // Make this function update only needed parts.
        // Same goes for setup function
        this.setup(game);
    }
}