const boardSpaceContainer = document.querySelector('.gameboard__space-container');
// Coordinates and dimensions for board spaces
const spaceGuide = {
    containerLeft: boardSpaceContainer.offsetLeft,
    containerTop: boardSpaceContainer.offsetTop,
    containerWidth: boardSpaceContainer.offsetWidth,
    containerHeigth: boardSpaceContainer.offsetHeight,
    largeWidth: 43,
    standardWidth: 33
};

export const spaces = [
    {
        // Bottom left
        id: 0,
        width: spaceGuide.largeWidth,
        top: function() {
            return spaceGuide.containerHeigth - (this.width / 2);	
        },
        left: function() {
            return 0 - (this.width / 2);
        },
        zone: 'start',
        battle: false,
        xAxisFirst: true
    },
    {
        id: 1,
        width: spaceGuide.standardWidth,
        top: function() {
            return spaceGuide.containerHeigth - (this.width / 2);	
        },
        left: function() {
            return 55 - (this.width / 2);
        },
        zone: 'meereen',
        battle: false,
        xAxisFirst: true
    },
    {
        id: 2,
        width: spaceGuide.standardWidth,
        top: function() {
            return spaceGuide.containerHeigth - (this.width / 2);	
        },
        left: function() {
            return 110 - (this.width / 2);
        },
        zone: 'meereen',
        battle: false,
        xAxisFirst: true
    },
    {
        id: 3,
        width: spaceGuide.largeWidth,
        top: function() {
            return spaceGuide.containerHeigth - (this.width / 2);	
        },
        left: function() {
            return 165 - (this.width / 2);
        },
        zone: 'meereen',
        battle: true,
        xAxisFirst: true
    },
    {
        id: 4,
        width: spaceGuide.standardWidth,
        top: function() {
            return spaceGuide.containerHeigth - (this.width / 2);	
        },
        left: function() {
            return 220 - (this.width / 2);
        },
        zone: 'meereen',
        battle: false,
        xAxisFirst: true
    },
    {
        id: 5,
        width: spaceGuide.standardWidth,
        top: function() {
            return spaceGuide.containerHeigth - (this.width / 2);	
        },
        left: function() {
            return 275 - (this.width / 2);
        },
        zone: 'meereen',
        battle: false,
        xAxisFirst: true
    },
    {
        id: 6,
        width: spaceGuide.standardWidth,
        top: function() {
            return spaceGuide.containerHeigth - (this.width / 2);	
        },
        left: function() {
            return 330 - (this.width / 2);
        },
        zone: 'winterfell',
        battle: false,
        xAxisFirst: true
    },
    {
        id: 7,
        width: spaceGuide.standardWidth,
        top: function() {
            return spaceGuide.containerHeigth - (this.width / 2);	
        },
        left: function() {
            return 385 - (this.width / 2);
        },
        zone: 'winterfell',
        battle: false,
        xAxisFirst: true
    },
    {
        id: 8,
        width: spaceGuide.largeWidth,
        top: function() {
            return spaceGuide.containerHeigth - (this.width / 2);	
        },
        left: function() {
            return 440 - (this.width / 2);
        },
        zone: 'winterfell',
        battle: true,
        xAxisFirst: true
    },
    {
        id: 9,
        width: spaceGuide.standardWidth,
        top: function() {
            return spaceGuide.containerHeigth - (this.width / 2);	
        },
        left: function() {
            return 495 - (this.width / 2);
        },
        zone: 'winterfell',
        battle: false,
        xAxisFirst: true
    },
    {
        id: 10,
        width: spaceGuide.standardWidth,
        top: function() {
            return spaceGuide.containerHeigth - (this.width / 2);	
        },
        left: function() {
            return 550 - (this.width / 2);
        },
        zone: 'winterfell',
        battle: false,
        xAxisFirst: true
    },
    {
        // Bottom right
        id: 11,
        width: spaceGuide.standardWidth,
        top: function() {
            return spaceGuide.containerHeigth - (this.width / 2);	
        },
        left: function() {
            return spaceGuide.containerWidth - (this.width / 2);
        },
        zone: 'castleblack',
        battle: false,
        xAxisFirst: false
    },
    {
        id: 12,
        width: spaceGuide.standardWidth,
        top: function() {
            return 165 - (this.width / 2);	
        },
        left: function() {
            return spaceGuide.containerWidth - (this.width / 2);
        },
        zone: 'castleblack',
        battle: false,
        xAxisFirst: false
    },
    {
        id: 13,
        width: spaceGuide.largeWidth,
        top: function() {
            return 110 - (this.width / 2);	
        },
        left: function() {
            return spaceGuide.containerWidth - (this.width / 2);
        },
        zone: 'castleblack',
        battle: true,
        xAxisFirst: false
    },
    {
        id: 14,
        width: spaceGuide.standardWidth,
        top: function() {
            return 55 - (this.width / 2);	
        },
        left: function() {
            return spaceGuide.containerWidth - (this.width / 2);
        },
        zone: 'castleblack',
        battle: false,
        xAxisFirst: false
    },
    {
        // Top right
        id: 15,
        width: spaceGuide.standardWidth,
        top: function() {
            return 0 - (this.width / 2);	
        },
        left: function() {
            return (spaceGuide.containerWidth - this.width) + (this.width / 2);
        },
        zone: 'castleblack',
        battle: false,
        xAxisFirst: true
    },
    {
        id: 16,
        width: spaceGuide.standardWidth,
        top: function() {
            return 0 - (this.width / 2);	
        },
        left: function() {
            return 550 - (this.width / 2);
        },
        zone: 'hardhome',
        battle: false,
        xAxisFirst: true
    },
    {
        id: 17,
        width: spaceGuide.standardWidth,
        top: function() {
            return 0 - (this.width / 2);	
        },
        left: function() {
            return 495 - (this.width / 2);
        },
        zone: 'hardhome',
        battle: false,
        xAxisFirst: true
    },
    {
        id: 18,
        width: spaceGuide.largeWidth,
        top: function() {
            return 0 - (this.width / 2);	
        },
        left: function() {
            return 440 - (this.width / 2);
        },
        zone: 'hardhome',
        battle: true,
        xAxisFirst: true
    },
    {
        id: 19,
        width: spaceGuide.standardWidth,
        top: function() {
            return 0 - (this.width / 2);	
        },
        left: function() {
            return 385 - (this.width / 2);
        },
        zone: 'hardhome',
        battle: false,
        xAxisFirst: true
    },
    {
        id: 20,
        width: spaceGuide.standardWidth,
        top: function() {
            return 0 - (this.width / 2);	
        },
        left: function() {
            return 330 - (this.width / 2);
        },
        zone: 'hardhome',
        battle: false,
        xAxisFirst: true
    },
    {
        id: 21,
        width: spaceGuide.standardWidth,
        top: function() {
            return 0 - (this.width / 2);	
        },
        left: function() {
            return 275 - (this.width / 2);
        },
        zone: 'sunspear',
        battle: false,
        xAxisFirst: true
    },
    {
        id: 22,
        width: spaceGuide.standardWidth,
        top: function() {
            return 0 - (this.width / 2);	
        },
        left: function() {
            return 220 - (this.width / 2);
        },
        zone: 'sunspear',
        battle: false,
        xAxisFirst: true
    },
    {
        id: 23,
        width: spaceGuide.largeWidth,
        top: function() {
            return 0 - (this.width / 2);	
        },
        left: function() {
            return 165 - (this.width / 2);
        },
        zone: 'sunspear',
        battle: true,
        xAxisFirst: true
    },
    {
        id: 24,
        width: spaceGuide.standardWidth,
        top: function() {
            return 0 - (this.width / 2);	
        },
        left: function() {
            return 110 - (this.width / 2);
        },
        zone: 'sunspear',
        battle: false,
        xAxisFirst: true
    },
    {
        id: 25,
        width: spaceGuide.standardWidth,
        top: function() {
            return 0 - (this.width / 2);	
        },
        left: function() {
            return 55 - (this.width / 2);
        },
        zone: 'sunspear',
        battle: false,
        xAxisFirst: true
    },
    {
        // Top left
        id: 26,
        width: spaceGuide.standardWidth,
        top: function() {
            return 0 - (this.width / 2);	
        },
        left: function() {
            return 0 - (this.width / 2);
        },
        zone: 'dragon',
        battle: false,
        xAxisFirst: false
    },
    {
        id: 27,
        width: spaceGuide.standardWidth,
        top: function() {
            return 55 - (this.width / 2);	
        },
        left: function() {
            return 0 - (this.width / 2);
        },
        zone: 'kingslanding',
        battle: false,
        xAxisFirst: false
    },
    {
        id: 28,
        width: spaceGuide.standardWidth,
        top: function() {
            return 110 - (this.width / 2);	
        },
        left: function() {
            return 0 - (this.width / 2);
        },
        zone: 'kingslanding',
        battle: false,
        xAxisFirst: false
    },
    {
        id: 29,
        width: spaceGuide.standardWidth,
        top: function() {
            return 165 - (this.width / 2);	
        },
        left: function() {
            return 0 - (this.width / 2);
        },
        zone: 'kingslanding',
        battle: false,
        xAxisFirst: false
    }
]