function searchInArray(name, query){
	var matches = 0;
	for(i=0;i<query.length;i++){
		if(name.indexOf(query[i])>-1){
			matches++;
		}
	}
	return matches;
}

var recipes = [];

function search(searchString){
	var recipesToSearch = recipes.slice(0);
	var query = searchString.split(" ");
	for(j=0; j<recipesToSearch.length; j++){
		recipesToSearch[j].searchMatches = searchInArray(recipesToSearch[j].name, query);
	}
	recipesToSearch.sort(function(a, b){
		return b.searchMatches - a.searchMatches;
	});
	var maxMatches = recipesToSearch[0].searchMatches;
	return recipesToSearch.filter(function(recipe){
		return recipe.searchMatches == maxMatches;
	});
}
