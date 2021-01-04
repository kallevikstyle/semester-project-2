
const Characters = (function() {
	let data = {
		message: function() {
			console.log("Hello you");
		},
		loadApi: function() {
			fetch('/assets/json/characters.json')
	        .then(result => result.json())
	        .then((data) => {
	           console.log(data);
	        })
	        .catch(err => console.log(err));
		}
	}

	return {
		data
	}
})();

Characters.data.loadApi();