export const createBoardSpaces = {
    displaySpaces: function(parent, spaces) {
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
            newSpace.attr('id', `space${spaces[i].id}`);
            parent.append(newSpace);
        }
    },
    start: function(spaces) {
        // Create guideline for spaces
        const parent = $('.gameboard__spaces');
           
        this.displaySpaces(parent, spaces);
    }
};