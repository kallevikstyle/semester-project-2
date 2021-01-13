const fallbackDice = document.querySelector('.fallbackDice');


// --- boardSpaces.js start -----

// Coordinates and dimensions for board spaces
const spaceGuide = {
	    containerLeft: 330,
	    containerTop: 233,
	    containerWidth: 600,
	    containerHeigth: 220,
	    largeWidth: 43,
	    standardWidth: 33
	},
    spaces = [
        {
        	id: 0,
        	width: spaceGuide.standardWidth,
        	top: function() {
        		return spaceGuide.containerHeigth - (this.width / 2);	
        	},
        	left: function() {
        		return 0 - (this.width / 2);
        	}
        },
        {
        	id: 11,
        	width: spaceGuide.standardWidth,
        	top: function() {
        		return spaceGuide.containerHeigth - (this.width / 2);	
        	},
        	left: function() {
        		return (spaceGuide.containerWidth - this.width) + (this.width / 2);
        	}
        },
        {
        	id: 15,
        	width: spaceGuide.standardWidth,
        	top: function() {
        		return 0 - (this.width / 2);	
        	},
        	left: function() {
        		return (spaceGuide.containerWidth - this.width) + (this.width / 2);
        	}
        },
        {
        	id: 26,
        	width: spaceGuide.standardWidth,
        	top: function() {
        		return 0 - (this.width / 2);	
        	},
        	left: function() {
        		return 0 - (this.width / 2);
        	}
        }
    ];
    
       
const createBoardSpaces = {
    displaySpaces: function(parent) {
        for (let i = 0; i < spaces.length; i++) {
        	// Create new space
        	const newSpace = $('<div></div>');

        	newSpace.addClass('gameboard__space');
        	newSpace.css({
        		'width': '33px',
        		'height': '33px',
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

// ----boardSpaces.js end

// ---gameboard-script.js start

// Check if players exist in localStorage
if (localStorage.getItem('player1') && localStorage.getItem('player2') && localStorage.getItem('alias1') && localStorage.getItem('alias2')) {
    // Declare game object and store player details
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
        },
        spaces: null
    }

    createBoardSpaces.start();

} else {
    // Create error handling
    console.log("No players are selected. Please go back to home page and select players");
}
