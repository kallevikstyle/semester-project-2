import { spaces, spaceGuide } from "./components/boardSpaceDetails.js";

export const createBoardSpaces = {
    displaySpaces: function(parent) {
        for (let i = 0; i < spaces.length; i++) {
            // Create new space
            const newSpace = $('<div></div>');

            newSpace.addClass(`gameboard__space gameboard__space--${spaces[i].zone}`);
            newSpace.css({
                'width': `${spaces[i].width}px`,
                'height': `${spaces[i].width}px`,
                'top': `${spaces[i].top()}px`,
                'left': `${spaces[i].left()}px`
            });
            parent.append(newSpace);
        }
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
            "width": `${spaceGuide.containerWidth}px`,
            "height": `${spaceGuide.containerHeigth}px`,
            "top": `${spaceGuide.containerTop}px`,
            "left": `${spaceGuide.containerLeft}px`
        });
    
        boardSpaceContainer.append(boardSpaces);
        parent.append(boardSpaceContainer);
       
        this.displaySpaces(boardSpaces);
    }
};