// Coordinates and dimensions for board spaces
export const spaceGuide = {
    containerLeft: 327,
    containerTop: 233,
    containerWidth: 605,
    containerHeigth: 220,
    largeWidth: 43,
    standardWidth: 33
};

export const spaces = [
    {
        // Bottom left
        id: 0,
        width: spaceGuide.standardWidth,
        top: function() {
            return spaceGuide.containerHeigth - (this.width / 2);	
        },
        left: function() {
            return 0 - (this.width / 2);
        },
        zone: "start"
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
        zone: "meereen"
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
        zone: "meereen"
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
        zone: "meereen"
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
        zone: "meereen"
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
        zone: "meereen"
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
        zone: "winterfell"
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
        zone: "winterfell"
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
        zone: "winterfell"
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
        zone: "winterfell"
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
        zone: "winterfell"
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
        zone: "castleblack"
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
        zone: "castleblack"
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
        zone: "castleblack"
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
        zone: "castleblack"
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
        zone: "castleblack"
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
        zone: "hardhome"
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
        zone: "hardhome"
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
        zone: "hardhome"
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
        zone: "hardhome"
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
        zone: "hardhome"
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
        zone: "sunspear"
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
        zone: "sunspear"
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
        zone: "sunspear"
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
        zone: "sunspear"
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
        zone: "sunspear"
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
        zone: "dragon"
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
        zone: "kingslanding"
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
        zone: "kingslanding"
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
        zone: "kingslanding"
    }
]