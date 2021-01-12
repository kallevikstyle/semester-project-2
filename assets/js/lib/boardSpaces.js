// Coordinates and dimensions for board spaces
const spaceDetails = {
    xAxisLeft: 329.8876,
    xAxisRight: 929.3828,
    yAxisTop: 232.841,
    yAxisBottom: 454.7887,
    largeWidth: 32.7542,
    standardWidth: 43.8783
    },
    spaces = [
        {id: 0, large: false, x: spaceDetails.xAxisLeft, y: spaceDetails.yAxisBottom}
    ];
    
    
export const createBoardSpaces = {
    displaySpaces: function(guideline) {
        // Dilemma:
        // Bruke absolutte koordinater på gameboard
        // eller
        // Bruke relative koordinater fra guideline div
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
            "width": `${spaceDetails.xAxisRight - spaceDetails.xAxisLeft}px`,
            "height": `${spaceDetails.yAxisBottom - spaceDetails.yAxisTop}px`,
            "top": `${spaceDetails.yAxisTop}px`,
            "left": `${spaceDetails.xAxisLeft}px`
        });
       
        boardSpaceContainer.append(boardSpaces);
        parent.append(boardSpaceContainer);

        this.displaySpaces(boardSpaces);
    }
};

