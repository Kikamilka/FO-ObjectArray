export { ServiceDating };

function ServiceDating(people){
	this.people = people;
};

ServiceDating.prototype.filtered = function() {
	return this.people.filter(function(person) {
		if (person.age >= 18 && person.age <= 25 && person.sex == "male")
			return person;
	}).map(function(person) {
		return person.name;
	});
}

ServiceDating.prototype.printNames = function() {
	console.log(this.people.map(function(person){
		return person.name;
	}));
}

ServiceDating.prototype.listCity = function() {
	return this.people.reduce(function(prev, person) {
		if (prev[person.city] === undefined) {
			prev[person.city] = [];
		}
		prev[person.city].push(person);	
		return prev;
	}, []);
}

ServiceDating.prototype.sortListCityForPeople = function() {
	return this.people.reduce(function(prev, person) {
		if (prev.find(function(city) {
			if (city[0] == person.city) {
				city[1]++;
				return true;
			}
			return false;
		}) === undefined) {
			prev.push([person.city, 1]);
		} 
		return prev;
	}, []).sort(function(first, second) {
		return first[1] < second[1];
	});
}

ServiceDating.prototype.cityEqualSex = function() {
	var cities = this.people.reduce(function(prev, person) {
		if (prev.find(function(city) {
			if (city[0] == person.city) {
				if(person.sex == "male"){
					city[1]++;
				}			
				else {
					city[1]--;
				}
				return true;
			}
			return false;
		}) === undefined) {
			if(person.sex == "male"){
				prev.push([person.city, 1]);
			}
			else
				prev.push([person.city, -1]);
		} 
		return prev;
	}, []);
	var equalSexCities = cities.reduce(function(prev, city) {
		if (city[1] == 0) {
			prev.push(city[0]);
		}
		return prev;
	}, []);
return equalSexCities.length > 0;
}