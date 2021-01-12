// Coordinates and dimensions for board spaces
const spaces = {
    xAxisLeft: 329.8876,
    xAxisRight: 929.3828,
    yAxisTop: 232.841,
    yAxisBottom: 454.7887,
    standardWidth: 32.7542,
    specialWidth: 43.8783
};
    
    
export const createBoardSpaces = {
    displaySpaces: function(guideline) {
        
    },
    start: function() {
        // Create guideline for spaces
        const parent = $('.gameboard'),
            boardSpaceContainer = $('<div></div>'),
            boardSpaces = $('<div></div>');

        boardSpaceContainer.addClass('gameboard__space-container');
        boardSpaces.addClass('gameboard__spaces');
        // Give guideline dimentions and positioning
        boardSpaceContainer.css({
            "width": `${spaces.xAxisRight - spaces.xAxisLeft}px`,
            "height": `${spaces.yAxisBottom - spaces.yAxisTop}px`,
            "top": `${spaces.yAxisTop}px`,
            "left": `${spaces.xAxisLeft}px`
        });
       
        boardSpaceContainer.append(boardSpaces);
        parent.append(boardSpaceContainer);

        this.displaySpaces(boardSpaces);
    }
};

