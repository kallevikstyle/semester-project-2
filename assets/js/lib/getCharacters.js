export const sortCharacters = {
        sortByNames: function(data) {
            // Sort input array of objects by name property
            return data.sort((a, b) => (a.Name > b.Name) ? 1 : -1);
        },
        pickRandomAlias: function(items) {
            // Pick a random alias for each character name
            return `&laquo;${items[Math.floor(Math.random() * items.length)]}&raquo;`;

        },
        createArray: function(data) {
            let characters = this.sortByNames(data),
                playable = [];
            
            // Create array of playable characters
            characters.forEach(function(item) {
                let itemObj = {
                    id: item.Id,
                    name: item.Name,
                    alias: sortCharacters.pickRandomAlias(item.Aliases),
                    born: item.Born,
                    img: item.img
                };
            
                playable.push(itemObj);

            });
            
            return playable;   
        }
    }

    
